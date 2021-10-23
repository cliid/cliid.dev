import Link from 'next/link';
import React, { ReactNode } from 'react';
import { HiExternalLink, HiHashtag, HiLink, HiMail } from 'react-icons/hi';

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

  const iconStyle =
    'tw-w-[1em] tw-h-[1em] tw-inline-block tw-text-gray-500 dark:tw-text-gray-500 tw-bg-transparent dark:tw-bg-transparent tw-ml-0.5 tw-mb-1';

  if (isMailHref) {
    return (
      <a href={href} {...props}>
        {children}
        <HiMail className={iconStyle} />
      </a>
    );
  } else if (isRelativeHref) {
    return (
      <Link href={href}>
        <a {...props}>
          {children}
          <HiLink className={iconStyle} />
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
      <a href={href} {...props}>
        {children}
        <HiHashtag className={iconStyle} />
      </a>
    ) : (
      <a href={href} {...props}>
        {children}
      </a>
    );
  } else {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
        <HiExternalLink className={iconStyle} />
      </a>
    );
  }
};

export default CustomLink;
