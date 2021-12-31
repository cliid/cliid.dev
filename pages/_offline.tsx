import Container from '@components/Container';
import Link from 'next/link';

export default function Offline() {
  return (
    <Container title="Offline - Jiwu Jang">
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-start tw-max-w-2xl tw-mx-auto tw-mb-16">
        <h1 className="page-title tw-mb-4">Internet connection not found</h1>
        <p className="tw-text-gray-600 dark:tw-text-gray-400 tw-mb-4">
          Hey, it seems you're offline! Wait, how is this website still visible then? It's because
          this website uses{' '}
          <Link href="https://github.com/shadowwalker/next-pwa" passHref>
            <code className="tw-text-gray-700 dark:tw-text-gray-300 hover:tw-text-gray-900 dark:hover:tw-text-gray-100 hover:tw-cursor-pointer">
              next-pwa
            </code>
          </Link>
          , which provides an awesome offline page feature. Click the button below when after
          connecting to the internet.
        </p>
        <Link href="/">
          <a className="tw-p-1 sm:tw-p-4 tw-w-64 tw-font-bold tw-mx-auto tw-bg-gray-200 dark:tw-bg-gray-800 tw-text-center tw-rounded-md tw-text-black dark:tw-text-white">
            Click me
          </a>
        </Link>
      </div>
    </Container>
  );
}
