import React from "react"
import styled from "styled-components"
import { Button } from "../Button"

const IntroBanner = () => {
  return (
    <IntroContainer>
      <IntroContent>
        <IntroItems>
          <IntroH1>Our mission is to promote the growth of every Filipino brand through creativity and well-developed strategies.</IntroH1>
          <IntroButton>
            <Button round="true" to="/about" big="true">
              More about us
            </Button>
          </IntroButton>
        </IntroItems>
      </IntroContent>
    </IntroContainer>
  )
}

export default IntroBanner

const IntroContainer = styled.div`
  background: #ff3333;
  display: flex;
  text-align: center;
  width: 100%;
  color: #fff;
  padding: 3rem 0; 
`

const IntroContent = styled.div`
  z-index: 3;
  max-width: 1140px;
  margin: 0 auto;
  padding: 2rem 0rem;
  
  @media screen and (max-width: 1140px) {
    padding: 1rem 2rem;
  }
`

const IntroItems = styled.div`
  align-items: start;
  text-align: start;
  max-height: 100%;
  color: #ffffff;
  line-height: 1.1;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    line-height: 1.3;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`

const IntroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  font-weight: bold;
  width: 95%;
  letter-spacing: -1px;

  @media screen and (max-width: 768px) {
    font-size: clamp(1.8rem, 4vw, 3rem);
    padding: 0;
  }
`

const IntroButton = styled.div`
  padding-top: 2rem;
  font-weight: bold;
  align-items: center;
  display: flex;
`
