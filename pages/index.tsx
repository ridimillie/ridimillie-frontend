import React from 'react';
import styled from '@emotion/styled';
import Main from '../components/home/Main';
import MainInput from '../components/home/MainInput';
import Introduction from '../components/home/Introduction';
import Footer from '../components/home/Footer';
import AuthorList from '../components/home/AuthorList';
import { DownCircleOutlined } from '@ant-design/icons';
import smoothscroll from 'smoothscroll-polyfill';
import withGoogleAnalytics from '../components/googleAnalytics/withGoogleAnalytics';

const Styled = {
  Header: styled.div`
    position: fixed;
    top: 0;
    padding: 12px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    /* scroll이 0이 아닐때 && background: #f7f2e4; */
    backdrop-filter: blur(4px);
    background-color: rgba(255, 255, 255, 0.05);
    z-index: 999;
    img {
      height: 20px;
      display: none;
    }
    @media (max-width: 768px) {
      img {
        display: block;
      }
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

  HomeBackground: styled.img`
    position: absolute;
    top: 0;
    right: 0;
    width: 880px;
    @media (max-width: 1440px) {
      width: 800px;
    }
    @media (max-width: 1140px) {
      width: 640px;
    }
    @media (max-width: 768px) {
      display: none;
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

  const Component = (
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
      <AuthorList />
      <Footer />
      <Styled.ScrollTopBtn onClick={scrollTop}>
        <img src='/assets/images/up-text.svg' />
      </Styled.ScrollTopBtn>
      <Styled.HomeBackground src='/assets/images/background-shape.svg' />
    </>
  );

  return withGoogleAnalytics(Component);
}

export default Home;
