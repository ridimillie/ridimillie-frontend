import React from 'react';
import styled from '@emotion/styled';

const Styled = {
  AuthorWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > img {
      position: relative;
      top: 64px;
      width: 88px;
    }
  `,

  Part: styled.div`
    text-align: center;
    font-size: 22px;
    color: #5a5f54;
    margin-bottom: 16px;
    @media (max-width: 768px) {
      font-size: 11px;
      margin-bottom: 4px;
    }
  `,

  Name: styled.div`
    font-family: 'Nanum Myeongjo', serif;
    font-weight: 800;
    font-size: 28px;
    text-align: center;
    color: #2d3029;
    margin-bottom: 18px;
    @media (max-width: 768px) {
      margin-bottom: 9px;
      font-size: 15px;
    }
  `,

  Word: styled.div`
    text-align: center;
    letter-spacing: -0.04em;
    color: #5a5f54;
    width: 240px;
    font-size: 14px;
    @media (max-width: 768px) {
      width: 112px;
      font-size: 10px;
      line-height: 15px;
    }
  `,
};

type AuthorType = {
  part: string;
  name: string;
  word: string;
};

function Author({ part, name, word }: AuthorType) {
  return (
    <Styled.AuthorWrapper>
      <img src='/assets/images/author-background.svg' />
      <Styled.Part>{part}</Styled.Part>
      <Styled.Name>{name}</Styled.Name>
      <Styled.Word>{word}</Styled.Word>
    </Styled.AuthorWrapper>
  );
}

export default Author;
