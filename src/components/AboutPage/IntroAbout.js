import React from "react"
import styled from "styled-components"

const IntroAbout = () => {
  return (
    <IntroContainer
      data-sal="fade"
      data-sal-duration="100"
      data-sal-easing="ease"
    >
      <IntroContent
        data-sal="slide-left"
        data-sal-duration="700"
        data-sal-delay="500"
        data-sal-easing="ease"
      >
        <IntroItems>
          <IntroH1>
            Tribox Design is a local branding agency for Local Brands, SMEs and
            Startups.
          </IntroH1>
          <IntroP>
            We are a passionate team with different expertise but with the same
            goals. We believe that using our expertise can help you and provide
            value to make a big impact to the community. Our work consists of
            Brand Identity Design, Brand Strategy and Graphics.
          </IntroP>
        </IntroItems>
      </IntroContent>
    </IntroContainer>
  )
}

export default IntroAbout

/// *********************************************************
/// Styled Components
///
const IntroContainer = styled.div`
  background: #ff3333;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #fff;
  padding: 6rem 2rem;

  @media screen and (max-width: 768px) {
    padding: 4rem 2rem 2rem 2rem;
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
  font-weight: bold;
  width: 87%;
  letter-spacing: -1px;
  margin-top: 0;
  margin-bottom: 0;

  @media screen and (max-width: 868px) {
    font-size: clamp(2rem, 4vw, 3.7rem);
    width: 100%;
  }
`

const IntroP = styled.p`
  width: 85%;
  font-size: clamp(16px, 1.8vw, 2rem);
  line-height: 1.2;
  margin-bottom: 0.4rem;
  padding: 1rem 0;

  @media screen and (max-width: 868px) {
    width: 93%;
  }
`
