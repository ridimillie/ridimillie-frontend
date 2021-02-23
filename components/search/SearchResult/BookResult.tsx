import styled from '@emotion/styled';
import React from 'react';
import { BookType } from '../../../types';
import Router from 'next/router';
import BookMoreInfo from './BookMoreInfo';

const Styled = {
  BookWrapper: styled.div`
    width: 100%;
    background-color: white;
    box-shadow: 4px 4px 6px rgba(146, 154, 136, 0.05);
    border-radius: 10px;
    padding: 16px;
    margin: 16px 0;
  `,
  InfoWrapper: styled.div`
    display: flex;
  `,
  BookImg: styled.img`
    width: 85px;
    height: 127px;
    box-shadow: 1px 2px 4px #ddd;
    border-radius: 4px;
  `,
  Info: styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 24px;
    flex-grow: 1;
  `,
  Title: styled.div`
    margin-bottom: 8px;
    color: #ff8d78;
    font-weight: 700;
    font-size: 14px;
  `,
  Description: styled.div`
    font-weight: 400;
    font-size: 12px;
    color: #929a88;
    padding: 2px 0;
    /* display: flex; */
  `,
  DescBold: styled.div`
    font-weight: 700;
  `,
  PlatformButton: styled.button`
    font-size: 12px;
    text-align: center;
    padding: 8px 0;
    border: solid 1px #000000;
    border-radius: 4px;
    background: none;
    outline: 0;
    z-index: 10;
  `,
  ArrowImg: styled.img<{ moreInfo: boolean }>`
    transform: rotate(${(props) => (props.moreInfo ? '0.5turn' : '0turn')});
  `,
  Empty: styled.div`
    flex: 1;
  `,
};

interface Props {
  book: BookType;
}

function BookResult({ book }: Props) {
  const [moreInfo, setMoreInfo] = React.useState<boolean>(false);

  const handleClick = (isbn: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    console.log('router');

    Router.push(`/book?isbn=${isbn}`);
  };

  const onClickButton = () => {
    setMoreInfo(!moreInfo);
  };

  return (
    <Styled.BookWrapper>
      <Styled.InfoWrapper>
        <Styled.BookImg src={book.image} alt={book.title} />
        <Styled.Info>
          <Styled.Title>{book.title}</Styled.Title>
          <Styled.Description>
            저자&nbsp;<strong>{book.author}</strong>
          </Styled.Description>
          <Styled.Description>
            출판&nbsp;<strong>{book.publisher}</strong>
          </Styled.Description>
          <Styled.Empty />
          <Styled.PlatformButton onClick={onClickButton}>
            구독/구매 플랫폼 모아보기 &nbsp;
            <Styled.ArrowImg src='/assets/icons/down-arrow.svg' moreInfo={moreInfo} />
          </Styled.PlatformButton>
        </Styled.Info>
      </Styled.InfoWrapper>
      {moreInfo && <BookMoreInfo />}
    </Styled.BookWrapper>
  );
}

export default BookResult;
