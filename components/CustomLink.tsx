import { ExternalLinkSolid, HashtagSolid, LinkSolid, MailSolid } from '@graywolfai/react-heroicons';
import Link from 'next/link';
import React, { ReactNode } from 'react';

const CustomLink = ({
  href,
  children,
  ...props
}: {
  href: string;
  children: ReactNode;
  props: any;
}) => {
  const isAnchorHref = href && href.startsWith('#');
  const isMailHref = href && href.startsWith('mailto:');
  const isFootNoteHref = href && href.startsWith('#fn');
  const isRelativeHref = href && (href.startsWith('/') || href.startsWith('.'));

  const baseStyle = 'tw-px-1 tw-py-0.5 hover:tw-bg-gray-200 dark:hover:tw-bg-gray-700 tw-rounded';
  const iconStyle =
    'tw-w-[1em] tw-h-[1em] tw-inline-block tw-text-gray-500 dark:tw-text-gray-500 tw-bg-transparent dark:tw-bg-transparent tw-ml-1 tw-mb-1';

  if (isMailHref) {
    return (
      <a href={href} className={baseStyle} {...props}>
        {children}
        <MailSolid className={iconStyle} />
      </a>
    );
  } else if (isRelativeHref) {
    return (
      <Link href={href}>
        <a className={baseStyle} {...props}>
          {children}
          <LinkSolid className={iconStyle} />
        </a>
      </Link>
    );
  } else if (isFootNoteHref) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  } else if (isAnchorHref) {
    return typeof children === 'string' ? (
      <a href={href} className={baseStyle} {...props}>
        {children}
        <HashtagSolid className={iconStyle} />
      </a>
    ) : (
      <a href={href} {...props}>
        {children}
      </a>
    );
  } else {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseStyle} {...props}>
        {children}
        <ExternalLinkSolid className={iconStyle} />
      </a>
    );
  }
};

export default CustomLink;
