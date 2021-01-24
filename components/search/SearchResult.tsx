import React, { FC } from "react";
import { BookType } from "../../types";

type Props = {
  bookList: Array<BookType>;
};

const SearchResult = ({ bookList }) => {
  return bookList
    ? bookList.map((book) => (
        <div key={book.isbn} style={{ marginBottom: "24px" }}>
          <img src={book.image} alt={book.title} width={160} />
          <div>{book.title}</div>
          <div>{book.author}</div>
        </div>
      ))
    : null;
};

export default SearchResult;
