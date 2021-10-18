import { useScroll } from '@hooks/use-scroll';
import cn from 'classnames';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from './Footer';
import MobileMenu from './MobileMenu';

function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'tw-font-semibold tw-text-gray-800 dark:tw-text-gray-200'
            : 'tw-font-normal tw-text-gray-600 dark:tw-text-gray-400',
          'tw-hidden md:tw-inline-block tw-p-1 sm:tw-px-3 sm:tw-py-2 tw-rounded-lg hover:tw-bg-gray-200 dark:hover:tw-bg-gray-800 tw-transition-all'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}
export default function Container(props: any) {
  const { scrollDirection } = useScroll();
  const [mounted, setMounted] = useState(false);
  const [jello, setJello] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Jiwu Jang – Developer, writer, investor.',
    description: `Front-end developer, TypeScript enthusiast, and real estate investor.`,
    type: 'website',
    ...customMeta
  };

  return (
    <div className="tw-bg-gray-50 dark:tw-bg-gray-900">
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
          'tw-flex tw-flex-col tw-justify-center tw-px-8 navbar sm:tw-mb-8',
          'tw-border-gray-200 dark:tw-border-gray-700 tw-text-gray-900 dark:tw-text-gray-100 tw-bg-gray-50 dark:tw-bg-gray-900',
          scrollDirection === 'up' ? 'navbar-hide' : 'navbar-show'
        )}
      >
        <nav className="tw-flex tw-items-center tw-justify-between tw-w-full tw-relative tw-max-w-2xl tw-mx-auto tw-pt-8 tw-pb-8">
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>
          <div className="tw-ml-[-0.60rem]">
            <MobileMenu />
            <NavItem href="/" text="Home" />
            <NavItem href="/blog" text="Blog" />
            <NavItem href="/dashboard" text="Dashboard" />
            <NavItem href="/guestbook" text="Guestbook" />
            <NavItem href="/about" text="About" />
          </div>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className={cn(
              'tw-w-9 tw-h-9 tw-bg-gray-200 tw-rounded-lg dark:tw-bg-gray-600 tw-flex tw-items-center tw-justify-center hover:tw-ring-2 tw-ring-gray-300 tw-transition-all',
              jello && 'jello-horizontal'
            )}
            onClick={() => {
              setTheme(resolvedTheme === 'tw-dark' ? 'tw-light' : 'tw-dark');
              setJello(true);
              setTimeout(() => {
                setJello(false);
              }, 600);
            }}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="tw-w-5 tw-h-5 tw-text-gray-800 dark:tw-text-gray-200"
              >
                {resolvedTheme === 'tw-dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </nav>
      </div>
      <main
        id="skip"
        className="tw-flex tw-flex-col tw-justify-center tw-px-8 tw-bg-gray-50 dark:tw-bg-gray-900"
      >
        <div className="tw-flex tw-flex-col tw-items-start tw-justify-center tw-max-w-2xl tw-mx-auto tw-mb-16 tw-w-full">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}
