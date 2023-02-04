import React from "react"
import styled from "styled-components"

const IntroManifesto = () => {
  return (
    <IntroContainer>
      <IntroContent
        data-sal="slide-left"
        data-sal-duration="700"
        data-sal-delay="500"
        data-sal-easing="ease"
      >
        <Description>Manifesto</Description>
        <IntroItems>
          <IntroH1>We adhere to a strict process but are soft-hearted human beings.</IntroH1>
        </IntroItems>
      </IntroContent>
    </IntroContainer>
  )
}

export default IntroManifesto

/// *********************************************************
/// Styled Components
///
const IntroContainer = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  color: #fff;
  padding: 6rem 0;

  @media screen and (max-width: 1140px) {
    padding: 6rem 2rem;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-top: 1rem;
    padding: 2rem 0;
  }
`

const IntroContent = styled.div`
  z-index: 3;
  max-width: 1140px;
  margin: 0 auto;
  width: 95%;
  text-align: start;

  @media screen and (max-width: 1140px) {
    padding: 1rem 0;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }
`

const IntroItems = styled.div`
  align-items: start;
  text-align: start;
  width: 60%;
  max-height: 100%;
  color: #000000;
  line-height: 1.1;

  @media screen and (max-width: 1140px) {
    width: 65%;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 616px) {
    width: 85%;
  }
  @media screen and (max-width: 565px) {
    width: 100%;
  }
`

const IntroH1 = styled.h1`
  font-size: clamp(1.6rem, 5vw, 3.5rem);
  font-weight: bold;
  letter-spacing: -1px;
  margin-top: 0;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    font-size: clamp(2.5rem, 6vw, 4rem);
  }
`

const Description = styled.p`
  font-size: clamp(2rem, 3vw, 1.2rem);
  font-weight: 300;
  margin-bottom: 30px;
  color: #424242;
`