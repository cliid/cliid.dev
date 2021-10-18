import NowPlaying from '@components/NowPlaying';
import Link from 'next/link';
import SpeedlifyScore from './SpeedlifyScore';

const ExternalLink = ({ href, children }: { href: string; children: string }) => (
  <a
    className="tw-text-gray-600 dark:tw-text-gray-400 tw-leading-7 hover:tw-text-gray-800 dark:hover:tw-text-gray-200 tw-transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="tw-flex tw-flex-col tw-justify-center tw-items-start tw-max-w-2xl tw-mx-auto tw-w-full tw-mb-8 tw-space-y-4">
      <hr className="tw-w-full border-1 tw-border-gray-200 dark:tw-border-gray-800 tw-mb-8" />
      <NowPlaying />
      <SpeedlifyScore speedlifyUrl="https://speedlify.cliid.dev" hash="551230c9" />
      <div className="tw-w-full tw-max-w-2xl tw-grid tw-grid-cols-1 tw-gap-4 tw-pb-16 sm:tw-grid-cols-3">
        <Link href="/">
          <a className="tw-text-gray-600 dark:tw-text-gray-400 tw-leading-7 hover:tw-text-gray-800 dark:hover:tw-text-gray-200 tw-transition">
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className="tw-text-gray-600 dark:tw-text-gray-400 tw-leading-7 hover:tw-text-gray-800 dark:hover:tw-text-gray-200 tw-transition">
            About
          </a>
        </Link>
        <Link href="/guestbook">
          <a className="tw-text-gray-600 dark:tw-text-gray-400 tw-leading-7 hover:tw-text-gray-800 dark:hover:tw-text-gray-200 tw-transition">
            Guestbook
          </a>
        </Link>
        <Link href="/tweets">
          <a className="tw-text-gray-600 dark:tw-text-gray-400 tw-leading-7 hover:tw-text-gray-800 dark:hover:tw-text-gray-200 tw-transition">
            Tweets
          </a>
        </Link>
        <ExternalLink href="https://twitter.com/cliiiid">Twitter</ExternalLink>
        <ExternalLink href="https://instagram.com/cliiiid">Instagram</ExternalLink>
        <ExternalLink href="https://github.com/cliid">GitHub</ExternalLink>
        <ExternalLink href="https://unsplash.com/@cliid">Unsplash</ExternalLink>
        <ExternalLink href="https://cliid.gumroad.com/">Gumroad</ExternalLink>
        <ExternalLink href="https://www.youtube.com/channel/UCEzu4FVeWuRPY1fylhuRfXA">
          YouTube
        </ExternalLink>
      </div>
    </footer>
  );
}
