import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({
  title,
  description,
  href,
  gradient,
  imageUrl
}: {
  title: string;
  description: string;
  href: string;
  gradient: string;
  imageUrl: string;
}) {
  return (
    <Link href={href}>
      <a
        className={cn(
          'tw-transform hover:tw-scale-[1.01] tw-transition-all',
          'tw-rounded-xl tw-w-full tw-bg-gradient-to-r tw-p-1',
          gradient
        )}
      >
        <div className="tw-flex tw-flex-row tw-justify-between tw-h-full tw-rounded-lg tw-p-8 tw-w-full">
          <div className="tw-flex tw-flex-col tw-justify-between tw-h-full tw-space-y-8">
            <div className="tw-flex tw-flex-col tw-w-full tw-space-y-4">
              <div className="tw-text-2xl tw-font-bold tw-text-gray-900 dark:tw-text-gray-100 tw-tracking-tight tw-break-words tw-flex tw-flex-row tw-items-center">
                <div className="tw-block tw-w-6 tw-h-6 tw-relative">
                  <Image src={imageUrl} alt={title} layout="fill" objectFit="contain" />
                </div>
                &nbsp;
                {title}
              </div>
              <span className="tw-text-xl tw-font-medium tw-text-gray-900 dark:tw-text-gray-100 tw-tracking-tight tw-break-words tw-text-left">
                {description}
              </span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
