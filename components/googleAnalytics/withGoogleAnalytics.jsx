import React, { useEffect } from 'react';
import Head from 'next/head';

const withGoogleAnalytics = (children) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      window.dataLayer = window.dataLayer || [];
      // eslint-disable-next-line
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-ZWYN9S51KW', {
          page_location: window.location.href,
          page_path: window.location.pathname,
          page_title: window.document.title,
        });
    }
  }, []);

  return (
    <>
      <Head>
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-ZWYN9S51KW' />
      </Head>
      {children}
    </>);
};

export default withGoogleAnalytics;
