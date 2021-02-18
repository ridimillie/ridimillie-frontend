import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import Main from '../components/home/Main';
import MainInput from '../components/home/MainInput';
import Introduction from '../components/home/Introduction';
import Footer from '../components/home/Footer';
import Author from '../components/home/Authors';
import { DownCircleOutlined } from '@ant-design/icons';
import smoothscroll from 'smoothscroll-polyfill';

const Styled = {
  Header: styled.div`
    /* @media (max-width: 768px) { */
    position: fixed;
    top: 0;
    padding: 12px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    /* background: #f7f2e4; */
    z-index: 999;
    /* } */
  `,
  Logo: styled.img`
    @media (max-width: 768px) {
      height: 20px;
    }
  `,
  MainWrapper: styled.div`
    /* height: calc(100vh - 44px); */
    height: 100vh;
    /* position: relative; */

    &::before {
      content: '';
      background-image: url('/assets/images/home-background.gif');
      background-size: cover;
      /* background-repeat: no-repeat; */
      /* background-position: center; */
      opacity: 0.6;
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      background-color: #fff;
    }
  `,
  ScrollDownBtnWrapper: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    position: absolute;
    bottom: 0px;
    padding: 20px;
  `,
  ScrollDownBtn: styled(DownCircleOutlined)`
    font-size: 36px;
    color: #fff;
    opacity: 0.8;
    display: flex;
    outline: none;
  `,
  ScrollTopBtn: styled.div`
    position: fixed;
    bottom: 32px;
    right: 16px;
    width: 26px;
    height: 42px;
    /* sub / greengray3 */
    background: #bbc2b1;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);

    img {
      width: 14px;
    }
  `,
  AuthorWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
  `,
};

function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = React.useState(getSize);

  React.useEffect(() => {
    if (!isClient) {
      // return false;
      return;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

function Home() {
  // const [showScroll, setShowScroll] = React.useState(false);

  // React.useEffect(() => {
  //   const checkScrollTop = () => {
  //     if (!showScroll && window.pageYOffset > 400) {
  //       setShowScroll(true);
  //     } else if (showScroll && window.pageYOffset <= 400) {
  //       setShowScroll(false);
  //     }
  //   };

  //   window.addEventListener('scroll', checkScrollTop);
  // }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const size = useWindowSize();

  const scrollDown = () => {
    window.scrollTo({ top: size.height, behavior: 'smooth' });
  };

  React.useEffect(() => {
    // kick off the polyfill!
    smoothscroll?.polyfill();
  }, []);

  return (
    <>
      <Head>
        <title>이책저책 - e-book 찾을땐</title>
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:url' content='https://ebookzbook.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='이책저책' />
        <meta property='og:site_name' content='이책저책' />
        <meta property='og:description' content='당신이 찾는 모든 e-book' />
        <meta
          property='og:image'
          content='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1d083a33-a6b8-49d0-aac2-f834de661b03/ebookzbook_image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210218T105537Z&X-Amz-Expires=86400&X-Amz-Signature=b4fcd85467e90520a74e7d53ec51fa8a22fabaaa10490747bc0750ab859e7c99&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22ebookzbook_image.png%22'
        />
      </Head>
      <Styled.MainWrapper>
        <Styled.Header>
          <Styled.Logo src='/assets/images/logo.svg' />
        </Styled.Header>
        <Main />
        <MainInput />
        <Styled.ScrollDownBtnWrapper>
          <Styled.ScrollDownBtn onClick={scrollDown} />
        </Styled.ScrollDownBtnWrapper>
      </Styled.MainWrapper>
      <Introduction />
      <Styled.AuthorWrapper>
        <Author part='기획' name='김한솔' word='“안녕하세요”' />
        <Author part='디자인' name='배민주' word='“안녕하세요”' />
        <Author part='프론트엔드' name='이정연' word='“안녕하세요”' />
        <Author part='프론트엔드' name='유희수' word='“안녕하세요”' />
        <Author part='백엔드, 프론트엔드' name='홍준엽' word='“안녕하세요”' />
        <Author part='백엔드' name='최영훈' word='“안녕하세요”' />
      </Styled.AuthorWrapper>
      <Footer />
      <Styled.ScrollTopBtn onClick={scrollTop}>
        <img src='/assets/images/up-text.svg' />
      </Styled.ScrollTopBtn>
    </>
  );
}

export default Home;
