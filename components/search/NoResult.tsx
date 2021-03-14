import React from 'react';
import style from '@emotion/styled';
import styled from '@emotion/styled';

const Styled = {
  Root: styled.div`
    letter-spacing: -0.02em;
    padding-left: 12px;
  `,
};

function NoResult() {
  return <Styled.Root>도서 검색 결과가 없습니다.</Styled.Root>;
}

export default NoResult;
