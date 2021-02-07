import styled from '@emotion/styled';
import Router from 'next/router';
import React from 'react';
import { BookType } from '../../types';

const Styled = {
  bookWrapper: styled.div`
    width: 100%;
    border-bottom: 1px solid #bbc2b1;
    display: flex;
    padding: 12px 16px;

    img {
      width: 30px;
      object-fit: contain;
    }
  `,
  Info: styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 16px;
  `,
  Title: styled.div`
    margin-bottom: 4px;
    color: #ff8d78;
    font-weight: 700;
    font-size: 12px;
  `,
  Description: styled.div`
    font-weight: 400;
    font-size: 10px;
    color: #929a88;
  `,
};

interface Props {
  bookList: BookType[];
}

function FastSearchResult({ bookList }: Props) {
  const removeHTML = (text: string) => {
    text = text.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi, '');
    return text;
  };

  const refinedBookList: Array<BookType> | undefined = bookList?.map((book: BookType) => {
    return {
      ...book,
      title: removeHTML(book.title),
      author: removeHTML(book.author),
      publisher: removeHTML(book.publisher),
    };
  });

  const handleClick = (isbn: string) => {
    Router.push(`/book?isbn=${isbn}`);
  };

  return (
    <>
      {refinedBookList
        ? refinedBookList.map((book: BookType) => (
            <Styled.bookWrapper key={book.bid} onClick={() => handleClick(book.isbn)}>
              <img src={book.image} alt={book.title} />
              <Styled.Info>
                <Styled.Title>{book.title}</Styled.Title>
                <Styled.Description>{`${book.author} | ${book.publisher}`}</Styled.Description>
              </Styled.Info>
            </Styled.bookWrapper>
          ))
        : null}
    </>
  );
}

export default FastSearchResult;
