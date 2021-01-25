import React from 'react';
import styled from '@emotion/styled';

const Styled = {
  Box: styled.div`
    width: 100%;
    margin: 4px 0;
    padding: 10px 16px;
    background-color: white;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
  `,
  BoxLeft: styled.div`
    display: flex;
    align-items: center;
    font-weight: normal;
    font-size: 14px;

    img {
      padding-right: 8px;
    }
  `,
  BoxRight: styled.div`
    display: flex;
    align-items: center;
    font-weight: normal;
    font-size: 14px;

    img {
      padding-left: 16px;
    }
  `,
};

function EbookLinkButton() {
  const handleClick = () => {
    alert('아직이다...');
  };

  return (
    <Styled.Box onClick={handleClick}>
      <Styled.BoxLeft>
        <img src='/assets/images/millie-logo.png' />
        <div>밀리의 서재</div>
      </Styled.BoxLeft>
      <Styled.BoxRight>
        <div>9,990원</div>
        <img src='/assets/icons/right-arrow.svg' />
      </Styled.BoxRight>
    </Styled.Box>
  );
}

export default EbookLinkButton;
