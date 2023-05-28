import Link from 'next/link';
import { ReactElement } from 'react';

const ProjectCard = ({
  title,
  url,
  description
}: {
  title: string;
  url: string;
  description: string | ReactElement | ReactElement[];
}) => {
  return (
    <div className="tw-w-full tw-p-4 tw-border tw-rounded-lg metric-card max-w-72">
      <Link aria-label={title} href={url}>
        <div className="tw-flex tw-items-center tw-text-gray-900 dark:tw-text-gray-100">
          <div className="tw-flex tw-items-center tw-font-bold">{title}</div>
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
      {description}
    </div>
  );
};

export default ProjectCard;
