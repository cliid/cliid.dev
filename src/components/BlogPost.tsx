import fetcher from '@lib/fetcher';
import type { Post } from 'contentlayer/generated';
import NextLink from 'next/link';
import useSWR from 'swr';
import { Views } from 'typings';

export default function BlogPost({
  title,
  summary,
  slug
}: Pick<Post, 'title' | 'summary' | 'slug'>) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <NextLink href={`/blog/${slug}`}>
      <button className="tw-w-full tw-text-left">
        <div className="tw-flex tw-flex-col tw-justify-between md:tw-flex-row">
          <span className="tw-w-full tw-mb-2 tw-text-lg tw-font-black tw-text-gray-900 md:tw-text-xl dark:tw-text-gray-100">
            {title}
          </span>
          <p className="tw-w-32 tw-mb-4 tw-text-left tw-text-gray-500 md:tw-text-right md:tw-mb-0">
            {`${views ? new Number(views).toLocaleString() : '---'} views`}
          </p>
        </div>
        <p className="tw-text-gray-600 dark:tw-text-gray-400">{summary}</p>
      </button>
    </NextLink>
  );
}