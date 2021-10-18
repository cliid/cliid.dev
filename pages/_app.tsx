import { useAnalytics } from '@lib/analytics';
import '@styles/global.css';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
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
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
