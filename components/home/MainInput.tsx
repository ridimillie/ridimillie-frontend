import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { gtag } from '../../lib/utils/GA';

const Styled = {
  InputWrapper: styled.div`
    position: relative;
    height: 96px;
    padding: 18px 40px;
    z-index: 10;
    @media (max-width: 768px) {
      height: 70px;
      padding: 10px 16px;
    }
  `,

  Input: styled.input`
    padding: 0 24px;
    width: 640px;
    height: 100%;
    border: 1px solid #fff;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 18px;
    line-height: 21px;
    color: #929a88;
    -webkit-appearance: none;
    -webkit-border-radius: 8px;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.1);
    &:focus {
      outline: none;
    }
    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
      font-size: 14px;
    }
  `,
};

function MainInput() {
  const onClickInput = () => {
    gtag('event', 'search', { event_category: 'home_page' });
  };
  return (
    <Link href='/search'>
      <Styled.InputWrapper onClick={onClickInput}>
        <a>
          <Styled.Input type='text' placeholder='읽고 싶은 e-book을 검색하세요.' />
        </a>
      </Styled.InputWrapper>
    </Link>
  );
}

export default MainInput;
