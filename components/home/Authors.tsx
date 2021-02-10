import React from 'react';
import styled from '@emotion/styled';

const Styled = {
  Container: styled.div`
    width: 66px;
    height: 66px;
  `,
  Word: styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
};

type AuthorType = {
  part: string;
  name: string;
  word: string;
};

function Author({ part, name, word }: AuthorType) {
  return (
    <Styled.Container>
      <img src='/assets/images/author-background.svg' />
      <div>{part}</div>
      <div>{name}</div>
      <Styled.Word>{word}</Styled.Word>
    </Styled.Container>
  );
}

export default Author;
