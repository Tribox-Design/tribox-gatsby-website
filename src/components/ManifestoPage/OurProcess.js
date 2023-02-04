import React from "react"
import styled from "styled-components"


const OurProcess = () => {
  return (
    <FeaturedContainer>
      <FeaturedContent>
        <FeaturedWrapper>
          <Title color={"black"}>Our Process</Title>
          <ProcessesContainer
            data-sal="fade"
            data-sal-duration="700"
            data-sal-easing="ease"
          >
            <ProcessContainer>
              <NumberBackground background={"#ff3333"}>
                <Title color={"white"}>1</Title>
              </NumberBackground>
              <Description>Discovery</Description>
            </ProcessContainer>
            
            <ProcessContainer>
              <NumberBackground background={"#FAD403"}>
                <Title color={"black"}>2</Title>
              </NumberBackground>
              <Description>Strategy</Description>
            </ProcessContainer>
            
            <ProcessContainer>
              <NumberBackground background={"#43B54A"}>
                <Title color={"white"}>3</Title>
              </NumberBackground>
              <Description>Design</Description>
            </ProcessContainer>
            
            <ProcessContainer>
              <NumberBackground background={"#B3549F"}>
                <Title color={"white"}>4</Title>
              </NumberBackground>
              <Description>Execution</Description>
            </ProcessContainer>
          </ProcessesContainer>
        </FeaturedWrapper>
      </FeaturedContent>
    </FeaturedContainer>
  )
}

export default OurProcess

/// *********************************************************
/// Styled Components
///
const FeaturedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0 2rem 0;

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

  @media screen and (max-width: 564px) {
    padding: 0 2rem;
  }
`


const ProcessesContainer = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(4, 4fr);
  width: 100%;
  grid-gap: 60px;
  padding: 4rem 3rem;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 768px) {
    text-align: center;
    grid-gap: 15px;
    padding: 2rem 1rem;
    padding-bottom: 1rem;
  }

  @media screen and (max-width: 400px) {
    text-align: center;
    padding: 2rem 1rem;
    padding-bottom: 1rem;
  }
`

const ProcessContainer = styled.div`
  align-items: center;
  text-align: center;
  margin: auto;
  justify-content: center;
`

const Title = styled.h3`
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  letter-spacing: 1px;
  font-weight: bold;
  color: ${({ color }) => color};
  vertical-align: middle;
  padding-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: clamp(1rem, 4vw, 2rem);
  }
`

const NumberBackground = styled.div`
  background: ${({ background }) => background};
  border-radius: 50%;
  height: 64px;
  width: 64px;
  align-items: center;
  text-align: center;
  margin: auto;

  @media screen and (max-width: 768px) {
    height: 56px;
    width: 56px;
  }

  @media screen and (max-width: 500px) {
    height: 48px;
    width: 48px;
  }
`

const Description = styled.p`
  font-size: clamp(2rem, 3vw, 1.2rem);
  font-weight: 300;
  margin-top: 20px;
  color: #424242;

  @media screen and (max-width: 1000px) {
    margin-top: 15px;
    font-size: clamp(1.5rem, 3vw, 1.2rem);
  }

  @media screen and (max-width: 500px) {
    margin-top: 10px;
    font-size: clamp(1rem, 2vw, 1rem);
  }
`