import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>이책저책 :: 당신이 찾는 모든 e-book</title>
        <link rel='icon' href='/favicon.svg' />
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' />
        <meta
          name='description'
          content='읽고 싶은 e-book이 어디에 있는지 한 번의 검색으로 찾아보세요.(밀리의서재, 리디북스 리디셀렉트, yes24 북클럽, 교보EBOOK'
        />
        <meta
          name='keywords'
          content='교보문고인터넷서점, 책추천, 교보EBOOK, 전자책, E북, EBOOK, 예스24북클럽, 교보문고EBOOK, 전자도서관, 도서추천, 전자책어플, E북어플, 독서어플, E북추천, 이북어플, E-BOOK, 전자책추천, 아이패드E북, 교보문고SAM, EBOOK사이트, ebook, e-book, E-book, e-Book, 전자책, 전자책구독, 월정액, 밀리의서재, 밀리, 리디셀렉트, 리디북스월정액, 리디북스셀렉트, 리디북스리디셀렉트, RIDISELECT, 리디북스정액제, 리디북스무제한, 리디북스정액, 리디월정액, 리디셀렉트월정액, 리디셀렉트구독, yes24, 북클럽'
        />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta property='og:url' content='https://ebookzbook.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='이책저책' />
        <meta property='og:site_name' content='이책저책' />
        <meta property='og:description' content='당신이 찾는 모든 e-book' />
        <meta property='og:image' content='https://parang-me.s3.ap-northeast-2.amazonaws.com/ebookzbook_image.png' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
