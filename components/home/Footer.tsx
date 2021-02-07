import React from 'react';
import styled from '@emotion/styled';

const Styled = {
  FooterContainer: styled.div`
    /* sub / greengray3 */
    background: #bbc2b1;
    padding: 40px 36px;

    & > div {
      font-size: 10px;
      line-height: 180%;
      font-weight: normal;
      /* sub / greengray1 */
      color: #5a5f54;
    }
  `,
  Logo: styled.img`
    height: 20px;
    margin-bottom: 8px;
  `,
  SNSLink: styled.img`
    height: 20px;
    margin-bottom: 8px;
    margin-right: 8px;
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
