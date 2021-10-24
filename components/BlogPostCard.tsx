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
        <div className="tw-flex tw-flex-col tw-justify-between tw-h-full tw-rounded-lg tw-p-4 tw-w-full default-colors">
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-w-full">
            <h3 className="tw-text-lg md:tw-text-xl tw-font-semibold tw-mb-6 sm:tw-mb-10 tw-w-full tw-tracking-tight tw-break-words tw-text-left">
              {title}
            </h3>
          </div>
          <div className="tw-flex tw-items-center capsize">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="tw-h-6 tw-w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span className="tw-ml-2 tw-align-baseline capsize">
              {views ? new Number(views).toLocaleString() : '–––'}
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
}
