import React, { useEffect } from 'react';
import Head from 'next/head';
import { gtag } from '../../lib/utils/GA';

const withGoogleAnalytics = (children: React.ReactElement) => {
  useEffect(() => {
    // if (process.env.NODE_ENV === 'production') {
    window.dataLayer = window.dataLayer || [];
    gtag('js', new Date());
    gtag('config', 'G-ZWYN9S51KW', {
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_title: window.document.title,
    });
    // }
  }, []);

  return (
    <>
      <Head>
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-ZWYN9S51KW' />
      </Head>
      {children}
    </>
  );
};

export default withGoogleAnalytics;
