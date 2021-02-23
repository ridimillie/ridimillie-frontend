import styled from '@emotion/styled';
import Head from 'next/head';
import React from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import Loading from '../components/common/Loading';
import Link from 'next/link';
import FastSearchResult from '../components/search/FastSearchResult';
import SearchResult from '../components/search/SearchResult';
import Image from 'next/image';
import { BookType } from '../types';
import RecentSearch from '../components/search/RecentSearch';
import SearchError from '../components/search/SearchError';
import NoResult from '../components/search/NoResult';
import Router, { useRouter } from 'next/router';

const Styled = {
  Header: styled.div`
    background-color: #f7f2e4;
    z-index: 1;
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
  Form: styled.form`
    z-index: 1;
    background-color: #f7f2e4;
    position: fixed;
    top: 44px;
    width: 100%;
    height: 70px;
    padding: 15px 16px;
  `,
  Input: styled.input`
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    border-bottom: 1.5px solid #000000;
    padding-left: 34px;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.04em;
    caret-color: #ff8d78;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    border-radius: 0;

    background-image: url('/assets/icons/search.svg');
    background-position: 0px 6px;
    background-repeat: no-repeat;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #bbc2b1;
    }
  `,
  SearchResultWrapper: styled.div`
    margin-top: 120px;
    width: 100%;
    padding: 0 16px;
  `,
};

/** Search State */
const IDLE = 'idle';
const LOADING = 'loading';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function Search() {
  const [inputValue, setInputValue] = React.useState<string>('');
  const [bookList, setBookList] = React.useState<BookType[]>([]);
  const [searchState, setSearchState] = React.useState<string>(IDLE);
  const [isSearchCompleted, setIsSearchCompleted] = React.useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const router = useRouter();
  const { q } = router.query;

  const getSearchBook = async () => {
    setSearchState(LOADING);

    try {
      /** Real Server */
      // const {
      //   data: { data },
      // } = await axios.get(`http://15.164.84.113:3000/api?query=${inputValue.trim()}`);

      /** Json Server */
      const { data } = await axios.get('http://localhost:3005/search');

      console.log('data', data);

      setBookList(data);
      setSearchState(RESOLVED);
    } catch (error) {
      console.error(error);
      setSearchState(REJECTED);
    }
  };

  const deboundedAPI = React.useCallback(
    debounce(() => {
      getSearchBook();
    }, 800),
    [inputValue]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearchCompleted(false);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Router.push(`/search?q=${inputValue.trim()}`);
    setIsSearchCompleted(true);
  };

  React.useEffect(() => {
    inputRef.current?.focus();

    if (inputValue !== '') {
      setSearchState(LOADING);
      deboundedAPI();
    } else {
      setSearchState('idle');
    }

    return deboundedAPI.cancel;
  }, [inputValue]);

  return (
    <div>
      <Head>
        <title>검색 :: 이책저책</title>
      </Head>
      <Styled.Header>
        <Link href='/'>
          <a>
            <Styled.Logo src='/assets/images/logo.svg' />
          </a>
        </Link>
      </Styled.Header>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Input
          type='text'
          placeholder='읽고 싶은 e-book을 검색하세요'
          value={inputValue}
          onChange={handleChange}
          ref={inputRef}
        />
      </Styled.Form>
      <Styled.SearchResultWrapper>
        {searchState === IDLE && <RecentSearch />}
        {searchState === LOADING && <Loading />}
        {searchState === RESOLVED && bookList.length !== 0 && !isSearchCompleted && (
          <FastSearchResult bookList={bookList} />
        )}
        {searchState === RESOLVED && bookList.length !== 0 && isSearchCompleted && (
          <SearchResult bookList={bookList} />
        )}
        {searchState === RESOLVED && bookList.length === 0 && <NoResult />}
        {searchState === REJECTED && <SearchError />}
      </Styled.SearchResultWrapper>
    </div>
  );
}

export default Search;
