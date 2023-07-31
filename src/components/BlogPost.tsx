import fetcher from '@lib/fetcher';
import type { Post } from 'contentlayer/generated';
import { format } from 'date-fns';
import NextLink from 'next/link';
import { string } from 'smartquotes-ts';
import useSWR from 'swr';
import { Views } from 'typings';

export default function BlogPost({
  title,
  summary,
  slug,
  publishedAt
}: Pick<Post, 'title' | 'summary' | 'slug' | 'publishedAt'>) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <NextLink href={`/blog/${slug}`}>
      <button className="tw-w-full tw-text-left">
        <div className="tw-flex tw-flex-col tw-justify-between md:tw-flex-row">
          <div className="tw-w-full tw-mb-2">
            <span className="tw-text-lg tw-font-black tw-text-gray-900 md:tw-text-xl dark:tw-text-gray-100">
              {title}
            </span>
            <p className="tw-text-gray-600 dark:tw-text-gray-400">{string(summary)}</p>
          </div>
          <div className="tw-flex-col tw-justify-end tw-pl-6 tw-min-w-fit">
            <div className="tw-text-gray-500 md:tw-text-right md:tw-mb-0">
              {format(new Date(publishedAt), 'LLLL do, yyyy')}
            </div>
            <div className="tw-text-gray-500 md:tw-text-right md:tw-mb-0">
              {`${views ? new Number(views).toLocaleString() : '---'} views`}
            </div>
          </div>
        </div>
      </button>
    </NextLink>
  );
}
