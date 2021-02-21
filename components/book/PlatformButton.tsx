import React from 'react';
import styled from '@emotion/styled';

const Styled = {
  Box: styled.div`
    width: 100%;
    margin: 8px 0;
    padding: 10px 16px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    box-shadow: 2px 2px 8px rgba(146, 154, 136, 0.05);
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

type Props = {
  platform: string;
  price: number;
  url: string;
};

function PlatformButton({ platform, price, url }: Props) {
  const handleClick = () => {
    alert('아직이다...');
  };

  return (
    <Styled.Box onClick={handleClick}>
      <Styled.BoxLeft>
        <img src='/assets/images/millie-logo.png' />
        <div>{platform}</div>
      </Styled.BoxLeft>
      <Styled.BoxRight>
        <div>{price}</div>
        <img src='/assets/icons/right-arrow.svg' />
      </Styled.BoxRight>
    </Styled.Box>
  );
}

export default PlatformButton;
