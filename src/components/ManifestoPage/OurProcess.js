import React from "react"
import styled from "styled-components"


const OurProcess = () => {
  return (
    <FeaturedContainer>
      <FeaturedContent>
        <FeaturedWrapper>
          <Title color={"black"}>Our Process</Title>
          <ProcessContainer
            data-sal="fade"
            data-sal-duration="700"
            data-sal-easing="ease"
          >
            <div>
              <NumberBackground background={"#ff3333"}>
                <Title color={"white"}>1</Title>
              </NumberBackground>
              <Description>Discovery</Description>
            </div>

            <Title color={"white"}>`{'>'}`</Title>
            
            <div>
              <NumberBackground background={"#FAD403"}>
                <Title color={"black"}>2</Title>
              </NumberBackground>
              <Description>Strategy</Description>
            </div>

            <Title color={"white"}>`{'>'}`</Title>
            
            <div>
              <NumberBackground background={"#43B54A"}>
                <Title color={"white"}>3</Title>
              </NumberBackground>
              <Description>Design</Description>
            </div>

            <Title color={"white"}>`{'>'}`</Title>
            
            <div>
              <NumberBackground background={"#B3549F"}>
                <Title color={"white"}>4</Title>
              </NumberBackground>
              <Description>Execution</Description>
            </div>
          </ProcessContainer>
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


const ProcessContainer = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(4, 4fr);
  width: 100%;
  grid-gap: 60px;
  padding: 4rem 3rem;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    text-align: center;
    grid-gap: 0;
    padding: 2rem 1rem;
    padding-bottom: 1rem;
  }
`

const Title = styled.h3`
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  letter-spacing: 1px;
  font-weight: bold;
  // color: #212121;
  color: ${({ color }) => color};
  margin: 0;
`

const NumberBackground = styled.div`
  background: ${({ background }) => background};
  border-radius: 50%;
  width: 100px;
  height: 100px;
`

const Description = styled.p`
  font-size: clamp(2.1rem, 3vw, 1.2rem);
  font-weight: 300;
  margin-bottom: 20px;
  color: #424242;
`