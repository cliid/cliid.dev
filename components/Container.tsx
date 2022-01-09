import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import cn from 'classnames';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect, useState } from 'react';

import Link from './Link';
import Toolbar from './Toolbar';

function NavItem({ href, content }: { href: string; content: ReactNode | string }) {
  return (
    <Link href={href}>
      <div
        aria-label={typeof content === 'string' ? content : ''}
        className="tw-px-1 tw-py-1 tw-font-normal tw-text-md tw-text-gray-600 dark:tw-text-gray-500 hover:tw-text-black dark:hover:tw-text-white"
      >
        {content}
      </div>
    </Link>
  );
}

function Logo() {
  return (
    <Link href="/">
      <div
        aria-label="Sevenwiki."
        className="tw-px-2 tw-py-1 tw-text-md tw-bg-primary tw-rounded-2xl tw-text-white"
      >
        <strong>svw.</strong>
      </div>
    </Link>
  );
}

const routes = {
  primary: [
    { href: '/article', content: '아티클' },
    { href: '/about', content: '개발진' },
    { href: '/keystrokes', content: '단축키' }
  ],
  secondary: [
    { href: '/profile', content: '내 프로필' },
    { href: '/logout', content: '로그아웃' }
  ]
};

export default function Container(props: any) {
  const [isTop, setIsTop] = useState(true);

  useScrollPosition(({ currPos }) => {
    setIsTop(-currPos.y < 50);
  });

  // After mounting, we have access to the theme
  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: '세븐위키',
    description: `모두의 기술 위키, 세븐위키!`,
    type: 'website',
    ...customMeta
  };

  return (
    <>
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
        className={cn(
          'tw-flex tw-flex-col tw-justify-center tw-px-8 tw-sticky tw-top-0 tw-z-50',
          isTop ||
            'tw-backdrop-filter tw-shadow-md tw-backdrop-saturate-200 tw-backdrop-blur-lg dark:tw-border-b-2 dark:tw-border-dark-border'
        )}
      >
        <div className="tw-flex tw-items-center tw-justify-between tw-w-full tw-relative tw-max-w-2xl tw-mx-auto tw-py-6">
          <div className="tw-grid tw-grid-flow-col tw-gap-x-2">
            <Logo />
            <div className="tw-hidden md:tw-grid tw-grid-flow-col tw-gap-x-2">
              {routes.primary.map((value, index) => (
                <NavItem href={value.href} content={value.content} key={index.toString()} />
              ))}
            </div>
          </div>
          <div className="tw-grid tw-grid-flow-col tw-gap-x-2">
            {routes.secondary.map((value, index) => (
              <NavItem href={value.href} content={value.content} key={index.toString()} />
            ))}
          </div>
        </div>
        <div className="tw-fixed tw-right-4 tw-bottom-4 md:tw-right-8 md:tw-bottom-0 md:tw-top-40">
          <Toolbar />
        </div>
      </nav>
      <main className="tw-flex tw-flex-col tw-justify-center tw-px-8 tw-pt-8">
        <div className="tw-flex tw-flex-col tw-items-start tw-justify-center tw-max-w-2xl tw-mx-auto tw-mb-16 tw-w-full">
          <h1 className="page-title tw-mb-8">{meta.title}</h1>
          <article>{children}</article>
        </div>
      </main>
    </>
  );
}
