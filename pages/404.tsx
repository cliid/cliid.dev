import Container from '@components/Container';
import Image from 'next/image';
import Link from 'next/link';
export default function NotFound() {
  return (
    <Container title="418 – Jiwu Jang">
      <div className="tw-flex tw-flex-row tw-items-center tw-space-x-4 tw-mb-4">
        <h1 className="page-title">418 - I'm a teapot</h1>
        <div className="tw-relative tw-block tw-w-12 tw-h-12 animate-cutebounce">
          <Image
            src="/static/images/teapot.webp"
            layout="fill"
            alt="Is it a bird? Is it a plane? No, it's a teapot!"
          />
        </div>
      </div>
      <p className="tw-text-gray-600 dark:tw-text-gray-400 tw-mb-4">
        Hey, I'm a teapot! Nice to meet you. The fact that you met me means you've found something
        that used to exist, or you spelled something wrong. I'm guessing you spelled something
        wrong. Can you double check that URL?
      </p>
      <code className="tw-text-gray-500 tw-font-serif tw-italic tw-mb-8 tw-text-xs">
        The HTTP 418 I'm a teapot client error response code indicates that the server refuses to
        brew coffee because it is, permanently, a teapot. A combined coffee/tea pot that is
        temporarily out of coffee should instead return 503. This error is a reference to Hyper Text
        Coffee Pot Control Protocol defined in April Fools' jokes in 1998 and 2014.
      </code>
      <Link href="/">
        <a className="tw-p-1 sm:tw-p-4 tw-w-64 tw-font-bold tw-mx-auto tw-bg-gray-200 dark:tw-bg-gray-800 tw-text-center tw-rounded-md tw-text-black dark:tw-text-white">
          Return Home
        </a>
      </Link>
    </Container>
  );
}
