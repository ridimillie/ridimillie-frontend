import React from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { debounce } from "lodash";
import search from "./search";
import Image from "next/image";
import Loading from "../components/common/Loading";
import styled from "@emotion/styled";

const Styled = {
  MainWrapper: styled.main`
    @media (max-width: 768px) {
      margin-top: 126px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,
  Header: styled.div`
    @media (max-width: 768px) {
      position: fixed;
      top: 0;
      padding: 12px 0;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  `,
  Logo: styled.img`
    @media (max-width: 768px) {
      height: 20px;
    }
  `,
  MainCopy: styled.div`
    @media (max-width: 768px) {
      width: 220px;
      margin-bottom: 12px;
    }
  `,
  SubCopy: styled.div`
    @media (max-width: 768px) {
      width: 200px;
      margin-bottom: 52px;
    }
  `,
};

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
        <title>이책저책 - e-book 찾을땐</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Styled.MainWrapper>
        <Styled.Header>
          <Styled.Logo src="/assets/images/logo.svg" />
        </Styled.Header>
        <Styled.MainCopy>
          원하는 e-book이 어디에 있는지 이곳저곳 돌아다니지 마세요.
        </Styled.MainCopy>
        <Styled.SubCopy>
          이책저책은 모든 e-book 구독 플랫폼과 판매 플랫폼의 검색결과를
          제공합니다.
        </Styled.SubCopy>
        <form onSubmit={getSearchBook} style={{ marginBottom: "32px" }}>
          <input
            style={{ width: "320px", height: "32px" }}
            value={inputValue}
            onChange={onChange}
          />
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
      </Styled.MainWrapper>
    </div>
  );
}
