import styles from '@styles/mobile-menu.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useDelayedRender from 'use-delayed-render';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, 'tw-visible md:tw-hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            'tw-flex tw-flex-col tw-absolute tw-bg-gray-50 dark:tw-bg-gray-900',
            isMenuRendered && styles.menuRendered
          )}
        >
          <li
            className="tw-border-b tw-border-gray-300 dark:tw-border-gray-700 tw-text-gray-900 dark:tw-text-gray-100 tw-text-sm tw-font-semibold"
            style={{ transitionDelay: '150ms' }}
          >
            <Link href="/">
              <a className="tw-flex tw-w-auto tw-pb-4">Home</a>
            </Link>
          </li>
          <li
            className="tw-border-b tw-border-gray-300 dark:tw-border-gray-700 tw-text-gray-900 dark:tw-text-gray-100 tw-text-sm tw-font-semibold"
            style={{ transitionDelay: '175ms' }}
          >
            <Link href="/blog">
              <a className="tw-flex tw-w-auto tw-pb-4">Blog</a>
            </Link>
          </li>
          <li
            className="tw-border-b tw-border-gray-300 dark:tw-border-gray-700 tw-text-gray-900 dark:tw-text-gray-100 tw-text-sm tw-font-semibold"
            style={{ transitionDelay: '200ms' }}
          >
            <Link href="/dashboard">
              <a className="tw-flex tw-w-auto tw-pb-4">Dashboard</a>
            </Link>
          </li>
          <li
            className="tw-border-b tw-border-gray-300 dark:tw-border-gray-700 tw-text-gray-900 dark:tw-text-gray-100 tw-text-sm tw-font-semibold"
            style={{ transitionDelay: '250ms' }}
          >
            <Link href="/guestbook">
              <a className="tw-flex tw-w-auto tw-pb-4">Guestbook</a>
            </Link>
          </li>
          <li
            className="tw-border-b tw-border-gray-300 dark:tw-border-gray-700 tw-text-gray-900 dark:tw-text-gray-100 tw-text-sm tw-font-semibold"
            style={{ transitionDelay: '275ms' }}
          >
            <Link href="/about">
              <a className="tw-flex tw-w-auto tw-pb-4">About</a>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      className="tw-h-5 tw-w-5 tw-absolute tw-text-gray-900 dark:tw-text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: any) {
  return (
    <svg
      className="tw-h-5 tw-w-5 tw-absolute tw-text-gray-900 dark:tw-text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
