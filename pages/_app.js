import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>이책저책 :: 당신이 찾는 모든 e-book</title>
        <link rel='icon' href='/favicon.svg' />
        <meta charSet='UTF-8' />
        <meta
          name='viewport'
          content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
        />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta property='og:url' content='https://ebookzbook.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='이책저책' />
        <meta property='og:site_name' content='이책저책' />
        <meta property='og:description' content='당신이 찾는 모든 e-book' />
        <meta
          property='og:image'
          content='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1d083a33-a6b8-49d0-aac2-f834de661b03/ebookzbook_image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210223T124349Z&X-Amz-Expires=86400&X-Amz-Signature=a4334da720cf5a20618cdacdaf724c8f75ddb571a10308a88abbe2210097ab67&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22ebookzbook_image.png%22'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
