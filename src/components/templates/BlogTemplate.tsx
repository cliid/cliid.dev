import 'tippy.js/dist/tippy.css'; // optional

import Giscus from '@components/Giscus';
import Link from '@components/Link';
import ViewCounter from '@components/ViewCounter';
import { format } from 'date-fns';
import { useTheme } from 'next-themes';
import React, { PropsWithChildren } from 'react';

import Template from './Template';
import type { Blog } from '.contentlayer/types';

const editUrl = (slug: string) =>
  `https://github.com/cliid/cliid.dev/edit/main/data/blog/${slug}.mdx`;
const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`https://cliid.dev/blog/${slug}`)}`;

export default function BlogTemplate({ children, post }: PropsWithChildren<{ post: Blog }>) {
  const { theme, resolvedTheme } = useTheme();
  return (
    <Template
      title={`${post.title}`}
      description={post.summary}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <section className="tw-flex tw-flex-col tw-items-end tw-mb-8">
        <div>
          최근 수정:&nbsp;
          <span className="tw-font-semibold tw-text-black dark:tw-text-white">
            {format(new Date(post.publishedAt), 'yyyy년 M월 d일')}
          </span>
        </div>
        <div>
          읽는 데 걸리는 시간:&nbsp;
          <span className="tw-font-semibold tw-text-black dark:tw-text-white">{`약 ${Math.ceil(
            post.readingTime.minutes
          )}분`}</span>
        </div>
        <div>
          조회수:&nbsp;
          <span className="tw-font-semibold tw-text-black dark:tw-text-white">
            <ViewCounter slug={post.slug} />회
          </span>
        </div>
      </section>
      <div className="tw-w-full tw-prose dark:tw-prose-dark tw-max-w-none">
        <div className={theme === 'dark' || resolvedTheme === 'dark' ? 'tw-dark' : 'tw-light'}>
          {children}
        </div>
      </div>
      <Giscus />
      <div>
        <Link href={discussUrl(post.slug)}>{'Discuss on Twitter'}</Link>
        {` • `}
        <Link href={editUrl(post.slug)}>{'Edit on GitHub'}</Link>
      </div>
    </Template>
  );
}
