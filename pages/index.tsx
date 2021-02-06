import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import Main from '../components/home/Main';
import MainInput from '../components/home/MainInput';
import Introduction from '../components/home/Introduction';

const Styled = {
  Header: styled.div`
    @media (max-width: 768px) {
      position: fixed;
      top: 0;
      padding: 12px 0;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  `,
  Logo: styled.img`
    @media (max-width: 768px) {
      height: 20px;
    }
  `,
};

function Home() {
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
    </>
  );
}

export default Home;
