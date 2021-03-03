import React from 'react';
import styled from '@emotion/styled';

const Styled = {
  MainWrapper: styled.main`
    position: relative;
    margin-top: 160px;

    @media (max-width: 768px) {
      margin-top: 44px;
      padding: 36px 0 60px 32px;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translate(0, 30px);
      }
      to {
        opacity: 1;
        transform: translate(0, 0);
      }
    }
    transition: 0.3s;
    animation: 0.8s ease fadeIn;
  `,
  MainCopy: styled.div`
    font-family: 'Nanum Myeongjo', serif;
    font-size: 32px;
    color: #2d3029;
    margin-bottom: 32px;
    letter-spacing: -0.08em;
    @media (max-width: 768px) {
      font-size: 24px;
      margin-bottom: 14px;
    }
  `,
  SubCopy: styled.div`
    color: #929a88;
    font-size: 18px;
    @media (max-width: 768px) {
      font-size: 12px;
      width: 180px;
    }
  `,
};

function Main() {
  return (
    <Styled.MainWrapper>
      <Styled.MainCopy>
        <strong>이 책은</strong> 리디에 있을까?
        <br />
        <strong>저 책은</strong> 밀리에 있을까?
      </Styled.MainCopy>
      <Styled.SubCopy>읽고 싶은 e-book이 어디에 있는지 한 번의 검색으로 찾아보세요.</Styled.SubCopy>
    </Styled.MainWrapper>
  );
}

export default Main;
