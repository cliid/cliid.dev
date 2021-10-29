import fetcher from '@lib/fetcher';
import { Views } from '@lib/types';
import cn from 'classnames';
import Link from 'next/link';
import useSWR from 'swr';

export default function BlogPostCard({
  title,
  slug,
  gradient
}: {
  title: string;
  slug: string;
  gradient: string;
}) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link href={`/blog/${slug}`}>
      <a
        className={cn(
          'tw-transform hover:tw-scale-[1.01] tw-transition-all',
          'tw-rounded-xl tw-w-full tw-bg-gradient-to-r tw-p-1',
          gradient
        )}
      >
        <div className="tw-flex tw-flex-col tw-justify-between tw-h-full tw-rounded-lg tw-p-4 tw-w-full">
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-w-full">
            <h3 className="tw-text-lg md:tw-text-xl tw-font-black tw-tracking-tight capsize tw-mb-6 sm:tw-mb-10 tw-w-full tw-break-words tw-text-left">
              {title.toUpperCase()}
            </h3>
          </div>
          <span className="tw-text-black dark:tw-text-white tw-font-semibold">
            {views ? new Number(views).toLocaleString() : '–––'}&nbsp;views
          </span>
        </div>
      </a>
    </Link>
  );
}
