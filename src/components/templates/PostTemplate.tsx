import Giscus from '@components/Giscus';
import Link from '@components/Link';
import ViewCounter from '@components/ViewCounter';
import type { Post } from 'contentlayer/generated';
import { format } from 'date-fns';
import { useTheme } from 'next-themes';
import React, { PropsWithChildren } from 'react';

import Template from './Template';

const editUrl = (slug: string) =>
  `https://github.com/cliid/cliid.dev/edit/main/data/posts/${slug}.mdx`;
const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`https://cliid.dev/blog/${slug}`)}`;

export default function PostTemplate({ children, post }: PropsWithChildren<{ post: Post }>) {
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
          Published:&nbsp;
          <span className="tw-font-semibold tw-text-black dark:tw-text-white">
            {format(new Date(post.publishedAt), 'LLLL do, yyyy')}
          </span>
        </div>
        <div>
          Reading time:&nbsp;
          <span className="tw-font-semibold tw-text-black dark:tw-text-white">{`${Math.ceil(
            post.readingTime.minutes
          )} mins`}</span>
        </div>
        <div>
          Views:&nbsp;
          <span className="tw-font-semibold tw-text-black dark:tw-text-white">
            <ViewCounter slug={post.slug} />
          </span>
        </div>
      </section>
      <div className="tw-w-full tw-prose dark:tw-prose-invert tw-max-w-none">
        <div className={theme === 'dark' || resolvedTheme === 'dark' ? 'tw-dark' : 'tw-light'}>
          {children}
        </div>
      </div>
      <Giscus />
      <div className="tw-flex tw-mb-8 tw-divide-x">
        <div className="tw-pr-2">
          <Link href={discussUrl(post.slug)}>{'Discuss on Twitter'}</Link>
        </div>
        <div className="tw-pl-2">
          <Link href={editUrl(post.slug)}>{'Edit on GitHub'}</Link>
        </div>
      </div>
    </Template>
  );
}
