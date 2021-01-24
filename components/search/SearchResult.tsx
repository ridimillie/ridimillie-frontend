import styled from '@emotion/styled';
import React, { FC } from 'react';
import { BookType } from '../../types';

const Styled = {
  bookWrapper: styled.div`
    width: 100%;
    border-bottom: 1px solid #bbc2b1;
    display: flex;
    padding: 14px 16px;
  `,
  Info: styled.div`
    display: flex;
    flex-direction: column;
    padding: 9px 16px;
  `,
  Title: styled.div`
    margin-bottom: 3px;
    color: #ff8d78;
    font-weight: 700;
    font-size: 14px;
  `,
  Description: styled.div`
    font-weight: 400;
    font-size: 12px;
    color: #929a88;
  `,
};

type Props = {
  bookList: Array<BookType>;
};

const SearchResult = ({ bookList }) => {
  return bookList
    ? bookList.map((book: BookType) => (
        <Styled.bookWrapper key={book.isbn}>
          <img src={book.image} alt={book.title} />
          <Styled.Info>
            <Styled.Title>{book.title}</Styled.Title>
            <Styled.Description>{`${book.author} | ${book.publisher}`}</Styled.Description>
          </Styled.Info>
        </Styled.bookWrapper>
      ))
    : null;
};

export default SearchResult;
