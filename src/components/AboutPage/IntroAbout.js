import React from "react"
import styled from "styled-components"

const IntroAbout = () => {
  return (
    <IntroContainer>
      <IntroContent>
        <IntroItems>
          <IntroH1>
            A local branding agency for Local Brands and SMEs. We promote brand
            growth.
          </IntroH1>
        </IntroItems>
      </IntroContent>
    </IntroContainer>
  )
}

export default IntroAbout

const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #fff;
  padding: 6rem 2rem;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    padding: 4rem 2rem;
    justify-content: center;
  }
`

const IntroContent = styled.div`
  z-index: 3;
  max-width: 1140px;
`

const IntroItems = styled.div`
  align-items: start;
  text-align: start;
  max-height: 100%;
  line-height: 1.1;

  @media screen and (max-width: 768px) {
    max-height: 80%;
  }
`

const IntroH1 = styled.h1`
  font-size: clamp(2rem, 5vw, 3.4rem);
  letter-spacing: 2px;
  font-weight: bold;
  width: 87%;
  color: #212121;

  @media screen and (max-width: 868px) {
    font-size: clamp(2rem, 4vw, 3.7rem);
    letter-spacing: 1px;
    width: 100%;
  }
`
