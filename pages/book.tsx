import React from 'react';
import { BookType } from '../types';
import { useRouter } from 'next/router';
import axios from 'axios';

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
        } = await axios.get(`https://sopt27.ga/apis?query=${isbn}`);

        setBook(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    getSearchBook();
  });

  return <h1>Book</h1>;
}

export default Book;
