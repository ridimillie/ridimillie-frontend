import React from 'react';
import styled from '@emotion/styled';
import { gtag } from '../../lib/utils/GA';

const Styled = {
  Box: styled.div`
    width: 100%;
    padding: 16px 20px;
    margin: 12px 0;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    box-shadow: 2px 2px 8px rgba(146, 154, 136, 0.05);
    @media (max-width: 768px) {
      margin: 8px 0;
      padding: 10px 16px;
    }
  `,

  BoxLeft: styled.div`
    display: flex;
    align-items: center;
    font-weight: normal;
    font-size: 16px;
    color: #2d3029;
    img {
      margin-right: 8px;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 1px solid #e9e9e9;
    }
    @media (max-width: 768px) {
      font-size: 14px;
      img {
        margin-right: 8px;
        border-radius: 50%;
      }
    }
  `,

  BoxRight: styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    color: #2d3029;
    img {
      padding-left: 16px;
    }
    @media (max-width: 768px) {
      font-size: 14px;
    }
  `,
};

type Props = {
  platform: string;
  price: number;
  url: string;
};

function PlatformButton({ platform, price, url }: Props) {
  const PlatformLogo = ({ size }: { size: string }) => {
    if (platform === 'MILLIE' || platform === '밀리의서재') return <img src='/assets/images/ebook-millie.png' width={size} height={size} />;
    if (platform === 'YES24' || platform === '예스24') return <img src='/assets/images/ebook-yes24.png' width={size} height={size} />;
    if (platform === 'NAVER') return <img src='/assets/images/ebook-naver.png' width={size} height={size} />;
    if (platform === 'KYOBO' || platform === '인터넷 교보문고')
      return <img src='/assets/images/ebook-kyobo.png' width={size} height={size} />;
    if (platform === 'sam베이직') return <img src='/assets/images/ebook-sam.png' width={size} height={size} />;
    if (platform === '리디북스') return <img src='/assets/images/ebook-ridibooks.png' width={size} height={size} />;
    if (platform === '인터파크 도서') return <img src='/assets/images/ebook-interpark.png' width={size} height={size} />;
    if (platform === '알라딘') return <img src='/assets/images/ebook-aladin.png' width={size} height={size} />;
    if (platform === '네이버 시리즈') return <img src='/assets/images/ebook-naver-series.png' width={size} height={size} />;
    return <img src='/assets/images/ebook-default.svg' width={size} height={size} />;
  };

  return (
    <a href={url} target='_blank'>
      <Styled.Box>
        <Styled.BoxLeft>
          <PlatformLogo size='24px' />
          <div>{platform}</div>
        </Styled.BoxLeft>
        <Styled.BoxRight>
          <div>{price}</div>
          <img src='/assets/icons/right-arrow-bold.svg' />
        </Styled.BoxRight>
      </Styled.Box>
    </a>
  );
}

export default PlatformButton;
