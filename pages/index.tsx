import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import Main from '../components/home/Main';
import MainInput from '../components/home/MainInput';
import Introduction from '../components/home/Introduction';
import Footer from '../components/home/Footer';

const Styled = {
  Header: styled.div`
    @media (max-width: 768px) {
      position: fixed;
      top: 0;
      padding: 12px 0;
      width: 100%;
      display: flex;
      justify-content: center;
      background: #f7f2e4;
    }
  `,
  Logo: styled.img`
    @media (max-width: 768px) {
      height: 20px;
    }
  `,
  ScrollToTopBtn: styled.div`
    position: fixed;
    bottom: 32px;
    right: 16px;
    width: 26px;
    height: 42px;
    /* sub / greengray3 */
    background: #bbc2b1;
    border-radius: 20px;
  `,
};

function Home() {
  const [showScroll, setShowScroll] = React.useState(false);

  React.useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>이책저책 - e-book 찾을땐</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Styled.Header>
        <Styled.Logo src='/assets/images/logo.svg' />
      </Styled.Header>
      <Main />
      <MainInput />
      <Introduction />
      <Footer />
      <Styled.ScrollToTopBtn onClick={scrollTop}>위로</Styled.ScrollToTopBtn>
    </>
  );
}

export default Home;
