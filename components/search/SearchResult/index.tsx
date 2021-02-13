import React from 'react';
import { BookType } from '../../../types';
import BookResult from './BookResult';

interface Props {
  bookList: BookType[];
}

function SearchResult({ bookList }: Props) {
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

  return (
    <>
      {refinedBookList.map((book: BookType) => (
        <BookResult key={book.bid} book={book} />
      ))}
    </>
  );
}

export default SearchResult;
