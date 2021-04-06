import styled from '@emotion/styled';
import Head from 'next/head';
import React from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import Loading from '../components/common/Loading';
import Link from 'next/link';
import FastSearchResult from '../components/search/FastSearchResult';
import SearchResult from '../components/search/SearchResult';
import { BookType } from '../types';
import RecentSearch from '../components/search/RecentSearch';
import SearchError from '../components/search/SearchError';
import NoResult from '../components/search/NoResult';
import Router, { useRouter } from 'next/router';
import { gtag } from '../lib/utils/GA';

const Styled = {
  Header: styled.div`
    background-color: #f7f2e4;
    z-index: 1;
    position: sticky;
    top: 0;
    padding: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
      padding: 12px 0;
    }
  `,

  Logo: styled.img`
    height: 26px;
    @media (max-width: 768px) {
      height: 20px;
    }
  `,

  Form: styled.form`
    z-index: 1;
    background-color: #f7f2e4;
    position: sticky;
    top: 91px;
    max-width: 960px;
    margin: 0 auto;
    height: 80px;
    padding: 15px 16px;
    @media (max-width: 768px) {
      height: 70px;
      width: 100%;
      top: 44px;
    }
  `,

  Input: styled.input`
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    border-bottom: 2px solid #2d3029;
    padding-left: 34px;
    font-size: 20px;
    font-weight: bold;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: #2d3029;
    caret-color: #ff8d78;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    border-radius: 0;

    background-image: url('/assets/icons/search.svg');
    background-position: 0px 11px;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
      font-size: 16px;
      background-position: 0px 6px;
      border-bottom: 1px solid #2d3029;
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #bbc2b1;
      font-weight: 400;
    }
  `,

  SearchResultWrapper: styled.div`
    width: 100%;
    padding: 0 16px;
    max-width: 960px;
    margin: 12px auto;
    @media (max-width: 768px) {
      margin-top: 0px;
    }
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
      const {
        data: { data },
      } = await axios.get(`https://ridimillie.ml/api?query=${inputValue.trim()}`);

      /** Json Server */
      // const { data } = await axios.get('http://localhost:3005/search');

      const bookList = data.map((book: BookType) => {
        const authorList: string[] = book.author.split('|');
        return {
          ...book,
          author: authorList.join(', '),
        };
      });

      setBookList(bookList);
      setSearchState(RESOLVED);
    } catch (error) {
      console.error(error);
      setSearchState(REJECTED);
    }
  };

  const deboundedAPI = React.useCallback(
    debounce(() => {
      getSearchBook();
      gtag('event', 'search', { event_category: 'search_result_page', event_label: 'search_book', value: inputValue });
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

  const onClickLogo = () => {
    gtag('event', 'home', { event_category: 'search_result_page', event_label: 'move_page', value: 'move_home_page' });
  };

  return (
    <div>
      <Head>
        <title>검색 :: 이책저책</title>
      </Head>
      <Styled.Header>
        <Link href='/'>
          <a onClick={onClickLogo}>
            <Styled.Logo src='/assets/images/logo.svg' />
          </a>
        </Link>
      </Styled.Header>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Input type='text' placeholder='읽고 싶은 e-book을 검색하세요' value={inputValue} onChange={handleChange} ref={inputRef} />
      </Styled.Form>
      <Styled.SearchResultWrapper>
        {searchState === IDLE && <RecentSearch />}
        {searchState === LOADING && <Loading />}
        {searchState === RESOLVED && bookList.length !== 0 && <FastSearchResult bookList={bookList} />}
        {/* {searchState === RESOLVED && bookList.length !== 0 && !isSearchCompleted && <FastSearchResult bookList={bookList} />} */}
        {/* {searchState === RESOLVED && bookList.length !== 0 && isSearchCompleted && <SearchResult bookList={bookList} />} */}
        {searchState === RESOLVED && bookList.length === 0 && <NoResult />}
        {searchState === REJECTED && <SearchError />}
      </Styled.SearchResultWrapper>
    </div>
  );
}

export default Search;
