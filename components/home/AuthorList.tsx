import React from 'react';
import styled from '@emotion/styled';

const Styled = {
  AuthorListWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 240px;
    @media (max-width: 768px) {
      margin-bottom: 120px;
    }
  `,

  AuthorTitle: styled.div`
    font-family: 'Nanum Myeongjo', serif;
    font-weight: 800;
    text-align: center;
    letter-spacing: -0.04em;
    color: #5a5f54;
    font-size: 36px;
    margin-bottom: 64px;
    @media (max-width: 768px) {
      margin-bottom: 0;
      font-size: 20px;
    }
  `,

  Row: styled.div`
    display: flex;
    width: 540px;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: 768px) {
      width: 260px;
    }
  `,

  AuthorWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > img {
      position: relative;
      top: 108px;
      width: 136px;
      @media (max-width: 768px) {
        top: 64px;
        width: 88px;
      }
    }
  `,

  Part: styled.div`
    text-align: center;
    font-size: 18px;
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
    width: 200px;
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

function AuthorList() {
  return (
    <Styled.AuthorListWrapper>
      <Styled.AuthorTitle>엮은이들</Styled.AuthorTitle>
      <Styled.Row>
        <Author part='기획' name='김한솔' word='“밀리 구독자면서 리디북스에서 책을 구매하고 주기적으로 교보문고를 방문해요.”' />
        <Author part='디자인' name='배민주' word='"이북 리더기를 항상 들고다니는 디자이너입니다."' />
      </Styled.Row>
      <Styled.Row>
        <Author part='프론트엔드' name='이정연' word='“스타트업에 관한건 다 좋아합니다. 책 읽는걸 항상 시도합니다.”' />
        <Author part='프론트엔드' name='유희수' word='“U희수입니다. 책을 읽는 지성인이 됩시다.”' />
      </Styled.Row>
      <Styled.Row>
        <Author part='프론트엔드, 백엔드' name='홍준엽' word='“책 책 책 책을 읽읍시다.”' />
        <Author part='백엔드' name='최영훈' word='“5분만 기다려봐. 명언 좀 생각해볼게“' />
      </Styled.Row>
    </Styled.AuthorListWrapper>
  );
}

export default AuthorList;
