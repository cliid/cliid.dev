import type { Blog } from '.contentlayer/types';
import Container from '@components/Container';
import Giscus from '@components/Giscus';
import ViewCounter from '@components/ViewCounter';
import Tippy from '@tippyjs/react/headless';
import { format } from 'date-fns';
import React, { PropsWithChildren } from 'react';
import 'tippy.js/dist/tippy.css'; // optional

const editUrl = (slug: string) =>
  `https://github.com/cliid/cliid.dev/edit/main/data/blog/${slug}.mdx`;
const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`https://cliid.dev/blog/${slug}`)}`;

interface ReadTime {
  text: string;
  time: number;
  words: number;
  minutes: number;
}

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
          <h1 className="tw-mb-4 tw-text-3xl tw-font-bold tw-tracking-tight md:tw-text-5xl md:tw-text-center">
            {post.title}
          </h1>
          <h2 className="tw-mb-4 tw-text-xl tw-font-semibold tw-tracking-tight md:tw-text-2xl md:tw-text-center tw-text-gray-500">
            {post.summary}
          </h2>
        </section>
        <section>
          <ul className="tw-flex tw-justify-evenly tw-flex-wrap tw-text-sm tw-list-none tw-flex-col tw-mb-8 sm:tw-flex-row sm:tw-mb-0">
            <li className="tw-flex tw-items-center">
              <p className="tw-text-sm">
                <span className="tw-text-gray-500">Published at&nbsp;</span>
                <span className="tw-text-black dark:tw-text-white tw-font-semibold">
                  {format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
                </span>
              </p>
            </li>
            <li className="tw-mt-2 sm:tw-m-0 tw-text-sm min-w-32 tw-text-gray-500 tw-flex tw-flex-row tw-items-center">
              <span className="tw-text-black dark:tw-text-white tw-font-semibold">
                <ViewCounter slug={post.slug} />
              </span>
              &nbsp;•&nbsp;
              <span className="tw-text-black dark:tw-text-white tw-font-semibold">{`${Math.ceil(
                post.readingTime.minutes
              )} mins`}</span>
              <span className="tw-text-gray-500">&nbsp;reading time</span>
              <Tippy
                render={(attrs) => (
                  <div
                    className="tw-text-xs tw-text-dark-text dark:tw-text-text tw-bg-dark-bg dark:tw-bg-bg tw-rounded-md tw-p-3"
                    tabIndex={-1}
                    {...attrs}
                  >
                    {`This post has ${post.readingTime.words} words. Reading time is calculated using
              275WPM reading speed.`}
                  </div>
                )}
                arrow={false}
                placement="top"
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
        <div className="tw-w-full tw-mt-4 tw-prose dark:tw-prose-dark tw-max-w-none">
          {children}
        </div>
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
