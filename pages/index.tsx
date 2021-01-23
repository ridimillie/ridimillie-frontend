import React from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { debounce } from "lodash";
import search from "./search";
import Image from "next/image";
import Loading from "../components/common/Loading";

type BookType = {
  title: string;
  author: string;
  description: string;
  image: string;
  isbn: number;
  link: string;
};

export default function Home() {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [searchResult, setSearchResult] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  console.log("isLoading", isLoading);

  const getSearchBook = async () => {
    console.log("getSearchBook");
    setIsLoading(true);

    try {
      const { data } = await axios.get(
        `https://sopt27.ga/apis?query=${inputValue}`
      );

      console.log(data);
      setSearchResult(data.refinedBooks);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const deboundedAPI = React.useCallback(
    debounce(() => {
      getSearchBook();
      setIsLoading(false);
    }, 1000),
    [inputValue]
  );

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  React.useEffect(() => {
    console.log("useEffect");

    if (inputValue) {
      setIsLoading(true);
      deboundedAPI();
    }

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
        <form onSubmit={getSearchBook} style={{ marginBottom: "32px" }}>
          <input
            style={{ width: "320px", height: "32px" }}
            value={inputValue}
            onChange={onChange}
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
        {isLoading ? (
          <Loading />
        ) : (
          searchResult &&
          searchResult.map((book: BookType) => {
            return (
              <div key={book.isbn} style={{ marginBottom: "24px" }}>
                <img src={book.image} alt={book.title} width={160} />
                <div>{book.title}</div>
                <div>{book.author}</div>
                {/* <div>{book.description}</div> */}
                {/* <div>{book.isbn}</div> */}
                <a href={book.link}>Link</a>
              </div>
            );
          })
        )}
      </main>
    </div>
  );
}
