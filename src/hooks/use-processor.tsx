import { createElement, Fragment, ReactElement, useEffect, useState } from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeReact from 'rehype-react';
import rehypeSlug from 'rehype-slug';
import rehypeTwemojify from 'rehype-twemojify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export function useProcessor(text: string) {
  const [content, setContent] = useState<ReactElement>();

  useEffect(() => {
    unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings, {
        properties: {
          className: ['anchor']
        },
        behavior: 'append'
      })
      .use(rehypeCodeTitles)
      .use(rehypePrismPlus, { showLineNumbers: true })
      .use(rehypeTwemojify)
      .use(rehypeReact, { createElement, Fragment })
      .process(text)
      .then((file) => {
        setContent(file.result);
      });
  }, [text]);

  return content;
}
