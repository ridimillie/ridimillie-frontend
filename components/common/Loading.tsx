import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

const LoadingImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  animation: rotate_image 2s linear infinite;
  transform-origin: 50% 50%;

  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Loading() {
  const max: number = 7;
  const min: number = 1;

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div>
      {/* <LoadingImage src={`/assets/images/loading-image-${randomNumber}.jpg`} /> */}
      <LoadingImage src={`/assets/images/loading-image-3.jpg`} />
    </div>
  );
}

export default Loading;
