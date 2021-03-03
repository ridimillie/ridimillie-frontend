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
    position: fixed;
    top: 0;
    padding: 12px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    /* scroll이 0이 아닐때 && background: #f7f2e4; */
    z-index: 999;
    img {
      height: 20px;
    }
  `,

  MainWrapper: styled.div`
    display: flex;
    flex-direction: column;
    max-width: 960px;
    margin: 0 auto;
    @media (max-width: 768px) {
      height: 100vh;
      &::before {
        content: '';
        background-image: url('/assets/images/home-background.gif');
        background-size: cover;
        opacity: 0.6;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background-color: #fff;
      }
    }
  `,

  ScrollDownBtnWrapper: styled.div`
    display: none;
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      width: 100%;
      position: absolute;
      bottom: 0px;
      padding: 20px;
    }
  `,

  ScrollDownBtn: styled(DownCircleOutlined)`
    display: none;
    @media (max-width: 768px) {
      font-size: 36px;
      color: #fff;
      opacity: 0.8;
      display: flex;
      outline: none;
    }
  `,

  ScrollTopBtn: styled.div`
    position: fixed;
    bottom: 32px;
    right: 16px;
    width: 26px;
    height: 42px;
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
    @media (max-width: 768px) {
    }
  `,

  AuthorTitle: styled.div`
    font-family: 'Nanum Myeongjo', serif;
    font-weight: 800;
    text-align: center;
    letter-spacing: -0.04em;
    color: #5a5f54;
    font-size: 36px;
    margin-bottom: 64px;
    @media (max-width: 768px) {
      margin-bottom: 0;
      font-size: 20px;
    }
  `,

  Row: styled.div`
    display: flex;
    width: 540px;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: 768px) {
      width: 260px;
    }
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
      <Styled.Header>
        <img src='/assets/images/logo.svg' />
      </Styled.Header>
      <Styled.MainWrapper>
        <Main />
        <MainInput />
        <Styled.ScrollDownBtnWrapper>
          <Styled.ScrollDownBtn onClick={scrollDown} />
        </Styled.ScrollDownBtnWrapper>
      </Styled.MainWrapper>
      <Introduction />
      <Styled.AuthorWrapper>
        <Styled.AuthorTitle>엮은이들</Styled.AuthorTitle>
        <Styled.Row>
          <Author part='기획' name='김한솔' word='“밀리 구독자면서 리디북스에서 책을 구매하고 주기적으로 교보문고를 방문해요.”' />
          <Author part='디자인' name='배민주' word='"이북 리더기를 항상 들고다니는 디자이너입니다."' />
        </Styled.Row>
        <Styled.Row>
          <Author part='프론트엔드' name='이정연' word='“스타트업에 관한건 다 좋아합니다. 책 읽는걸 항상 시도합니다.”' />
          <Author part='프론트엔드' name='유희수' word='“U희수입니다. 책을 읽는 지성인이 됩시다.”' />
        </Styled.Row>
        <Styled.Row>
          <Author part='백엔드, 프론트엔드' name='홍준엽' word='“안녕하세요”' />
          <Author part='백엔드' name='최영훈' word='“안녕하세요”' />
        </Styled.Row>
      </Styled.AuthorWrapper>
      <Footer />
      <Styled.ScrollTopBtn onClick={scrollTop}>
        <img src='/assets/images/up-text.svg' />
      </Styled.ScrollTopBtn>
    </>
  );
}

export default Home;
