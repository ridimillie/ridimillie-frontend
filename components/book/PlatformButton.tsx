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
      margin-right: 8px;
      border-radius: 50%;
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

  const PlatformLogo = ({ size }: { size: string }) => {
    if (platform === 'MILLIE' || platform === '밀리의서재') return <img src='/assets/images/ebook-millie.png' width={size} height={size} />;
    if (platform === 'YES24' || platform === '예스24') return <img src='/assets/images/ebook-yes24.png' width={size} height={size} />;
    if (platform === 'NAVER') return <img src='/assets/images/ebook-naver.png' width={size} height={size} />;
    if (platform === 'KYOBO') return <img src='/assets/images/ebook-kyobo.png' width={size} height={size} />;
    if (platform === 'sam베이직') return <img src='/assets/images/ebook-sam.png' width={size} height={size} />;
    return <img src='/assets/images/ebook-default.svg' width={size} height={size} />;
  };

  return (
    <Styled.Box onClick={handleClick}>
      <Styled.BoxLeft>
        <PlatformLogo size='24px' />
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
