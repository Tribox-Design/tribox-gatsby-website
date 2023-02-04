import React from "react"
import styled from "styled-components"


const ReadyToTalk = () => {
  return (
    <FeaturedContainer>
      <FeaturedContent>
        <FeaturedWrapper>
          <Description>Ready to talk?</Description>
          <Button round="false" to="/contact/" big="true">
            Contact us
          </Button>
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
  padding: 1rem 3rem;
  display: inline-grid;
  grid-template-columns: repeat(2, 2fr);
  padding: 4rem 3rem;
  justify-content: space-evenly;
  width: 100%;
  grid-gap: 60px;

  @media screen and (max-width: 768px) {
    text-align: center;
    grid-gap: 0;
    padding: 2rem 1rem;
    padding-bottom: 1rem;
  }

  @media screen and (max-width: 564px) {
    padding: 0 2rem;
  }
`


const Title = styled.h3`
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  letter-spacing: 1px;
  font-weight: bold;
  color: ${({ color }) => color};
  vertical-align: middle;
`

const NumberBackground = styled.div`
  background: ${({ background }) => background};
  border-radius: 50%;
  height: 64px;
  width: 64px;
  align-items: center;
  text-align: center;
  padding: 4px;
  margin: auto;
`

const Description = styled.p`
  font-size: clamp(2rem, 3vw, 1.2rem);
  font-weight: 300;
  margin-top: 20px;
  color: #424242;

  @media screen and (max-width: 1000px) {
    font-size: clamp(1.5rem, 3vw, 1.2rem);
  }
`