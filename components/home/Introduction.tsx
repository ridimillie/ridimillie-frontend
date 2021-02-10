import React from 'react';
import styled from '@emotion/styled';
import { url } from 'inspector';

const Styled = {
  IntroductionWrapper: styled.section`
    @media (max-width: 768px) {
      padding: 86px 16px;
      display: flex;
      flex-direction: column;

      align-items: center;
    }
  `,
  MainCopy: styled.div`
    @media (max-width: 768px) {
      font-size: 14px;
      /* sub / greenblack2 */
      line-height: 25px;
      color: #2d3029;
      text-align: center;
      margin-bottom: 12px;
    }
  `,
  EBookServices: styled.div`
    @media (max-width: 768px) {
      padding: 16px 0 16px 30px;
      display: flex;
    }
  `,
  Service: styled.div<{ imgName?: string }>`
    @media (max-width: 768px) {
      position: relative;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: #ffffff;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
      background-position: center;
      background-repeat: no-repeat;
      /* background-image: url('/assets/images/ebook-millie.svg'); */
      background-image: ${(props) => `url('/assets/images/ebook-${props.imgName}.svg')`};
      background-size: cover;
    }
  `,
  SubCopy: styled.div`
    @media (max-width: 768px) {
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      /* sub / greengray2 */
      color: #929a88;
      margin-bottom: 98px;
    }
  `,
  Description: styled.div`
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    /* or 14px */
    text-align: center;
    /* sub / greenblack2 */
    color: #2d3029;
    padding: 42px 0;
    /* margin-bottom: 66px; */
  `,
};

function Introduction() {
  return (
    <Styled.IntroductionWrapper>
      <Styled.MainCopy>
        '이책 저책'은
        <br />
        <strong>실시간 통합 검색 결과</strong>를 제공합니다.
      </Styled.MainCopy>
      <Styled.EBookServices>
        <Styled.Service imgName='ridi-select' />
        <Styled.Service style={{ right: '6px' }} imgName='millie' />
        <Styled.Service style={{ right: '12px' }} imgName='yes24' />
        <Styled.Service style={{ right: '18px' }} />
        <Styled.Service style={{ right: '24px' }} />
        <Styled.Service style={{ right: '30px' }} />
      </Styled.EBookServices>
      <Styled.SubCopy>
        e-book 구독 및 구매 서비스 6곳의 실시간 검색 결과를 제공합니다.
      </Styled.SubCopy>
      <Styled.Description>
        읽고 싶은 책이 생기면
        <br />
        '이책 저책'에서 가장 먼저 찾아보세요.
      </Styled.Description>
    </Styled.IntroductionWrapper>
  );
}

export default Introduction;
