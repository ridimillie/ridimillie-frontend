import styled from '@emotion/styled';
import Router from 'next/router';
import React from 'react';
import { BookType } from '../../types';
import { gtag } from '../../lib/utils/GA';

const Styled = {
  bookWrapper: styled.div`
    width: 100%;
    border-bottom: 1px solid #d0d4ca;
    display: flex;
    padding: 16px 16px;
    cursor: pointer;
    user-select: none;
    pointer-events: all;
    img {
      width: 60px;
      height: 90px;
      border-radius: 2px;
      filter: drop-shadow(4px 4px 8px rgba(146, 154, 136, 0.15));
    }
    @media (max-width: 768px) {
      padding: 8px 12px;
      img {
        width: 30px;
        height: 45px;
      }
    }
  `,

  Info: styled.div`
    padding-left: 16px;
    padding-top: 4px;
    overflow: hidden;
    width: calc(100% - 30px);
  `,

  Title: styled.div`
    margin-bottom: 2px;
    color: #ff8d78;
    font-weight: 700;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  `,

  Description: styled.div`
    font-weight: 400;
    font-size: 13px;
    color: #929a88;
    @media (max-width: 768px) {
      font-size: 10px;
    }
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

  const handleClick = (isbn: string, title: string) => {
    gtag('event', 'book', { event_category: 'search', event_label: title });
    Router.push(`/book?isbn=${isbn}`);
  };

  return (
    <>
      {refinedBookList
        ? refinedBookList.map((book: BookType) => (
            <Styled.bookWrapper key={book.bid} onClick={() => handleClick(book.isbn, book.title)}>
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
