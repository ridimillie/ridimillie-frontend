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
  InputWrapper: styled.div`
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
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.04em;
    caret-color: #ff8d78;

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
    margin-top: 158px;
    width: 100%;
    padding: 0 16px;
  `,
};

function search() {
  const [inputValue, setInputValue] = React.useState<string>('');
  const [bookList, setBookList] = React.useState<Array<BookType> | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  console.log('isLoading', isLoading);

  const getSearchBook = async () => {
    console.log('getSearchBook');
    setIsLoading(true);

    try {
      const {
        data: { data },
      } = await axios.get(`https://sopt27.ga/apis?query=${inputValue}`);

      console.log(data);
      setBookList(data);
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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  React.useEffect(() => {
    if (inputValue) {
      setIsLoading(true);
      deboundedAPI();
    }

    return deboundedAPI.cancel;
  }, [inputValue]);

  return (
    <div>
      <Head>
        <title>검색 | 이책저책 </title>
        <link rel='icon' href='/favicon.ico' />
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
          autoComplete='off'
          value={inputValue}
          onChange={onChange}
        />
      </Styled.InputWrapper>
      <Styled.SearchResultWrapper>
        {isLoading ? <Loading /> : <SearchResult bookList={bookList} />}
      </Styled.SearchResultWrapper>
    </div>
  );
}

export default search;
