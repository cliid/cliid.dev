import '@styles/base.scss';
import '@styles/components.scss';
import '@styles/utilities.scss';
import '@styles/prism.scss';

import { useAnalytics } from '@lib/analytics';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import NextNprogress from 'nextjs-progressbar';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useAnalytics();

  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider
        attribute="class"
        themes={['tw-light', 'tw-dark']}
        defaultTheme="system"
        disableTransitionOnChange
      >
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <NextNprogress
          color="#00807D"
          startPosition={0.3}
          stopDelayMs={200}
          height={2}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
