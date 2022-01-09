import '@styles/base.scss';
import '@styles/components.scss';
import '@styles/utilities.scss';
import '@styles/prism.scss';
import '@styles/fonts.scss';

import { useAnalytics } from '@lib/analytics';
import FontFaceObserver from 'fontfaceobserver';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import NextNprogress from 'nextjs-progressbar';
import React, { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useAnalytics();

  // Critical FOFT
  useEffect(() => {
    // Optimization for Repeat Views
    if (sessionStorage.criticalFoftDataUriFontsLoaded) {
      document.documentElement.className += ' fonts-stage-1 fonts-stage-2';
      return;
    }
    const pretendardSubset = new FontFaceObserver('PretendardSubset');

    Promise.all([pretendardSubset.load()]).then(function () {
      document.documentElement.className += ' fonts-stage-1';

      const pretendard = new FontFaceObserver('Pretendard');

      Promise.all([pretendard.load()]).then(function () {
        document.documentElement.className += ' fonts-stage-2';

        // Optimization for Repeat Views
        sessionStorage.criticalFoftDataUriFontsLoaded = true;
      });
    });
  }, []);

  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{ dark: 'tw-dark', light: 'tw-light' }}
        disableTransitionOnChange
      >
        <NextNprogress
          color="#7777ff"
          startPosition={0.3}
          stopDelayMs={50}
          height={3}
          showOnShallow={true}
        />
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
