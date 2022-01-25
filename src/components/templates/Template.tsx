import { useSettings } from '@hooks/use-settings';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import classNames from 'classnames';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect, useState } from 'react';

import Footer from '../Footer';
import Link from '../Link';
import Toolbar from '../Toolbar';

const getNodeText = (node: ReactNode): string => {
  if (typeof node === 'number' || typeof node === 'boolean') {
    return node.toString();
  }
  if (typeof node === 'string') return node;
  if (node instanceof Array) return node.map(getNodeText).join('');
  if (node && typeof node === 'object') {
    return getNodeText((node as any).props.children);
  }
  return '';
};

function NavItem({
  currentPath,
  href,
  content
}: {
  currentPath: string;
  href: string;
  content: ReactNode | string;
}) {
  if (currentPath.startsWith(href)) {
    return (
      <Link href={href} className="tw-flex tw-items-center tw-justify-center">
        <div
          aria-label={typeof content === 'string' ? content : ''}
          className="tw-flex tw-items-center tw-justify-center tw-h-10 tw-font-semibold tw-text-black tw-text-md dark:tw-text-white"
        >
          {content}
        </div>
      </Link>
    );
  }
  return (
    <Link href={href} className="tw-flex tw-items-center tw-justify-center">
      <div
        aria-label={typeof content === 'string' ? content : ''}
        className="tw-flex tw-items-center tw-justify-center tw-h-10 tw-font-semibold tw-text-gray-600 tw-text-md dark:tw-text-gray-500 hover:tw-text-black dark:hover:tw-text-white"
      >
        {content}
      </div>
    </Link>
  );
}

function Logo() {
  return (
    <Link href="/" className="tw-flex tw-items-center tw-justify-center">
      <div className="tw-relative tw-w-10 tw-h-10 tw-fill-black dark:tw-fill-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
          <path d="M0 1024v1024h2048V0H0v1024zm635-544c8 3 12 5 37 23l22 15a8680 8680 0 0 1 125 86l9 6a1076 1076 0 0 0 44 28c12 8 23 13 35 15 10 2 11 2 27 1a837 837 0 0 1 181 0c15 1 21 1 35-3 10-2 17-6 53-31a375 375 0 0 1 39-25l6-3 3-4 1-1 4-2 3-2 1-1 3-2 11-7 11-8 10-6 8-6a315 315 0 0 0 29-19 848 848 0 0 1 39-27l19-13a171 171 0 0 1 13-9c4-3 13-6 18-6 6 0 16 3 18 5 10 7 13 13 15 23l3 13 5 22a228 228 0 0 0 6 29l2 10 5 22 1 9a534 534 0 0 1 12 55l4 17 5 22a447 447 0 0 0 9 46l4 15c4 14 13 26 31 40l5 4 25 18 17 13 17 12 4 3 10 8 12 10 6 4 2 2 2 2 2 1 11 10c20 17 24 22 29 34 3 6 3 9 3 17s0 10-3 16l-6 10-33 37-17 18a198 198 0 0 1-19 19l-3 3-3 4-3 4-1 1-3 3a463 463 0 0 1-63 64c-9 3-18 3-26 0-5-3-17-11-24-18a419 419 0 0 0-66-51l-12-8-14-9-8-5a17 17 0 0 1-3-2l-8-4-8-5c-6-5-48-25-77-36l-14-6a451 451 0 0 0-89-27l-13-4-11-2-9-1c-12-3-24-5-39-6l-27-4-52-2a445 445 0 0 0-104 7 249 249 0 0 0-36 6 779 779 0 0 0-185 65l-38 21a729 729 0 0 0-122 89l-6 2c-7 3-17 3-26-2-9-4-15-10-39-37a841 841 0 0 0-41-44l-19-21a1039 1039 0 0 1-35-38c-10-11-14-18-16-25l-2-6v-14l2-5c2-9 5-14 15-24a330 330 0 0 1 46-39l6-5a1424 1424 0 0 1 74-55l21-20a85 85 0 0 0 16-37 381 381 0 0 0 12-55 733 733 0 0 1 15-70l2-11 2-8 1-8 2-9 5-22a196 196 0 0 0 6-30l2-9c6-34 11-43 26-49 4-2 14-2 19-1zm434 538 28 3 23 4c12 1 23 3 35 6l14 3 25 7 16 5 13 4 9 3 6 2 9 4a277 277 0 0 1 62 30l16 8 11 7 6 3 11 6 2 1c0 1 12 9 13 8l1 1 4 4 7 5 12 9a516 516 0 0 1 50 43c4 8 4 8 4 20 0 9 0 13-2 15l-2 5-3 4c-2 1-3 5-4 6a1644 1644 0 0 0-48 54l-21 24-17 18-24 26c-13 13-16 15-28 15-6 0-8-1-13-3l-27-20-7-5-7-3-14-9-7-4-4-3-16-7a353 353 0 0 0-136-39c-13-2-19-2-46-2a363 363 0 0 0-79 8l-16 4-27 8-12 4a530 530 0 0 0-123 69c-6 3-17 2-24-1-6-3-11-7-29-27l-15-18-14-14-23-26-22-24-13-14c-4-3-12-14-15-17-8-13-7-34 1-47 6-8 21-22 39-35l14-11a682 682 0 0 1 208-98l10-3 6-1 9-2a145 145 0 0 1 32-6l11-2 16-2 22-3h93zm-19 341c25 3 40 6 65 12a364 364 0 0 1 86 41 44 44 0 0 1 16 16c1 0 5 13 6 20 1 16-5 28-23 46l-17 18-17 18-18 21-25 27a1408 1408 0 0 0-62 68c-16 17-22 20-35 21-16 1-21-3-45-29a197 197 0 0 1-24-28l-3-3c0-2-2-3-2-3l-2-2a218 218 0 0 0-29-32l-5-4-12-13-27-29-23-25c-25-27-31-41-26-60l3-7 2-4c0-2 8-11 13-15l24-15 8-4 28-13 8-3 4-1 4-1 8-3 10-3 25-6 19-3 18-2h48z" />
        </svg>
      </div>
    </Link>
  );
}

export default function Template({
  children,
  title,
  heading,
  description,
  type,
  image,
  date
}: {
  children?: ReactNode;
  title?: string;
  heading?: ReactNode;
  description?: string;
  type?: string;
  image?: string;
  date?: string;
}) {
  const [isTop, setIsTop] = useState(true);
  const { maxWidth } = useSettings();

  const router = useRouter();

  useScrollPosition(({ currPos }) => {
    setIsTop(-currPos.y < 50);
  });

  // After mounting, we have access to the theme
  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  const meta = {
    title: title ?? getNodeText(heading) ?? 'cliid.dev',
    description: description ?? `cliid의 개인 웹사이트`,
    type: type ?? 'website',
    image,
    date
  };

  return (
    <div>
      <div>
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta property="og:url" content={`https://cliid.dev${router.asPath}`} />
          <link rel="canonical" href={`https://cliid.dev${router.asPath}`} />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="cliid.dev" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@cliiiid" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
          {meta.date && <meta property="article:published_time" content={meta.date} />}
        </Head>
        <nav
          className={classNames(
            'tw-bg-bg dark:tw-bg-dark-bg tw-flex tw-flex-col tw-justify-center tw-px-4 sm:tw-px-8 tw-sticky tw-top-0 tw-z-50',
            isTop ||
              'tw-backdrop-filter tw-shadow-md tw-backdrop-saturate-200 tw-backdrop-blur-lg dark:tw-border-b-2'
          )}
        >
          <div
            className="tw-relative tw-flex tw-items-center tw-justify-between tw-w-full tw-py-4 tw-mx-auto"
            style={{
              maxWidth
            }}
          >
            <div className="tw-grid tw-grid-flow-col tw-gap-x-4">
              <Logo />
              <div className="tw-hidden tw-grid-flow-col tw-gap-x-4 sm:tw-grid">
                <NavItem currentPath={router.asPath} href="/dashboard" content="대시보드" />
                <NavItem currentPath={router.asPath} href="/guestbook" content="방명록" />
                <NavItem currentPath={router.asPath} href="/tweets" content="트윗들" />
              </div>
            </div>
            <div className="tw-grid tw-grid-flow-col tw-gap-x-4">
              <NavItem currentPath={router.asPath} href="/blog" content="블로그" />
              <NavItem currentPath={router.asPath} href="/resume" content="이력서" />
            </div>
          </div>
        </nav>
        <main className="tw-flex tw-flex-col tw-w-full tw-min-h-screen tw-px-4 tw-border-b-2 sm:tw-px-8">
          <article
            className="tw-flex tw-flex-col tw-justify-center tw-w-full tw-mx-auto tw-mb-16"
            style={{
              maxWidth
            }}
          >
            <div className="tw-font-extrabold tw-text-[2.5rem] sm:tw-text-[2.8rem] tw-tracking-tight tw-text-black dark:tw-text-white tw-mb-8">
              {heading ?? title ?? ''}
            </div>
            {children}
          </article>
        </main>
        <footer className="tw-items-center tw-justify-center tw-w-full tw-p-8 tw-border-b-2">
          <Footer />
        </footer>
      </div>
      <div className="tw-fixed tw-z-50 tw-right-4 tw-bottom-4 sm:tw-right-8 sm:tw-bottom-auto sm:tw-top-28">
        <Toolbar />
      </div>
    </div>
  );
}
