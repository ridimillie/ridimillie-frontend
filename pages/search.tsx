import React from "react";

const bookList = [
  {
    id: 1,
    title: "플레이스픽",
    author: "유희수",
    price: "100,000원",
    publisher: "SOPT",
  },
  {
    id: 2,
    title: "플레이스픽",
    author: "유희수",
    price: "100,000원",
    publisher: "SOPT",
  },
  {
    id: 3,
    title: "플레이스픽",
    author: "유희수",
    price: "100,000원",
    publisher: "SOPT",
  },
];

function search() {
  return bookList.map((book) => (
    <div key={book.id}>
      <div>{book.title}</div>
      <div>{book.author}</div>
      <div>{book.price}</div>
      <div>{book.publisher}</div>
    </div>
  ));
}

export default search;
