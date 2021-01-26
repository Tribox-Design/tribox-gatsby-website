import React from "react"
import styled from "styled-components"

const IntroWork = () => {
  return (
    <IntroContainer>
      <IntroContent>
        <IntroItems>
          <IntroH1>Defining brands, simplifying the complex.</IntroH1>
        </IntroItems>
      </IntroContent>
    </IntroContainer>
  )
}

export default IntroWork

const IntroContainer = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  color: #fff;
  padding: 3rem 0;

  @media screen and (max-width: 1140px) {
    padding: 3rem .5rem;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 4rem 1rem;
  }
`

const IntroContent = styled.div`
  z-index: 3;
  max-width: 1140px;
  margin: 0 auto;
`

const IntroItems = styled.div`
  align-items: start;
  text-align: start;
  width: 70%;
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
  }
`

const IntroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  letter-spacing: 3px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: clamp(3rem, 6vw, 4rem);
    letter-spacing: 2px;
  }
`
