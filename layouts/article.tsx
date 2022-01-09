import 'tippy.js/dist/tippy.css'; // optional

import Container from '@components/Container';
import Tippy from '@tippyjs/react/headless';
import { format } from 'date-fns';
import { useTheme } from 'next-themes';
import React, { ReactNode } from 'react';

export default function ArticleLayout({
  children,
  article
}: {
  children: ReactNode;
  article: any;
}) {
  const { theme, resolvedTheme } = useTheme();
  return (
    <Container
      title={`${article.title}`}
      description={article.summary}
      date={new Date(article.publishedAt).toISOString()}
      type="article"
    >
      <section>
        <ul className="tw-flex tw-flex-col tw-flex-wrap tw-text-sm tw-list-none tw-space-y-4 tw-mb-16">
          <li className="tw-flex tw-items-center">
            <p className="tw-text-sm">
              <span className="tw-text-gray-500 dark:tw-text-gray-500">Published at&nbsp;</span>
              <span className="tw-text-black dark:tw-text-white tw-font-semibold">
                {format(new Date(article.publishedAt), 'MMMM dd, yyyy')}
              </span>
            </p>
          </li>
          <li className="tw-mt-2 sm:tw-m-0 tw-text-sm tw-text-gray-500 dark:tw-text-gray-500 tw-flex tw-flex-row tw-items-center">
            &nbsp;•&nbsp;
            <span className="tw-text-black dark:tw-text-white tw-font-semibold">{`${Math.ceil(
              article.readingTime.minutes
            )} ${Math.ceil(article.readingTime.minutes) > 1 ? 'mins' : 'min'}`}</span>
            <span className="tw-text-gray-500 dark:tw-text-gray-500">&nbsp;reading time</span>
            <Tippy
              render={(attrs) => (
                <div
                  className="tw-text-xs tw-text-dark-text dark:tw-text-text tw-border-2 tw-rounded-md tw-p-3"
                  tabIndex={-1}
                  {...attrs}
                >
                  {`This post has ${article.readingTime.words} words. Reading time is calculated using
              275WPM reading speed.`}
                </div>
              )}
              hideOnClick={false}
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
      <div className="tw-w-full tw-prose dark:tw-prose-dark tw-max-w-none">
        <div className={theme === 'dark' || resolvedTheme === 'dark' ? 'tw-dark' : 'tw-light'}>
          {children}
        </div>
      </div>
    </Container>
  );
}
