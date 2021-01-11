import React from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";

export default function Home() {
  const [value, setValue] = React.useState("");

  const onChangeValue = React.useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = React.useCallback(() => {
    //
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Head>
        <title>리디밀리 - E북 찾을땐</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>E-book을 찾아보세요!</h1>
        <form onSubmit={getSearchBook}>
          <input
            style={{ width: "320px", height: "32px" }}
            value={value}
            onChange={onChangeValue}
          />
          <Link href="/search">
            <a>
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
            </a>
          </Link>
        </form>
      </main>
    </div>
  );
}
