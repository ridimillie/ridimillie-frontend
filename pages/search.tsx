import styled from '@emotion/styled';
import Head from 'next/head';
import React from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import Loading from '../components/common/Loading';
import Link from 'next/link';
import SearchResult from '../components/search/SearchResult';
import Image from 'next/image';
import { BookType } from '../types';
import RecentSearch from '../components/search/RecentSearch';
import SearchError from '../components/search/SearchError';
import NoResult from '../components/search/NoResult';

const Styled = {
  Header: styled.div`
    background-color: #f7f2e4;

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
  InputWrapper: styled.form`
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
    border-bottom: 2px solid #000000;
    padding-left: 34px;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.04em;
    caret-color: #ff8d78;
    -webkit-appearance: none;
    border-radius: 0;
    -webkit-border-radius: 0;

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

/** searchState */
const IDLE = 'idle';
const LOADING = 'loading';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function Search() {
  const [inputValue, setInputValue] = React.useState<string>('');
  const [bookList, setBookList] = React.useState<BookType[]>([]);
  const [searchState, setSearchState] = React.useState<string>(IDLE);

  console.log('searchState', searchState);

  const getSearchBook = async () => {
    console.log('getSearchBook');
    setSearchState(LOADING);

    try {
      const {
        data: { data },
      } = await axios.get(`https://sopt27.ga/apis?query=${inputValue}`);

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
    }, 1000),
    [inputValue]
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  React.useEffect(() => {
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
        <title>검색 | 이책저책 </title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width'
        />
      </Head>
      <Styled.Header>
        <Link href='/'>
          <a>
            <Styled.Logo src='/assets/images/logo.svg' />
          </a>
        </Link>
      </Styled.Header>
      <Styled.InputWrapper>
        <Styled.Input
          type='text'
          placeholder='읽고 싶은 e-book을 검색하세요'
          value={inputValue}
          onChange={onChange}
        />
      </Styled.InputWrapper>
      <Styled.SearchResultWrapper>
        {/* {searchState === IDLE && <RecentSearch />}
        {searchState === LOADING && <Loading />}
        {searchState === RESOLVED && bookList.length !== 0 && <SearchResult bookList={bookList} />}
        {searchState === RESOLVED && bookList.length === 0 && <NoResult />}
        {searchState === REJECTED && <SearchError />} */}
        <Loading />
      </Styled.SearchResultWrapper>
    </div>
  );
}

export default Search;
