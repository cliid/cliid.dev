import '@styles/base.scss';
import '@styles/components.scss';
import '@styles/utilities.scss';
import '@styles/prism.scss';
import '@styles/fonts.scss';

import { useAnalytics } from '@lib/analytics';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import NextNprogress from 'nextjs-progressbar';
import React from 'react';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  useAnalytics();

  return (
    <SessionProvider session={session}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{ dark: 'tw-dark', light: 'tw-light' }}
        disableTransitionOnChange
      >
        <NextNprogress startPosition={0.3} stopDelayMs={50} height={3} showOnShallow={true} />
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
          />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default App;
