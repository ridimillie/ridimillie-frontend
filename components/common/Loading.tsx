import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

const Styled = {
  LoadingWrapper: styled.div`
    display: flex;
    justify-content: center;
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
};

function Loading() {
  const max: number = 7;
  const min: number = 1;

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <Styled.LoadingWrapper>
      {/* <LoadingImage src={`/assets/images/loading-image-${randomNumber}.jpg`} /> */}
      <Styled.LoadingImage src={`/assets/images/loading-image-3.jpg`} />
    </Styled.LoadingWrapper>
  );
}

export default Loading;
