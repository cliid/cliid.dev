import fetcher from '@lib/fetcher';
import { Views } from '@lib/types';
import NextLink from 'next/link';
import useSWR from 'swr';

import type { Blog } from '.contentlayer/types';

export default function BlogPost({
  title,
  summary,
  slug
}: Pick<Blog, 'title' | 'summary' | 'slug'>) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <NextLink href={`/blog/${slug}`}>
      <button className="tw-w-full tw-mb-8 tw-text-left">
        <div className="tw-flex tw-flex-col tw-justify-between md:tw-flex-row">
          <span className="tw-w-full tw-mb-2 tw-text-lg tw-font-black tw-text-gray-900 md:tw-text-xl dark:tw-text-gray-100">
            {title.toUpperCase()}
          </span>
          <p className="tw-w-32 tw-mb-4 tw-text-left tw-text-gray-500 md:tw-text-right md:tw-mb-0">
            {`${views ? new Number(views).toLocaleString() : '–––'} views`}
          </p>
        </div>
        <p className="tw-text-gray-600 dark:tw-text-gray-400">{summary}</p>
      </button>
    </NextLink>
  );
}
