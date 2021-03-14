import React from 'react';
import styled from '@emotion/styled';

const Styled = {
  FooterContainer: styled.div`
    background: #bbc2b1;
    padding: 56px 80px;
    & > div {
      font-size: 12px;
      line-height: 180%;
      font-weight: normal;
      color: #5a5f54;
      @media (max-width: 768px) {
        font-size: 10px;
      }
    }
    @media (max-width: 768px) {
      padding: 40px 36px;
    }
  `,

  Logo: styled.img`
    height: 28px;
    margin-bottom: 8px;
    @media (max-width: 768px) {
      height: 20px;
    }
  `,

  SNSLink: styled.img`
    height: 24px;
    margin-bottom: 8px;
    margin-right: 12px;
    @media (max-width: 768px) {
      margin-right: 8px;
      height: 20px;
    }
  `,

  Description: styled.div`
    margin-bottom: 34px;
  `,
};

function Footer() {
  return (
    <Styled.FooterContainer>
      <Styled.Logo src='/assets/images/logo.svg' />
      <Styled.Description>당신이 찾는 모든 e-book</Styled.Description>
      <Styled.SNSLink src='/assets/icons/instagram-logo.svg' />
      <Styled.SNSLink src='/assets/icons/notion-logo.svg' />
      <div>
        tlakd3756@naver.com <br />
        Copyright 2021. 이책저책. All rights reserved.
      </div>
    </Styled.FooterContainer>
  );
}

export default Footer;
