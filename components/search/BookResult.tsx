import styled from '@emotion/styled';
import React from 'react';
import { BookType } from '../../types';
import Router from 'next/router';

const Styled = {
  BookWrapper: styled.div`
    width: 100%;
    background-color: white;
    box-shadow: 4px 4px 6px rgba(146, 154, 136, 0.05);
    border-radius: 10px;
    padding: 16px;
    margin: 16px 0;
  `,
  InfoWrapper: styled.div`
    display: flex;
  `,
  BookImg: styled.img`
    width: 85px;
    height: 127px;
    box-shadow: 1px 2px 4px #ddd;
  `,
  Info: styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px 0 8px 24px;
    flex-grow: 1;
  `,
  Title: styled.div`
    margin-bottom: 8px;
    color: #ff8d78;
    font-weight: 700;
    font-size: 14px;
  `,
  Description: styled.div`
    font-weight: 400;
    font-size: 12px;
    color: #929a88;
    padding: 2px 0;
    display: flex;
  `,
  DescBold: styled.div`
    font-weight: 700;
  `,
  Empty: styled.div`
    flex: 1;
  `,
  PlatformButton: styled.button`
    font-size: 12px;
    text-align: center;
    padding: 8px 0;
    border: solid 1px #000000;
    border-radius: 4px;
    background: none;
    outline: 0;
    z-index: 10;
  `,
  ArrowImg: styled.img<{ moreInfo: boolean }>`
    transform: rotate(${(props) => (props.moreInfo ? '0.5turn' : '0turn')});
  `,
  MoreInfoWrapper: styled.div<{ show: boolean }>`
    display: ${(props) => (props.show ? 'block' : 'none')};
    width: 100%;
    margin: 16px 0;
    padding: 0 12px;
  `,
  PlatformWrapper: styled.div`
    display: flex;
    align-items: flex-start;
    margin: 16px 0;
  `,
  PlatformList: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 16px;
  `,
  PlatformInfo: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  `,
  PlatformLogo: styled.img`
    width: 40px;
    height: 24px;
  `,
};

interface Props {
  book: BookType;
}

function BookResult({ book }: Props) {
  const [moreInfo, setMoreInfo] = React.useState<boolean>(false);
  const removeHTML = (text: string) => {
    text = text.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi, '');
    return text;
  };

  const handleClick = (isbn: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    console.log('router');

    Router.push(`/book?isbn=${isbn}`);
  };

  const onClickButton = () => {
    setMoreInfo(!moreInfo);
    console.log('button');
  };

  return (
    <Styled.BookWrapper>
      <Styled.InfoWrapper>
        <Styled.BookImg src={book.image} alt={book.title} />
        <Styled.Info>
          <Styled.Title>{book.title}</Styled.Title>
          <Styled.Description>
            저자 &nbsp; <Styled.DescBold>{book.author}</Styled.DescBold>
          </Styled.Description>
          <Styled.Description>
            출판 &nbsp; <Styled.DescBold>{book.publisher}</Styled.DescBold>
          </Styled.Description>
          <Styled.Empty />
          <Styled.PlatformButton onClick={onClickButton}>
            구독/구매 플랫폼 모아보기 &nbsp;
            <Styled.ArrowImg src='/assets/icons/down-arrow.svg' moreInfo={moreInfo} />
          </Styled.PlatformButton>
        </Styled.Info>
      </Styled.InfoWrapper>
      <Styled.MoreInfoWrapper show={moreInfo}>
        <Styled.PlatformWrapper>
          <img style={{ width: '32px', height: '26px' }} src='/assets/images/purchase.svg' />
          <Styled.PlatformList>
            <Styled.PlatformInfo>
              <Styled.PlatformLogo
                style={{ padding: '0 8px' }}
                src='/assets/images/millie-logo.png'
              />
              밀리의서재<Styled.Empty></Styled.Empty>9,900원
            </Styled.PlatformInfo>
          </Styled.PlatformList>
        </Styled.PlatformWrapper>
        <hr style={{ margin: 0 }} />
        <Styled.PlatformWrapper>
          <img style={{ width: '32px', height: '26px' }} src='/assets/images/subscribe.svg'></img>
          <Styled.PlatformList>
            <Styled.PlatformInfo>
              <Styled.PlatformLogo
                style={{ padding: '0 8px' }}
                src='/assets/images/millie-logo.png'
              />
              밀리의서재<Styled.Empty></Styled.Empty>9,900원
            </Styled.PlatformInfo>
            <Styled.PlatformInfo>
              <Styled.PlatformLogo
                style={{ padding: '0 8px' }}
                src='/assets/images/ridiselect-logo.png'
              />
              RIDI Select<Styled.Empty></Styled.Empty>10,900원
            </Styled.PlatformInfo>
            <Styled.PlatformInfo>
              <Styled.PlatformLogo
                style={{ padding: '0 8px' }}
                src='/assets/images/ridiselect-logo.png'
              />
              RIDI Select<Styled.Empty></Styled.Empty>10,900원
            </Styled.PlatformInfo>
          </Styled.PlatformList>
        </Styled.PlatformWrapper>
      </Styled.MoreInfoWrapper>
    </Styled.BookWrapper>
  );
}

export default BookResult;
