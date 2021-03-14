import React, { useEffect } from 'react';
import Head from 'next/head';

const withGoogleAnalytics = (children) => {
  useEffect(() => {

    // if (process.env.NODE_ENV === 'production') {
      window.dataLayer = window.dataLayer || [];
      // eslint-disable-next-line
      function gtag() {
        console.log(arguments);
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-6VV65M8XD0');
      // gtag('config', 'G-6VV65M8XD0', {
      //   page_location: window.location.href,
      //   page_path: window.location.pathname,
      //   page_title: window.document.title,
      // });
    // }
  }, []);

  return (
    <>
      <Head>
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-6VV65M8XD0' />
      </Head>
      {children}
    </>);
};

export default withGoogleAnalytics;
