import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from '@emotion/styled';

const Styled = {
  MainWrapper: styled.main`
    @media (max-width: 768px) {
      margin-top: 126px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,
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
  MainCopy: styled.div`
    @media (max-width: 768px) {
      width: 220px;
      margin-bottom: 12px;
    }
  `,
  SubCopy: styled.div`
    @media (max-width: 768px) {
      width: 200px;
      margin-bottom: 52px;
    }
  `,
  InputWrapper: styled.div`
    @media (max-width: 768px) {
      height: 70px;
      padding: 10px 16px;
      width: 100%;
    }
  `,
  Input: styled.input`
    background: rgba(255, 255, 255, 0.6);
    border: 3px solid rgba(255, 255, 255, 0.8);
    box-sizing: border-box;
    border-radius: 100px;
    -webkit-appearance: none;
    text-align: center;
    font-size: 16px;

    &:focus {
      outline: none;
    }

    @media (max-width: 768px) {
      height: 100%;
      width: 100%;
    }
  `,
};

function Home() {
  return (
    <div>
      <Head>
        <title>이책저책 - e-book 찾을땐</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width'
        />
      </Head>
      <Styled.MainWrapper>
        <Styled.Header>
          <Styled.Logo src='/assets/images/logo.svg' />
        </Styled.Header>
        <Styled.MainCopy>원하는 e-book이 어디에 있는지 이곳저곳 돌아다니지 마세요.</Styled.MainCopy>
        <Styled.SubCopy>
          이책저책은 모든 e-book 구독 플랫폼과 판매 플랫폼의 검색결과를 제공합니다.
        </Styled.SubCopy>
        <Link href='/search'>
          <Styled.InputWrapper>
            <a>
              <Styled.Input type='text' placeholder='읽고 싶은 e-book을 검색하세요.' />
            </a>
          </Styled.InputWrapper>
        </Link>
      </Styled.MainWrapper>
    </div>
  );
}

export default Home;
