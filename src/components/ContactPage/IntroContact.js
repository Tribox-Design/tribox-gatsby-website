import React from "react"
import styled from "styled-components"

const IntroContact = () => {
  return (
    <IntroContainer>
      <IntroContent>
        <IntroItems>
          <IntroH1>
            We love cluttered things, mind and ideas. Let's solve this together.
          </IntroH1>
          <IntroP>Let us know how we can help.</IntroP> 
        </IntroItems>
      </IntroContent>
    </IntroContainer>
  )
}

export default IntroContact

const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #fff;
  padding: 6rem 0 0 0;

  @media screen and (max-width: 768px) {
    padding: 4rem 0 0 0;
  }
`

const IntroContent = styled.div`
  z-index: 3;
  max-width: 1140px;
  margin: 0 auto;
  width: 95%;

  @media screen and (max-width: 1140px) {
    padding: 0 2rem;
    width: 100%;
  }
`

const IntroItems = styled.div`
  align-items: start;
  text-align: start;
  max-height: 100%;
  color: #212121;
  line-height: 1.1;

  @media screen and (max-width: 768px) {
    line-height: 1.3;
    max-height: 80%;
  }
`

const IntroH1 = styled.h1`
  font-size: clamp(2rem, 5.5vw, 3.8rem);
  font-weight: bold;
  width: 81%;
  letter-spacing: -1px;

  @media screen and (max-width: 868px) {
    font-size: clamp(2rem, 4vw, 3.7rem);
    width: 93%;
  }
`

const IntroP = styled.p`
  font-size: clamp(22px, 2.7vw, 4rem);
  line-height: 1.2;
  margin-bottom: 0.4rem;
  padding-top: 2rem;
  color: #424242;
  @media screen and (max-width: 868px) {
    font-size: clamp(24px, 4vw, 3.7rem);
  }
`
