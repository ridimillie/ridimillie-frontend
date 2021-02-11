import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const Styled = {
  InputWrapper: styled.div`
    position: relative;

    @media (max-width: 768px) {
      height: 70px;
      padding: 10px 16px;
      width: 100%;
    }
  `,
  Input: styled.input`
    background: rgba(255, 255, 255, 0.6);
    border: 3px solid rgba(255, 255, 255, 0.8);
    box-sizing: border-box;
    border-radius: 100px;

    font-size: 14px;
    line-height: 21px;
    text-align: center;
    /* sub / greengray2 */
    color: #929a88;

    &:focus {
      outline: none;
    }

    @media (max-width: 768px) {
      height: 100%;
      width: 100%;
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
