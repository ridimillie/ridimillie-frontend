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
import withGoogleAnalytics from '../components/googleAnalytics/withGoogleAnalytics';
import { gtag } from '../lib/utils/GA';

const Styled = {
  Root: styled.div`
    /* &::before {
      content: '';
      background-image: url('/assets/images/home-background.gif');
      background-size: cover;
      opacity: 0.6;
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      background-color: #fff;
    } */
  `,

  Header: styled.div`
    background-color: #f7f2e4;
    z-index: 999;
    position: sticky;
    top: 0;
    padding: 12px 16px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 960px;
    margin: 0 auto;
    a {
      display: flex;
      align-items: center;
    }
  `,

  Logo: styled.img`
    height: 26px;
    @media (max-width: 768px) {
      height: 20px;
    }
  `,

  SearchIcon: styled.img`
    width: 26px;
    height: 26px;
    @media (max-width: 768px) {
      width: 24px;
      height: 24px;
    }
  `,

  BookContainer: styled.div`
    padding: 64px 32px;
    display: flex;
    border-bottom: 0.5px solid #d5dccd;
    max-width: 960px;
    margin: 32px auto;
    img {
      width: 120px;
      object-fit: contain;
      filter: drop-shadow(4px 4px 8px rgba(146, 154, 136, 0.15));
    }
    @media (max-width: 768px) {
      padding: 24px 0;
      margin: 48px 32px 0;
      img {
        width: 80px;
        filter: drop-shadow(4px 4px 8px rgba(146, 154, 136, 0.15));
      }
    }
  `,

  BookInfo: styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 24px;
  `,

  BookTitle: styled.div`
    font-size: 28px;
    font-weight: bold;
    color: #2d3029;
    padding-bottom: 16px;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  `,

  BookDescription: styled.div`
    font-size: 18px;
    padding-bottom: 4px;
    color: #929a88;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  `,

  Contents: styled.div`
    max-width: 960px;
    padding: 0 16px;
    margin: 24px auto;
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `,

  PlatformContainer: styled.div`
    width: 100%;
    margin-top: 24px;
    padding: 0 16px;
    & > img {
      width: 56px;
      padding-bottom: 16px;
    }
    @media (max-width: 768px) {
      & > img {
        width: 35px;
      }
    }
  `,
};

type ServiceType = {
  platform: string;
  price: number;
  redirectURL: string;
  titleName: string;
  serviceType: 'purchase' | 'subscribe';
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
        } = await axios.get(`https://ridimillie.ml/api?query=${isbn}`);

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

    isbn && getBookInfo();
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
        } = await axios.get(`https://ridimillie.ml/api/crawling?title=${book.data?.title}&bid=${book.data?.bid}`);

        console.log(`크롤러`, data);

        /** Json Server */
        // const { data } = await axios.get('http://localhost:3005/crawler');

        setBookPlatform({
          purchaseBooks: data.purchaseBooks.map((purchaseBook: any) => ({ ...purchaseBook, serviceType: 'purchase' })),
          subscribedBooks: data.subscribedBooks.map((subscribedBook: any) => ({
            ...subscribedBook,
            serviceType: 'subscribe',
            titleName: data?.purchaseBooks[0]?.titleName,
          })),
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

  const onClickHeader = (evt: React.MouseEvent) => {
    // @ts-ignore
    switch (evt.target.alt) {
      case 'back':
        gtag('event', 'back', { event_category: 'detail_page' });
        break;
      case 'home':
        gtag('event', 'home', { event_category: 'detail_page' });
        break;
      case 'search':
        gtag('event', 'search', { event_category: 'detail_page' });
        break;
    }
  };
  const onClickPlatform = (service: ServiceType) => {
    gtag('event', service.serviceType, {
      event_category: 'detail_page',
      event_label: service.platform + '-' + service.titleName,
    });
  };

  const Component = (
    <Styled.Root>
      <Head>
        <title>{book.data?.title} :: 이책저책</title>
      </Head>
      <Styled.Header onClick={onClickHeader}>
        <Link href='/search'>
          <a>
            <Styled.SearchIcon src='/assets/icons/arrow-left.svg' alt='back' />
          </a>
        </Link>
        <Link href='/'>
          <a>
            <Styled.Logo src='/assets/images/logo.svg' alt='home' />
          </a>
        </Link>
        <Link href='/search'>
          <a>
            <Styled.SearchIcon src='/assets/icons/search.svg' alt='search' />
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
          {bookPlatform.isLoading ? (
            <Loading text='책 정보를 가져오는 중입니다' />
          ) : bookPlatform.subscribedBooks.length !== 0 ? (
            bookPlatform.subscribedBooks.map((service: ServiceType, index) => (
              <div key={index} onClick={() => onClickPlatform(service)}>
                <PlatformButton platform={service.platform} price={service.price} url={service.redirectURL} />
              </div>
            ))
          ) : (
            <div>결과가 없습니다.</div>
          )}
        </Styled.PlatformContainer>
        <Styled.PlatformContainer>
          <img src='/assets/images/purchase.svg' alt='구매' />
          {bookPlatform.isLoading ? (
            <Loading text='책 정보를 가져오는 중입니다' />
          ) : bookPlatform.purchaseBooks.length !== 0 ? (
            bookPlatform.purchaseBooks.map((service: ServiceType, index) => (
              <div key={index} onClick={() => onClickPlatform(service)}>
                <PlatformButton platform={service.platform} price={service.price} url={service.redirectURL} />
              </div>
            ))
          ) : (
            <div>결과가 없습니다.</div>
          )}
        </Styled.PlatformContainer>
      </Styled.Contents>
    </Styled.Root>
  );
  return withGoogleAnalytics(Component);
}

export default Book;
