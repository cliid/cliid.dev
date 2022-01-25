import Link from '@components/Link';

export default function MetricCard({
  header,
  link,
  metric,
  isCurrency
}: {
  header: string;
  link: string;
  metric: number;
  isCurrency: boolean;
}) {
  return (
    <div className="tw-w-full tw-p-4 tw-border tw-rounded-lg metric-card max-w-72">
      <Link aria-label={header} href={link}>
        <div className="tw-flex tw-items-center tw-text-gray-900 dark:tw-text-gray-100">
          {header}
          <svg
            className="tw-w-4 tw-h-4 tw-ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </Link>
      <p className="tw-mt-2 tw-text-3xl tw-font-bold tw-text-black spacing-sm dark:tw-text-white">
        {metric > 0 && isCurrency && '$'}
        {metric > 0 ? metric.toLocaleString() : '-'}
      </p>
    </div>
  );
}
