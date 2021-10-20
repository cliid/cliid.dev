import { routes } from '@constants/routes';
import { MenuSolid, MoonSolid, SunSolid, XSolid } from '@graywolfai/react-heroicons';
import cn from 'classnames';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useDelayedRender from 'use-delayed-render';
import Footer from './Footer';

function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive('/' + router.asPath.split('/')[1] === href);
  }, [router.asPath, href]);

  return (
    <NextLink href={href}>
      <a>
        <span
          className={cn(
            'tw-hidden md:tw-inline-block capsize tw-font-bold hover:tw-text-black dark:hover:tw-text-white hover:tw-underline tw-transition-all tw-text-sm',
            isActive
              ? 'tw-text-primary-500 dark:tw-text-primary-500'
              : 'tw-text-gray-700 dark:tw-text-gray-500'
          )}
        >
          {text.toUpperCase()}
        </span>
      </a>
    </NextLink>
  );
}

function MobileNavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive('/' + router.asPath.split('/')[1] === href);
  }, [router.asPath, href]);

  return (
    <NextLink href={href}>
      <a
        className={cn(
          'tw-flex tw-w-auto tw-py-4 tw-border-b tw-text-base tw-font-bold capsize hover:tw-text-black dark:hover:tw-text-white hover:tw-underline tw-transition-all',
          isActive
            ? 'tw-text-primary-500 dark:tw-text-primary-500'
            : 'tw-text-gray-700 dark:tw-text-gray-500'
        )}
      >
        {text.toUpperCase()}
      </a>
    </NextLink>
  );
}

export default function Container(props: any) {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const onScroll = (e: any) => {
    if (e.target.scrollTop < 32) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
    window.addEventListener('scroll', onScroll);
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(isMenuOpen, {
    enterDelay: 20,
    exitDelay: 300
  });

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'tw-hidden';
    }
  }

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Jiwu Jang – Developer, writer, investor.',
    description: `Developer, writer, and investor.`,
    type: 'website',
    ...customMeta
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://cliid.dev${router.asPath}`} />
        <link rel="canonical" href={`https://cliid.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Jiwu Jang" />
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
      <div
        className={cn(
          'tw-flex tw-flex-col tw-justify-center tw-px-8 tw-sticky tw-top-0 tw-z-50',
          isTop || 'tw-backdrop-filter tw-shadow-md tw-backdrop-saturate-200 tw-backdrop-blur-lg'
        )}
      >
        <nav className="tw-flex tw-items-center tw-justify-between tw-w-full tw-relative tw-max-w-2xl tw-mx-auto tw-py-6">
          <button
            className="tw-visible md:tw-hidden"
            aria-label="Toggle menu"
            type="button"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <XSolid className="tw-w-5 tw-h-5" />
            ) : (
              <MenuSolid className="tw-w-5 tw-h-5" />
            )}
          </button>
          <div>
            <div className="md:tw-space-x-4">
              {routes.map((value, index) => (
                <NavItem href={value.href} text={value.text} key={index.toString()} />
              ))}
            </div>
          </div>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="tw-w-max tw-h-max tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-transition-all"
            onClick={() => {
              setTheme(resolvedTheme === 'tw-dark' ? 'tw-light' : 'tw-dark');
            }}
          >
            {mounted && resolvedTheme === 'tw-dark' ? (
              <MoonSolid className="tw-w-5 tw-h-5 tw-text-gray-700 dark:tw-text-gray-500 hover:tw-text-primary-500 dark:hover:tw-text-primary-500" />
            ) : (
              <SunSolid className="tw-w-5 tw-h-5 tw-text-gray-700 dark:tw-text-gray-500 hover:tw-text-primary-500 dark:hover:tw-text-primary-500" />
            )}
          </button>
        </nav>
      </div>
      {isMenuMounted && (
        <ul
          className={cn(
            'tw-flex tw-flex-col md:tw-hidden tw-z-[1000] tw-left-0 tw-opacity-0 tw-transition-transform tw-fixed tw-w-full tw-h-full tw-px-8',
            isMenuRendered && 'tw-opacity-100'
          )}
          style={{ transition: 'opacity 300ms ease, transform 300ms ease' }}
        >
          {routes.map((value, index) => (
            <li
              key={index.toString()}
              className={cn(
                'tw-whitespace-nowrap tw-px-1',
                `tw-delay-[${150 + index * 25}]`,
                isMenuRendered
                  ? 'tw-w-full tw-opacity-100 tw-translate-x-0'
                  : 'tw--translate-x-4 tw-opacity-0'
              )}
              style={{
                transition: isMenuRendered
                  ? 'opacity 300ms ease, transform 300ms ease, width 300ms ease, border-color 300ms ease'
                  : '',
                transitionDelay: `${150 + index * 25}ms`
              }}
            >
              <MobileNavItem {...value} />
            </li>
          ))}
        </ul>
      )}
      <main className="tw-flex tw-flex-col tw-justify-center tw-px-8 tw-pt-8">
        <div className="tw-flex tw-flex-col tw-items-start tw-justify-center tw-max-w-2xl tw-mx-auto tw-mb-16 tw-w-full">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}
