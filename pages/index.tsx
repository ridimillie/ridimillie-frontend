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
import axios from 'axios';

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
