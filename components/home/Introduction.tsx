import React from 'react';
import styled from '@emotion/styled';

const Styled = {
  IntroductionWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 360px 16px 320px 16px;
    @media (max-width: 768px) {
      padding: 64px 16px 96px 16px;
    }
  `,

  MainCopy: styled.div`
    font-size: 32px;
    color: #5a5f54;
    text-align: center;
    letter-spacing: -0.04em;
    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 20px;
    }
  `,

  ServiceBox: styled.div`
    display: flex;
    padding: 56px 0 56px 30px;
    @media (max-width: 768px) {
      padding: 16px 0 16px 30px;
    }
  `,

  Service: styled.div<{ imgName?: string }>`
    position: relative;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${(props) => `url('/assets/images/ebook-${props.imgName}.png')`};
    background-size: cover;
    @media (max-width: 768px) {
      width: 36px;
      height: 36px;
    }
  `,

  SubCopy: styled.div`
    text-align: center;
    color: #929a88;
    margin-bottom: 320px;
    letter-spacing: -0.04em;
    font-size: 20px;
    @media (max-width: 768px) {
      margin-bottom: 98px;
      font-size: 12px;
      line-height: 16px;
    }
  `,

  Description: styled.div`
    padding: 42px 120px;
    text-align: center;
    color: #2d3029;
    font-size: 32px;
    letter-spacing: -0.04em;
    @media (max-width: 768px) {
      padding: 42px 0;
      font-size: 18px;
    }
    @media (min-width: 769px) {
      line-height: 160%;
      border-radius: 24px;
      background-color: rgba(255, 255, 255, 0.7);
      font-family: 'Nanum Myeongjo', serif;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.1);
    }
  `,
};

const serviceList = [
  { right: '0px', imgName: 'ridi-select' },
  { right: '6px', imgName: 'millie' },
  { right: '12px', imgName: 'yes24' },
  { right: '18px', imgName: 'kyobo' },
  { right: '24px', imgName: 'naver' },
  { right: '30px', imgName: 'sam' },
];

function Introduction() {
  return (
    <Styled.IntroductionWrapper>
      <Styled.MainCopy>
        '이책 저책'은
        <br />
        <strong>실시간 통합 검색 결과</strong>를 제공합니다.
      </Styled.MainCopy>
      <Styled.ServiceBox>
        {serviceList.map((service) => (
          <Styled.Service style={{ right: `${service.right}` }} imgName={service.imgName} />
        ))}
      </Styled.ServiceBox>
      <Styled.SubCopy>e-book 구독 및 구매 서비스 6곳의 실시간 검색 결과를 제공합니다.</Styled.SubCopy>
      <Styled.Description>
        읽고 싶은 책이 생기면
        <br />
        <b>'이책 저책'</b>에서 가장 먼저 찾아보세요.
      </Styled.Description>
    </Styled.IntroductionWrapper>
  );
}

export default Introduction;
