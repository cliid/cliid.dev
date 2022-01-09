import NextLink from 'next/link';
import { ReactNode } from 'react';
import { HiFlag, HiMail } from 'react-icons/hi';

enum LinkType {
  Unknown = -1,
  Anchor = 0,
  Mail = 1,
  Footnote = 2,
  Internal = 3,
  External = 4
}

const getLinkType = (href: string): LinkType => {
  if (href.startsWith('#')) return LinkType.Anchor;
  if (href.startsWith('mailto:')) return LinkType.Mail;
  if (href.startsWith('/') || href.startsWith('.')) return LinkType.Internal;
  if (/^[a-z]+\:\/\/.+$/.test(href)) return LinkType.External;
  return LinkType.Unknown;
};

export default function Link({
  href,
  children,
  external,
  ...props
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  props?: any;
}) {
  const linkType = getLinkType(href);

  switch (linkType) {
    case LinkType.Anchor: {
      return typeof children === 'string' ? (
        <a href={href} {...props} className="tw-group">
          {children}
          <HiFlag className="link-icon" />
        </a>
      ) : (
        <a href={href} {...props}>
          {children}
        </a>
      );
    }

    case LinkType.Mail: {
      return (
        <a href={href} {...props} className="tw-group">
          {children}
          <HiMail className="link-icon" />
        </a>
      );
    }

    case LinkType.Internal: {
      return (
        <NextLink href={href}>
          <a {...props} className="tw-group">
            {children}
          </a>
        </NextLink>
      );
    }

    case LinkType.External: {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props} className="tw-group">
          {children}
        </a>
      );
    }

    case LinkType.Footnote: {
      return (
        <a href={href} {...props} className="tw-group">
          {children}
        </a>
      );
    }

    default: {
      // LinkType.Unknown
      return (
        <a href={href} {...props} className="tw-group">
          {children}
        </a>
      );
    }
  }
}
