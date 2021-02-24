import React from 'react';
import { BookType } from '../types';
import { useRouter } from 'next/router';
import axios from 'axios';
import styled from '@emotion/styled';
import Link from 'next/link';
import { LoadingOutlined } from '@ant-design/icons';
import PlatformButton from '../components/book/PlatformButton';
import Head from 'next/head';
import Loading from '../components/common/Loading';

const Styled = {
  Header: styled.div`
    background-color: #f7f2e4;
    z-index: 999;
    @media (max-width: 768px) {
      position: fixed;
      top: 0;
      padding: 12px 16px;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    a {
      display: flex;
      align-items: center;
    }
  `,

  Logo: styled.img`
    @media (max-width: 768px) {
      width: 66px;
    }
  `,

  SearchIcon: styled.img`
    width: 24px;
    height: 24px;
  `,

  BookContainer: styled.div`
    margin: 48px 32px 0;
    padding: 24px 0;
    display: flex;
    border-bottom: 0.5px solid #bbc2b1;
    img {
      width: 80px;
      object-fit: contain;
      filter: drop-shadow(4px 4px 8px rgba(146, 154, 136, 0.15));
    }
  `,

  BookInfo: styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 24px;
  `,

  BookTitle: styled.div`
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 16px;
  `,

  BookDescription: styled.div`
    font-size: 14px;
    padding-bottom: 4px;
    color: #929a88;
  `,

  Contents: styled.div`
    margin: 24px 32px;
  `,

  PlatformContainer: styled.div`
    margin-top: 24px;
    & > img {
      width: 35px;
    }
  `,
};

type ServiceType = {
  platform: string;
  price: number;
  redirectURL: string;
};

function Book() {
  const [book, setBook] = React.useState<{ data: BookType | null; isLoading: boolean }>({
    data: null,
    isLoading: false,
  });
  const [bookPlatform, setBookPlatform] = React.useState({
    purchaseBooks: [],
    subscribedBooks: [],
    isLoading: false,
  });

  const router = useRouter();
  const { isbn } = router.query;

  React.useEffect(() => {
    const getBookInfo = async () => {
      setBook({ ...book, isLoading: true });

      try {
        /** Real Server */
        const {
          data: { data },
        } = await axios.get(`http://15.164.84.113:3000/api?query=${isbn}`);

        /** Json Server */
        // const { data } = await axios.get('http://localhost:3005/book');

        const bookList = data.map((book: BookType) => {
          const authorList: string[] = book.author.split('|');
          return {
            ...book,
            author: authorList.join(', '),
          };
        });

        setBook({ data: bookList[0], isLoading: false });
      } catch (error) {
        setBook({ data: null, isLoading: false });

        console.error(error);
      }
    };

    getBookInfo();
  }, [isbn]);

  React.useEffect(() => {
    const bookPlatformCrawler = async () => {
      setBookPlatform({
        ...bookPlatform,
        isLoading: true,
      });

      try {
        /** Real Server */
        const {
          data: { data },
        } = await axios.get(`http://15.164.84.113:3000/api/crawling?title=${book.data?.title}&bid=${book.data?.bid}`);

        /** Json Server */
        // const { data } = await axios.get('http://localhost:3005/crawler');

        setBookPlatform({
          purchaseBooks: data.purchaseBooks,
          subscribedBooks: data.subscribedBooks,
          isLoading: false,
        });
      } catch (error) {
        setBookPlatform({
          purchaseBooks: [],
          subscribedBooks: [],
          isLoading: false,
        });

        console.error(error);
      }
    };
    book.data && bookPlatformCrawler();
  }, [book.data]);

  return (
    <div>
      <Head>
        <title>{book.data?.title} :: 이책저책</title>
      </Head>
      <Styled.Header>
        <Link href='/'>
          <a>
            <Styled.Logo src='/assets/images/logo.svg' />
          </a>
        </Link>
        <Link href='/search'>
          <a>
            <Styled.SearchIcon src='/assets/icons/search.svg' />
          </a>
        </Link>
      </Styled.Header>
      {book.isLoading ? (
        <Loading />
      ) : (
        book.data && (
          <Styled.BookContainer>
            <img src={book.data.image} alt={book.data.title} />
            <Styled.BookInfo>
              <Styled.BookTitle>{book.data.title}</Styled.BookTitle>
              <Styled.BookDescription>
                저자 <strong>{book.data.author}</strong>
              </Styled.BookDescription>
              <Styled.BookDescription>
                출판{' '}
                <strong>
                  {book.data.publisher}, {book.data.pubdate.slice(0, 4)}
                </strong>
              </Styled.BookDescription>
            </Styled.BookInfo>
          </Styled.BookContainer>
        )
      )}
      <Styled.Contents>
        <Styled.PlatformContainer>
          <img src='/assets/images/subscribe.svg' alt='구독' />
          {bookPlatform.subscribedBooks.map((service: ServiceType, index) => (
            <PlatformButton key={index} platform={service.platform} price={service.price} url={service.redirectURL} />
          ))}
        </Styled.PlatformContainer>
        <Styled.PlatformContainer>
          <img src='/assets/images/purchase.svg' alt='구매' />
          {bookPlatform.purchaseBooks.map((service: ServiceType, index) => (
            <PlatformButton key={index} platform={service.platform} price={service.price} url={service.redirectURL} />
          ))}
        </Styled.PlatformContainer>
      </Styled.Contents>
    </div>
  );
}

export default Book;
