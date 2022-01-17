import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import cn from 'classnames';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect, useState } from 'react';
import ReactModal from 'react-modal';

import Link from './Link';
import Toolbar from './Toolbar';

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
      <Link href={href} className="tw-flex tw-justify-center tw-items-center">
        <div
          aria-label={typeof content === 'string' ? content : ''}
          className="tw-px-1 tw-py-1 tw-font-normal tw-text-md tw-text-black dark:tw-text-white tw-underline tw-underline-offset-2 tw-flex tw-justify-center tw-items-center"
        >
          {content}
        </div>
      </Link>
    );
  }
  return (
    <Link href={href} className="tw-flex tw-justify-center tw-items-center">
      <div
        aria-label={typeof content === 'string' ? content : ''}
        className="tw-px-1 tw-py-1 tw-font-normal tw-text-md tw-text-gray-600 dark:tw-text-gray-500 hover:tw-text-black dark:hover:tw-text-white tw-flex tw-justify-center tw-items-center"
      >
        {content}
      </div>
    </Link>
  );
}

function Logo() {
  return (
    <Link href="/" className="tw-flex tw-justify-center tw-items-center">
      <div
        aria-label="Sevenwiki."
        className="tw-px-2 tw-py-1 tw-text-md tw-bg-primary tw-rounded-2xl tw-text-white tw-font-extrabold"
      >
        <strong>svw.</strong>
      </div>
    </Link>
  );
}

const routes = {
  primary: [
    { href: '/w', content: '아티클' },
    { href: '/about', content: '개발진' },
    { href: '/keystrokes', content: '단축키' }
  ],
  secondary: [
    { href: '/profile', content: '내 프로필' },
    { href: '/logout', content: '로그아웃' }
  ]
};

export default function Template({
  children,
  title,
  description,
  type,
  image
}: {
  children?: ReactNode;
  title?: string;
  description?: string;
  type?: string;
  image?: string;
}) {
  const [isTop, setIsTop] = useState(true);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [query, setQuery] = useState('');

  useScrollPosition(({ currPos }) => {
    setIsTop(-currPos.y < 50);
  });

  // After mounting, we have access to the theme
  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  const router = useRouter();
  const meta = {
    title: title ?? '세븐위키',
    description: description ?? `모두의 기술 위키, 세븐위키!`,
    type: type ?? 'website',
    image
  };

  return (
    <div>
      <div>
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta property="og:url" content={`https://seven.wiki${router.asPath}`} />
          <link rel="canonical" href={`https://seven.wiki${router.asPath}`} />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="세븐위키" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@seven_wiki" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
        </Head>
        <nav
          id="nav"
          className={cn(
            'tw-flex tw-flex-col tw-justify-center tw-px-8 tw-sticky tw-top-0 tw-z-50',
            isTop ||
              'tw-backdrop-filter tw-shadow-md tw-backdrop-saturate-200 tw-backdrop-blur-lg dark:tw-border-b-2'
          )}
        >
          <div className="tw-flex tw-items-center tw-justify-between tw-relative tw-w-full tw-max-w-2xl tw-mx-auto tw-py-6">
            <div className="tw-grid tw-grid-flow-col tw-gap-x-2">
              <Logo />
              <div className="tw-hidden sm:tw-grid tw-grid-flow-col tw-gap-x-2">
                {routes.primary.map((value, index) => (
                  <NavItem
                    currentPath={router.asPath}
                    href={value.href}
                    content={value.content}
                    key={index.toString()}
                  />
                ))}
              </div>
            </div>
            <div className="tw-grid tw-grid-flow-col tw-gap-x-2">
              {routes.secondary.map((value, index) => (
                <NavItem
                  currentPath={router.asPath}
                  href={value.href}
                  content={value.content}
                  key={index.toString()}
                />
              ))}
            </div>
          </div>
        </nav>
        <main
          id="main"
          className="tw-px-8 tw-border-b-2 tw-flex tw-flex-col tw-w-full tw-min-h-screen"
        >
          <article
            id="article"
            className="tw-flex tw-flex-col tw-justify-center tw-max-w-2xl tw-mx-auto tw-mb-16 tw-w-full"
          >
            <div className="tw-font-extrabold tw-text-[2.5rem] sm:tw-text-[2.8rem] tw-tracking-tight tw-text-black dark:tw-text-white tw-mb-8">
              {meta.title}
            </div>
            {children}
          </article>
        </main>
        <footer id="footer" className="tw-p-8 tw-w-full tw-justify-center tw-items-center">
          <div className="tw-mx-auto tw-max-w-2xl tw-px-8 tw-flex tw-flex-col tw-justify-center tw-items-center tw-break-words">
            <div>
              Made with 🔥 by&nbsp;
              <Link className="tw-font-bold" href="https://dazzle.works">
                @dazzleofficial.
              </Link>
            </div>
          </div>
        </footer>
      </div>
      <ReactModal isOpen={isSearchModalOpen} />
      <div className="tw-fixed tw-right-4 tw-bottom-4 sm:tw-right-8 sm:tw-bottom-auto sm:tw-top-28 tw-z-50">
        <Toolbar />
      </div>
    </div>
  );
}
