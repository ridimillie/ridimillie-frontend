import React from 'react';
import styled from '@emotion/styled';

const Styled = {
  AuthorBox: styled.div`
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
    font-size: 11px;
    text-align: center;
    /* sub / greengray1 */
    color: #5a5f54;
    margin-bottom: 4px;
  `,
  Name: styled.div`
    font-family: 'Nanum Myeongjo', serif;
    font-weight: 800;
    font-size: 15px;
    text-align: center;
    /* sub / greenblack2 */
    color: #2d3029;
    margin-bottom: 9px;
  `,
  Word: styled.div`
    width: 120px;
    font-size: 10px;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.04em;
    /* sub / greengray1 */
    color: #5a5f54;
  `,
};

type AuthorType = {
  part: string;
  name: string;
  word: string;
};

function Author({ part, name, word }: AuthorType) {
  return (
    <Styled.AuthorBox>
      <img src='/assets/images/author-background.svg' />
      <Styled.Part>{part}</Styled.Part>
      <Styled.Name>{name}</Styled.Name>
      <Styled.Word>{word}</Styled.Word>
    </Styled.AuthorBox>
  );
}

export default Author;
