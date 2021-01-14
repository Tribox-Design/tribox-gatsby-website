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
  padding: 5rem 2rem;


  @media screen and (max-width: 768px) {
    justify-content: center;
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
  line-height: 1.1;

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    max-height: 80%;
  }
`

const IntroH1 = styled.h1`
  font-size: clamp(1.5rem, 5vw, 3.7rem);
  letter-spacing: 1px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: clamp(2rem, 4vw, 3.7rem);
  }
`
