import Link from '@components/Link';
import Pre from '@components/Pre';
import Template from '@components/Template';
import { Stack } from '@lib/std';
import substitute from '@lib/substitute';
import { format } from 'date-fns';
import fs from 'fs';
import { headingRank } from 'hast-util-heading-rank';
import { h } from 'hastscript';
import vim from 'highlight.js/lib/languages/vim';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import React, {
  createElement,
  Fragment,
  ReactElement,
  ReactNode,
  useEffect,
  useState
} from 'react';
import readingTime from 'reading-time';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import rehypeReact from 'rehype-react';
import rehypeToc from 'rehype-toc';
import rehypeTwemojify from 'rehype-twemojify';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

export default function Article({
  markdown,
  title
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [publishedTime, setPublishedTime] = useState('2022-01-11');
  const estimatedReadingTime = readingTime(markdown);
  const [content, setContent] = useState<ReactNode>();
  const [toc, setToc] = useState<ReactNode>();

  useEffect(() => {
    (async () => {
      const jsx = (
        await unified()
          .use(remarkParse)
          .use(remarkMath)
          .use(remarkGfm)
          .use(remarkGemoji)
          .use(remarkRehype)
          .use(rehypeKatex)
          .use(() => {
            return (tree) => {
              const stack = new Stack();
              visit(tree, 'element', (node) => {
                const rank = headingRank(node);
                if (rank !== null) {
                  if (!stack.empty()) {
                    if (rank > stack.size()) {
                      while (rank > stack.size() + 1) {
                        stack.push(0);
                      }
                      stack.push(1);
                    } else if (rank == stack.size()) {
                      const val = (!stack.empty() ? stack.top() : 0) + 1;
                      if (!stack.empty()) stack.pop();
                      stack.push(val);
                    } else {
                      // rank < stack.size()
                      while (rank < stack.size()) {
                        if (!stack.empty()) stack.pop();
                      }
                      const val = (!stack.empty() ? stack.top() : 0) + 1;
                      if (!stack.empty()) stack.pop();
                      stack.push(val);
                    }
                  } else {
                    while (rank > stack.size() + 1) {
                      stack.push(0);
                    }
                    stack.push(1);
                  }

                  const str = stack.toArray().join('.');

                  node.children = [
                    h('a', { href: `#s-${str}`, className: 'tw-font-semibold' }, [
                      h('text', {}, [`${str}. `])
                    ]),
                    h('span', {}, node.children)
                  ];

                  node.properties = {
                    id: `s-${str}`,
                    key: `s-${str}`
                  };
                }
              });

              return tree;
            };
          })
          .use(rehypeCodeTitles)
          .use(rehypeHighlight, {
            subset: false,
            languages: {
              vim: vim
            }
          })
          .use(rehypeTwemojify, {
            exclude: ['©', '®', '™', '℗', '↩']
          })
          .use(rehypeToc)
          .use(rehypeReact, { createElement })
          .process(markdown)
      ).result as ReactElement;

      setToc(jsx.props.children[0]);

      // remove TOC
      const _content = React.createElement(
        Fragment,
        {},
        (jsx.props.children as Array<any>).slice(1)
      );

      // substitute components w/ custom components
      const substituted = substitute(_content, {
        pre: Pre,
        a: Link
      });

      setContent(substituted);
    })();
  }, []);

  return (
    <Template title={title}>
      <section className="tw-flex tw-flex-col tw-items-end tw-mb-8">
        <div>
          최근 수정:&nbsp;
          <span className="tw-text-black dark:tw-text-white tw-font-semibold">
            {format(new Date(publishedTime), 'yyyy년 M월 d일')}
          </span>
        </div>
        <div>
          읽는 데 걸리는 시간:&nbsp;
          <span className="tw-text-black dark:tw-text-white tw-font-semibold">{`약 ${Math.ceil(
            estimatedReadingTime.minutes
          )}분`}</span>
        </div>
      </section>
      <div
        className="xl:tw-fixed xl:tw-top-28 xl:tw-left-8 xl:tw-w-60 tw-border-2 tw-rounded-lg tw-p-4 tw-mb-8 tw-w-full"
        id="toc"
      >
        {toc}
      </div>
      <div className="highlight tw-prose dark:tw-prose-invert tw-w-full">{content}</div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
        integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ"
        crossOrigin="anonymous"
      />
    </Template>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { slug } = ctx.query;
  const title =
    slug && (typeof slug === 'string' ? slug : slug.reduce((prev, curr) => prev + '/' + curr));

  const markdown = fs.readFileSync(process.cwd() + '/src/pages/w/test.txt', { encoding: 'utf-8' });

  return {
    props: {
      markdown,
      title
    }
  };
};
