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
  padding: 6rem 0;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    padding: 4rem 0;
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

  @media screen and (max-width: 768px) {
    max-height: 80%;
  }
`

const IntroH1 = styled.h1`
  font-size: clamp(2rem, 5.5vw, 3.8rem);
  font-weight: bold;
  width: 87%;

  @media screen and (max-width: 868px) {
    font-size: clamp(2rem, 4vw, 3.7rem);
    width: 100%;
  }
`
