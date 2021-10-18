import type { Blog } from '.contentlayer/types';
import Container from '@components/Container';
import Giscus from '@components/Giscus';
import ViewCounter from '@components/ViewCounter';
import { format } from 'date-fns';
import Image from 'next/image';
import type { PropsWithChildren } from 'react';

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
        <h1 className="tw-mb-4 tw-text-3xl tw-font-bold tw-tracking-tight tw-text-black md:tw-text-5xl dark:tw-text-white">
          {post.title}
        </h1>
        <div className="tw-flex tw-flex-col tw-items-start tw-justify-between tw-w-full tw-mt-2 md:tw-flex-row md:tw-items-center">
          <div className="tw-flex tw-items-center">
            <Image
              alt="Jiwu Jang"
              height={24}
              width={24}
              src="/static/images/avatar.png"
              className="tw-rounded-full"
            />
            <p className="tw-ml-2 tw-text-sm tw-text-gray-700 dark:tw-text-gray-300">
              {'Jiwu Jang / '}
              {format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="tw-mt-2 tw-text-sm tw-text-gray-600 dark:tw-text-gray-400 min-w-32 md:tw-mt-0">
            {post.readingTime.text}
            {` • `}
            <ViewCounter slug={post.slug} />
          </p>
        </div>
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
