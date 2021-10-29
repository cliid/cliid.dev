import 'tippy.js/dist/tippy.css'; // optional

import Container from '@components/Container';
import Giscus from '@components/Giscus';
import ViewCounter from '@components/ViewCounter';
import Tippy from '@tippyjs/react/headless';
import { format } from 'date-fns';
import React, { PropsWithChildren } from 'react';

import type { Blog } from '.contentlayer/types';

const editUrl = (slug: string) =>
  `https://github.com/cliid/cliid.dev/edit/main/data/blog/${slug}.mdx`;
const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`https://cliid.dev/blog/${slug}`)}`;

export default function BlogLayout({ children, post }: PropsWithChildren<{ post: Blog }>) {
  return (
    <Container
      title={`${post.title} – Jiwu Jang`}
      description={post.summary}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <article className="tw-w-full">
        <section id="title">
          <h1 className="tw-mb-8 tw-text-5xl lg:tw-text-6xl tw-font-black tw-tracking-tight tw-text-left capsize">
            {post.title.toUpperCase()}
          </h1>
        </section>
        <section>
          <ul className="tw-flex tw-flex-col tw-flex-wrap tw-text-sm tw-list-none tw-space-y-4 tw-mb-16">
            <li className="tw-flex tw-items-center">
              <p className="tw-text-sm">
                <span className="tw-text-gray-500 dark:tw-text-gray-500">Published at&nbsp;</span>
                <span className="tw-text-black dark:tw-text-white tw-font-semibold">
                  {format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
                </span>
              </p>
            </li>
            <li className="tw-mt-2 sm:tw-m-0 tw-text-sm tw-text-gray-500 dark:tw-text-gray-500 tw-flex tw-flex-row tw-items-center">
              <span className="tw-text-black dark:tw-text-white tw-font-semibold">
                <ViewCounter slug={post.slug} />
              </span>
              &nbsp;•&nbsp;
              <span className="tw-text-black dark:tw-text-white tw-font-semibold">{`${Math.ceil(
                post.readingTime.minutes
              )} mins`}</span>
              <span className="tw-text-gray-500 dark:tw-text-gray-500">&nbsp;reading time</span>
              <Tippy
                render={(attrs) => (
                  <div
                    className="tw-text-xs tw-text-dark-text dark:tw-text-text tw-border-2 tw-rounded-md tw-p-3 capsize"
                    tabIndex={-1}
                    {...attrs}
                  >
                    {`This post has ${post.readingTime.words} words. Reading time is calculated using
              275WPM reading speed.`}
                  </div>
                )}
                arrow={false}
                placement="bottom"
              >
                <button
                  type="button"
                  className="tw-bg-gray-300 dark:tw-bg-gray-800 tw-text-xs tw-font-semibold tw-ml-1 tw-flex tw-justify-center tw-items-center tw-w-4 tw-h-4 tw-rounded-full tw-cursor-default"
                >
                  i
                </button>
              </Tippy>
            </li>
          </ul>
        </section>
        <div className="tw-w-full tw-prose dark:tw-prose-dark tw-max-w-none">{children}</div>
        <Giscus />
        <div className="tw-text-sm tw-text-gray-700 dark:tw-text-gray-300">
          <a href={discussUrl(post.slug)} target="_blank" rel="noopener noreferrer">
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a href={editUrl(post.slug)} target="_blank" rel="noopener noreferrer">
            {'Edit on GitHub'}
          </a>
        </div>
      </article>
    </Container>
  );
}
