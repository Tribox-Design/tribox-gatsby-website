import React from "react"
import styled from "styled-components"

const IntroBlogs = () => {
  return (
    <IntroItems>
      <IntroH1>Our Latest Blogs</IntroH1>
    </IntroItems>
  )
}

export default IntroBlogs

/// *********************************************************
/// Styled Components
///
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
  font-size: clamp(1.4rem, 5vw, 3.5rem);
  font-weight: bold;
  letter-spacing: -1px;
  margin-top: 0;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    font-size: clamp(2.5rem, 6vw, 4rem);
  }
`
