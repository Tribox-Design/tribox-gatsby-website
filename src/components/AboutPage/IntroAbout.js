import React from 'react';
import styled from 'styled-components';

const IntroAbout = () => {
  return (
    <IntroContainer>
      <IntroContent>
        <IntroItems>
          <IntroH1>A local branding agency for Local Brands and SMEs. We promote brand growth.</IntroH1>
        </IntroItems>
      </IntroContent>
    </IntroContainer>
  )
}

export default IntroAbout;

const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #fff;

  @media screen and (max-width: 768px) {
    padding-top: 80px;
    justify-content: center;
  }
`

const IntroContent = styled.div`
  z-index: 3;
  width: 87%;
  max-width: 1140px;
  padding: 4rem 0;

  @media screen and (max-width: 768px) {
    height: calc(40vh - 80px);
  }
`

const IntroItems = styled.div`
  align-items: start;
  text-align: start;
  max-width: 1140px;
  max-height: 100%;
  color: #212121;
  line-height: 1.1;

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    max-height: 80%;
  }
`

const IntroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  letter-spacing: 3px;
  font-weight: bold;
`