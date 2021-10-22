import Link from 'next/link';

import Image from './Image';

const MetricCard = ({
  title,
  description,
  imageUrl,
  href
}: {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}) => (
  <div className="tw-p-4 md:tw-w-1/2 md" style={{ maxWidth: '544px' }}>
    <div className="tw-h-full tw-overflow-hidden tw-border-2 tw-rounded-md tw-border-opacity-60">
      {href ? (
        <Link href={href} aria-label={`Link to ${title}`} passHref>
          <Image
            alt={title}
            src={imageUrl}
            className="tw-object-cover tw-object-center lg:tw-h-48 md:tw-h-36"
            width={544}
            height={306}
          />
        </Link>
      ) : (
        <Image
          alt={title}
          src={imageUrl}
          className="tw-object-cover tw-object-center lg:tw-h-48 md:tw-h-36"
          width={544}
          height={306}
        />
      )}
      <div className="tw-p-6">
        <h2 className="tw-mb-3 tw-text-2xl tw-font-bold tw-leading-8 tw-tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="tw-mb-3 tw-prose tw-text-gray-500 tw-max-w-none dark:tw-text-gray-400">
          {description}
        </p>
        {href && (
          <Link href={href} aria-label={`Link to ${title}`}>
            <a className="tw-text-base tw-font-medium tw-leading-6 tw-text-primary-500 hover:tw-text-primary-600 dark:hover:tw-text-primary-400">
              Learn more &rarr;
            </a>
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default MetricCard;
