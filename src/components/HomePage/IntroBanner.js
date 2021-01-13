import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button'

const IntroBanner = () => {
  return (
    <IntroContainer>
      <IntroBg />
      <IntroContent>
        <IntroItems>
          <IntroH1>We clarify brands and simplify the complex.</IntroH1>
          <IntroP>A local branding agency for Local Brands and SMEs, Tribox Design promote brand growth.</IntroP>
          <IntroButton>
            <Button round="true" to="/about" big="true">More about us</Button>
          </IntroButton>
        </IntroItems>
      </IntroContent>
    </IntroContainer>
  )
}

export default IntroBanner;

const IntroContainer = styled.div`
  background: #FC000D;
  display: flex;
  justify-content: start;
  align-items: center;
  height: 75vh;
  padding-left: 5rem;
  position: relative;
  margin-top: -80px;
  padding-top: 20px;
  color: #fff;

  @media screen and (max-width: 768px) {
    padding-left: 0;
    padding-top: 80px;
    justify-content: center;
    align-items: center;
    height: 50vh;
  }
`

const IntroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70vh;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    padding-top: 80px;
    justify-content: center;
    align-items: center;
    height: 50vh;
  }
`

const IntroContent = styled.div`
  z-index: 3;
  height: calc(70vh - 80px);
  padding: 2rem calc((70vh - 1300px) / 2);

  @media screen and (max-width: 768px) {
    align-items: center;
    height: calc(40vh - 80px);
  }
`

const IntroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: start;
  height: 60vh;
  width: 70%;
  max-width: 1140px;
  max-height: 100%;
  color: #fff;
  line-height: 1.1;
  ${'' /* font-weight: bold; */}

  @media screen and (max-width: 1110px) {
    width: 81%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-height: 80%;
  }
`

const IntroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  letter-spacing: 3px;
  padding: 0 1rem;
  font-weight: bold;
`

const IntroP = styled.p`
  font-size: clamp(1rem, 3vw, 2rem);
  line-height: 1.4;
  margin-bottom: 0.4rem;
  padding: 1.5rem 1rem;
`

const IntroButton = styled.div`
  padding-top: 1.5rem;
  padding-left: 1rem;
  font-weight: bold;
  align-items: center;
  display: flex;

  @media screen and (max-width: 768px) {
    padding-top: 0.5rem;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`