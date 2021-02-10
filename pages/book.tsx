import React from 'react';
import { BookType } from '../types';
import { useRouter } from 'next/router';
import axios from 'axios';
import styled from '@emotion/styled';
import Link from 'next/link';
import Loading from '../components/common/Loading';
import EbookLinkButton from '../components/book/EbookLinkButton';

const Styled = {
  Header: styled.div`
    background-color: #f7f2e4;

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
  Ebooks: styled.div`
    margin-top: 24px;
  `,
};

function Book() {
  const [book, setBook] = React.useState<BookType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const router = useRouter();
  const { isbn } = router.query;

  React.useEffect(() => {
    const getSearchBook = async () => {
      setIsLoading(true);

      try {
        const {
          data: { data },
        } = await axios.get(`https://sopt27.ga/api?query=${isbn}`);

        setBook(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    getSearchBook();
  }, [isbn]);

  return (
    <div>
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
      {isLoading ? (
        <Loading />
      ) : (
        book[0] && (
          <Styled.BookContainer>
            <img src={book[0]?.image} alt={book[0].title} />
            <Styled.BookInfo>
              <Styled.BookTitle>{book[0].title}</Styled.BookTitle>
              <Styled.BookDescription>
                저자 <strong>{book[0].author}</strong>
              </Styled.BookDescription>
              <Styled.BookDescription>
                출판{' '}
                <strong>
                  {book[0].publisher}, {book[0].pubdate.slice(0, 4)}
                </strong>
              </Styled.BookDescription>
            </Styled.BookInfo>
          </Styled.BookContainer>
        )
      )}
      <Styled.Contents>
        <Styled.Ebooks>
          <div style={{ marginBottom: '8px' }}>구독</div>
          <EbookLinkButton />
          <EbookLinkButton />
          <EbookLinkButton />
        </Styled.Ebooks>
        <Styled.Ebooks>
          <div style={{ marginBottom: '8px' }}>구매</div>
          <EbookLinkButton />
          <EbookLinkButton />
          <EbookLinkButton />
        </Styled.Ebooks>
      </Styled.Contents>
    </div>
  );
}

export default Book;
