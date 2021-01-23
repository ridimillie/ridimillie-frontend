import React from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { debounce } from "lodash";
import search from "./search";
import Image from "next/image";

type BookType = {
  title: string;
  author: string;
  description: string;
  image: string;
  isbn: number;
};

export default function Home() {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [searchResult, setSearchResult] = React.useState(null);

  const getSearchBook = async () => {
    console.log("getSearchBook");
    try {
      if (inputValue) {
        const { data } = await axios.get(
          `https://sopt27.ga/apis?query=${inputValue}`
        );
        console.log(data);
        setSearchResult(data.refinedBooks);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deboundedAPI = React.useCallback(
    debounce(() => getSearchBook(), 2000),
    [inputValue]
  );

  const onDebounceChange = (e) => {
    setInputValue(e.target.value);
  };

  React.useEffect(() => {
    console.log("useEffect");
    deboundedAPI();
    return deboundedAPI.cancel;
  }, [inputValue]);

  return (
    <div>
      <Head>
        <title>리디밀리 - E북 찾을땐</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>E-book을 찾아보세요!</h1>
        <form onSubmit={getSearchBook}>
          {/* <form> */}
          <input
            style={{ width: "320px", height: "32px" }}
            value={inputValue}
            onChange={onDebounceChange}
          />
          {/* <Link href="/search">
            <a> */}
          <button
            type="submit"
            style={{
              height: "32px",
              backgroundColor: "skyblue",
              border: "none",
            }}
          >
            검색하기
          </button>
          {/* </a>
          </Link> */}
        </form>
        {searchResult &&
          searchResult.map((book: BookType) => {
            return (
              <div style={{ backgroundColor: "yellow" }}>
                <img
                  src={book.image}
                  alt={book.title}
                  width={500}
                  height={500}
                />
                <div>{book.title}</div>
                <div>{book.author}</div>
              </div>
            );
          })}
      </main>
    </div>
  );
}
