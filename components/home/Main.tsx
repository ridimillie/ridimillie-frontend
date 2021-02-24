import React from 'react';
import styled from '@emotion/styled';

const Styled = {
  MainWrapper: styled.main`
    position: relative;

    @media (max-width: 768px) {
      margin-top: 44px;
      padding: 36px 0 60px 32px;
    }
  `,
  MainCopy: styled.div`
    @media (max-width: 768px) {
      font-family: 'Nanum Myeongjo', serif;
      font-size: 24px;
      /* sub / greenblack2 */
      color: #2d3029;
      margin-bottom: 14px;
      letter-spacing: -0.08em;
    }
  `,
  SubCopy: styled.div`
    @media (max-width: 768px) {
      font-size: 12px;
      /* sub / greengray2 */
      color: #929a88;
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
      <Styled.SubCopy>
        읽고 싶은 e-book이 어디에 있는지
        <br />한 번의 검색으로 찾아보세요.
      </Styled.SubCopy>
    </Styled.MainWrapper>
  );
}

export default Main;
