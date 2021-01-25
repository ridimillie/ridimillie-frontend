import React from 'react';
import { BookType } from '../types';
import { useRouter } from 'next/router';
import axios from 'axios';
import styled from '@emotion/styled';
import Link from 'next/link';
import Loading from '../components/common/Loading';

const Styled = {
  Header: styled.div`
    background-color: #f7f2e4;

    @media (max-width: 768px) {
      position: fixed;
      top: 0;
      padding: 12px 0;
      width: 100%;
      display: flex;
    }
  `,
  Logo: styled.img`
    @media (max-width: 768px) {
      height: 20px;
    }
  `,
  BookContainer: styled.div`
    margin-top: 80px;
  `,
};

function Book() {
  const [book, setBook] = React.useState<BookType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const router = useRouter();
  const { isbn } = router.query;
  console.log('isbn', isbn);

  React.useEffect(() => {
    const getSearchBook = async () => {
      setIsLoading(true);

      try {
        const {
          data: { data },
        } = await axios.get(`https://sopt27.ga/apis?query=${isbn}`);

        setBook(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    getSearchBook();
  }, []);

  console.log('book[0] :>> ', book[0]);

  return (
    <div>
      <Styled.Header>
        <Link href='/'>
          <a>
            <Styled.Logo src='/assets/images/logo.svg' />
          </a>
        </Link>
      </Styled.Header>
      {book[0] && (
        <Styled.BookContainer>
          <img src={book[0]?.image} alt={book[0].title} />
          <div>{book[0].title}</div>
          <div>{`저자 ${book[0].author}`}</div>
          <div>{`출판 ${book[0].publisher} ${book[0].pubdate.slice(0, 4)}`}</div>
        </Styled.BookContainer>
      )}
    </div>
  );
}

export default Book;
