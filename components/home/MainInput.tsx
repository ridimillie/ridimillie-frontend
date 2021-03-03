import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const Styled = {
  InputWrapper: styled.div`
    position: relative;
    height: 90px;
    padding: 18px 40px;
    @media (max-width: 768px) {
      height: 70px;
      padding: 10px 16px;
    }
  `,

  Input: styled.input`
    padding: 0 20px;
    width: 600px;
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
  return (
    <Link href='/search'>
      <Styled.InputWrapper>
        <a>
          <Styled.Input type='text' placeholder='읽고 싶은 e-book을 검색하세요.' />
        </a>
      </Styled.InputWrapper>
    </Link>
  );
}

export default MainInput;
