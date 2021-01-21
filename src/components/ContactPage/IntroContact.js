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
  padding: 8rem 2rem;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }

  @media screen and (max-width: 868px) {
    padding: 1rem 2rem 4rem 2rem;
  }
`

const IntroContent = styled.div`
  z-index: 3;
  width: 87%;
  max-width: 1140px;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`

const IntroItems = styled.div`
  align-items: start;
  text-align: start;
  max-height: 100%;
  color: #212121;

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    max-height: 80%;
  }
`

const IntroH1 = styled.h1`
  font-size: clamp(2rem, 5.5vw, 3.8rem);
  letter-spacing: 2px;
  font-weight: bold;
  width: 87%;

  @media screen and (max-width: 868px) {
    font-size: clamp(2rem, 4vw, 3.7rem);
    letter-spacing: 1px;
    width: 100%;
  }
`
