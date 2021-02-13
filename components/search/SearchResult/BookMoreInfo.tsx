import React from 'react';
import styled from '@emotion/styled';

const Styled = {
  MoreInfoWrapper: styled.div`
    width: 100%;
    margin-top: 20px;
    /* padding: 0 12px; */
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
    margin: 8px 0px;
  `,
  PlatformLogo: styled.img`
    width: 40px;
    height: 24px;
  `,
  Empty: styled.div`
    flex: 1;
  `,
};

function BookMoreInfo() {
  return (
    <Styled.MoreInfoWrapper>
      <Styled.PlatformWrapper>
        <img
          style={{ width: '32px', height: '26px', margin: '8px 0' }}
          src='/assets/images/subscribe.svg'
        />
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
        <img
          style={{ width: '32px', height: '26px', margin: '8px 0' }}
          src='/assets/images/purchase.svg'></img>
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
  );
}

export default BookMoreInfo;
