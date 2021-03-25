import React from "react"
import styled from "styled-components"
import { Button } from "../Button"

const PrologueContact = ({ title }) => {
  return (
    <IntroContent
      data-sal="slide-left"
      data-sal-duration="700"
      data-sal-delay="500"
      data-sal-easing="ease"
    >
      <IntroItems>
        <IntroP>
          To find out more about {title} or any of our brands, get in touch.
        </IntroP>
      </IntroItems>
      <Button primary to="/contact" big="false">
        Get in touch
      </Button>
    </IntroContent>
  )
}

export default PrologueContact

/// *********************************************************
/// Styled Components
///
const IntroContent = styled.div`
  z-index: 3;
  max-width: 1140px;
  margin: 0 auto;
  padding-bottom: 4rem;

  @media screen and (max-width: 768px) {
    padding-bottom: 2rem;
  }
`

const IntroItems = styled.div`
  align-items: start;
  text-align: start;
  color: #212121;
  max-width: 60%;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    max-width: 90%;
    margin-bottom: 1.5rem;
  }
`

const IntroP = styled.div`
  font-size: clamp(21px, 2vw, 3rem);
  line-height: 1.2;
  margin-bottom: 0.4rem;
  padding-top: 2rem;
  color: #424242;

  @media screen and (max-width: 768px) {
    font-size: clamp(18px, 2vw, 3rem);
    padding-top: 0;
    line-height: 1.3
  }
`
