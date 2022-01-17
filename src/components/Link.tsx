import NextLink from 'next/link';
import { HiFlag, HiMail } from 'react-icons/hi';

export default function Link(props: any) {
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

  const { href, children, className } = props;
  const linkType = getLinkType(href);

  switch (linkType) {
    case LinkType.Anchor: {
      return typeof children === 'string' ? (
        <a href={href} {...props} className={`tw-group ${className}`}>
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
        <a href={href} {...props} className={`tw-group ${className}`}>
          {children}
          <HiMail className="link-icon" />
        </a>
      );
    }

    case LinkType.Internal: {
      return (
        <NextLink href={href}>
          <a {...props} className={`tw-group ${className}`}>
            {children}
          </a>
        </NextLink>
      );
    }

    case LinkType.External: {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
          className={`tw-group ${className}`}
        >
          {children}
        </a>
      );
    }

    case LinkType.Footnote: {
      return (
        <a href={href} {...props} className={`tw-group ${className}`}>
          {children}
        </a>
      );
    }

    default: {
      // LinkType.Unknown
      return (
        <a href={href} {...props} className={`tw-group ${className}`}>
          {children}
        </a>
      );
    }
  }
}
