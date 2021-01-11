import React from "react"
import styled from "styled-components"

const IntroWork = () => {
  return (
    <IntroContainer>
      <IntroBg />
      <IntroContent>
        <IntroItems>
          <IntroH1>We clarify brands and simplify the complex.</IntroH1>
        </IntroItems>
      </IntroContent>
    </IntroContainer>
  )
}

export default IntroWork

const IntroContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 5rem;
  position: relative;
  color: #fff;

  @media screen and (max-width: 768px) {
    padding-top: 80px;
    justify-content: center;
  }
`

const IntroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    padding-top: 80px;
    justify-content: center;
  }
`

const IntroContent = styled.div`
  z-index: 3;
  padding: 2rem calc((70vh - 1300px) / 2);

  @media screen and (max-width: 768px) {
    height: calc(40vh - 80px);
  }
`

const IntroItems = styled.div`
  align-items: start;
  text-align: start;
  width: 70%;
  max-width: 1140px;
  max-height: 100%;
  color: #000000;
  line-height: 1.1;

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
