import NowPlaying from '@components/NowPlaying';
import NextLink from 'next/link';
import { ReactNode } from 'react';

import SpeedlifyScore from './SpeedlifyScore';

const Link = ({
  href,
  children,
  external
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) => {
  if (external) {
    return (
      <a
        className="tw-text-gray-600 dark:tw-text-gray-400 tw-leading-7"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href}>
      <a className="tw-text-gray-600 dark:tw-text-gray-400 tw-leading-7">{children}</a>
    </NextLink>
  );
};

export default function Footer() {
  return (
    <footer className="tw-flex tw-flex-col tw-justify-center tw-items-start tw-max-w-2xl tw-mx-auto tw-w-full tw-mb-8 tw-space-y-4">
      <hr className="default-colors tw-w-full border-1 tw-mb-8" />
      <NowPlaying />
      <SpeedlifyScore speedlifyUrl="https://speedlify.cliid.dev" hash="551230c9" />
      <div className="tw-w-full tw-max-w-2xl tw-grid tw-grid-cols-1 tw-gap-4 tw-pb-16 sm:tw-grid-cols-3">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/guestbook">Guestbook</Link>
        <Link href="/tweets">Tweets</Link>
        <Link href="/resume">Résumé</Link>
        <Link href="https://twitter.com/cliiiid">Twitter</Link>
        <Link href="https://instagram.com/cliiiid">Instagram</Link>
        <Link href="https://github.com/cliid">GitHub</Link>
        <Link href="https://unsplash.com/@cliid">Unsplash</Link>
        <Link href="https://cliid.gumroad.com/">Gumroad</Link>
        <Link href="https://www.youtube.com/channel/UCEzu4FVeWuRPY1fylhuRfXA">YouTube</Link>
      </div>
    </footer>
  );
}
