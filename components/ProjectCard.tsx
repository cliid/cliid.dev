import cn from 'classnames';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import ExternalLink from './ExternalLink';

export default function ProjectCard({
  title,
  description,
  href,
  gradient,
  darkGradient,
  imageUrl
}: {
  title: string;
  description: string;
  href: string;
  gradient: string;
  darkGradient?: string;
  imageUrl: string;
}) {
  const { theme, resolvedTheme } = useTheme();
  return (
    <ExternalLink href={href}>
      <div
        className={cn(
          'tw-transform hover:tw-scale-[1.01]',
          'tw-rounded-xl tw-w-full tw-bg-gradient-to-r tw-p-1',
          'tw-bg-bg dark:tw-bg-dark-bg',
          darkGradient
            ? theme === 'tw-dark' || resolvedTheme === 'tw-dark'
              ? darkGradient
              : gradient
            : gradient
        )}
      >
        <div className="tw-flex tw-flex-row tw-justify-between tw-h-full tw-rounded-lg tw-p-8 tw-w-full">
          <div className="tw-flex tw-flex-col tw-justify-between tw-h-full">
            <div className="tw-flex tw-flex-col tw-w-full tw-gap-y-3">
              <div className="tw-text-2xl tw-font-bold tw-text-gray-900 dark:tw-text-gray-100 tw-tracking-tight tw-break-words tw-flex tw-flex-row tw-items-center">
                <div className="tw-block tw-w-6 tw-h-6 tw-relative tw-mr-[0.4rem] tw-select-none">
                  <Image src={imageUrl} alt={title} layout="fill" objectFit="contain" quality="1" />
                </div>
                {title}
              </div>
              <span className="tw-text-xl tw-font-semibold tw-text-gray-600 dark:tw-text-gray-300 tw-tracking-tight tw-break-words tw-text-left capsize">
                {description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </ExternalLink>
  );
}
