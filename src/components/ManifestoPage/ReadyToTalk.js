import React from "react"
import styled from "styled-components"
import { Button } from "../Button"

const ReadyToTalk = () => {
  return (
    <FeaturedContainer>
      <FeaturedContent>
        <FeaturedWrapper>
          <Description>Ready to talk?</Description>
          <form action="/contact/">
            <ContactUs type="submit">
              Contact us
            </ContactUs>
          </form>
        </FeaturedWrapper>
      </FeaturedContent>
    </FeaturedContainer>
  )
}

export default ReadyToTalk

/// *********************************************************
/// Styled Components
///
const FeaturedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0 2rem 0;
  background: #E6E6E6;

  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }
`

const FeaturedContent = styled.div`
  z-index: 3;
  max-width: 1140px;
  width: 100%;
`

const FeaturedWrapper = styled.div`
  display: inline-grid;
  padding: 4rem 3rem;
  justify-content: center;
  width: 100%;
  display: flex;

  @media screen and (max-width: 768px) {
    text-align: center;
    grid-gap: 0;
    padding: 2rem 1rem;
  }

  @media screen and (max-width: 564px) {
    padding: 0 2rem;
  }
`

const Description = styled.p`
  font-size: clamp(2rem, 3vw, 1.2rem);
  font-weight: 300;
  color: #424242;
  text-align: center;
  vertical-align: middle;
  margin: auto 40px;
  padding-top: 14px;

  @media screen and (max-width: 1000px) {
    font-size: clamp(1.5rem, 3vw, 1.2rem);
  }

  @media screen and (max-width: 700px) {
    font-size: clamp(1.2rem, 3vw, 1rem);
  }
`

const ContactUs = styled.button`
  border: 0;
  background: #ff3333;
  padding: 1.2rem 2.5rem;
  color: white;
  width: auto;
  cursor: pointer;
  margin: 1rem auto;
  font-size: 18px;
  transition: 0.2s ease-in-out;
  border-radius: 50px;

  &:hover {
    background: #424242;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
    padding: 1rem;
  }
`