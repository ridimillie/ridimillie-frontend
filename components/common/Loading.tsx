import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

const Styled = {
  LoadingWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > div {
      color: #929a88;
    }
  `,

  LoadingImage: styled.img`
    width: 80px;
    height: 80px;
    margin-top: 40px;
    border-radius: 50%;
    animation: rotate_image 2s linear infinite;
    transform-origin: 50% 50%;

    @keyframes rotate_image {
      100% {
        transform: rotate(360deg);
      }
    }
  `,

  LoadingBook: styled.img`
    width: 120px;
    height: 120px;
    margin-top: 80px;
  `,
};

type LoadingType = {
  type?: string;
  text?: string;
};

function Loading({ type = 'book', text }: LoadingType) {
  const max: number = 7;
  const min: number = 1;

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <Styled.LoadingWrapper>
      {type === 'book' && <Styled.LoadingBook src='/assets/icons/loading-book.gif' alt='Loading...' />}
      {type === 'random-image' && <Styled.LoadingImage src={`/assets/images/loading-image-${randomNumber}.jpg`} />}
      {type === 'image' && <Styled.LoadingImage src={`/assets/images/loading-image-7.jpg`} />}
      {text && <div>{text}</div>}
    </Styled.LoadingWrapper>
  );
}

export default Loading;
