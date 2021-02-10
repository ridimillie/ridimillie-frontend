import React from 'react';
import styled from '@emotion/styled';

const Styled = {
  Container: styled.div`
    position: relative;
    margin-bottom: 32px;

    img {
      width: 66px;
      height: 66px;
    }
  `,
  AuthorBox: styled.div`
    position: absolute;
    width: 66px;
    height: 66px;
    top: 0px;
    left: 0px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Part: styled.div`
    font-weight: normal;
    font-size: 9px;
    line-height: 13px;
    text-align: center;
    /* sub / greengray1 */
    color: #5a5f54;
    margin-bottom: 2px;
  `,
  Name: styled.div`
    font-family: NanumMyeongjo;
    font-style: normal;
    font-weight: 800;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    /* sub / greenblack2 */
    color: #2d3029;
  `,
  Word: styled.div`
    position: absolute;
    top: 56px;
    left: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: normal;
    font-size: 10px;
    text-align: center;
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
    <Styled.Container>
      <img src='/assets/images/author-background.svg' />
      <Styled.AuthorBox>
        <Styled.Part>{part}</Styled.Part>
        <Styled.Name>{name}</Styled.Name>
      </Styled.AuthorBox>
      <Styled.Word>{word}</Styled.Word>
    </Styled.Container>
  );
}

export default Author;
