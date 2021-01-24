import styled from "@emotion/styled";
import Head from "next/head";
import React from "react";

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
  InputWrapper: styled.div`
    position: fixed;
    top: 44px;
    width: 100%;
    height: 70px;
    padding: 15px 16px;
  `,
  Input: styled.input`
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    border-bottom: 2px solid #000000;
    padding-left: 34px;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.04em;
    caret-color: #ff8d78;

    background-image: url("/assets/icons/search.svg");
    background-position: 0px 6px;
    background-repeat: no-repeat;

    &::placeholder {
      color: #bbc2b1;
    }
  `,
};

function search() {
  return (
    <div>
      <Head>
        <title>검색 | 이책저책 </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Styled.Header>
        <Styled.Logo src="/assets/images/logo.svg" />
      </Styled.Header>
      <Styled.InputWrapper>
        <Styled.Input type="text" placeholder="읽고 싶은 e-book을 검색하세요" />
      </Styled.InputWrapper>
    </div>
  );
}

export default search;
