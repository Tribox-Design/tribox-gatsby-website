import React from "react"
import styled from "styled-components"
import { ourServicesData } from "../../data/OurServicesData"

const OurServices = () => {
  return (
    <ServiceContainer>
      <ServiceContent>
        <ServiceWrapper>
          <TitleContainer>
            <Title>What we love to do</Title>
          </TitleContainer>
          <DescriptionContainer>
            {ourServicesData.map((props, index) => (
              <Description key={index}>{props.service}</Description>
            ))}
          </DescriptionContainer>
        </ServiceWrapper>
      </ServiceContent>
    </ServiceContainer>
  )
}

export default OurServices

const ServiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;

  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }
`

const ServiceContent = styled.div`
  z-index: 3;
  max-width: 1140px;
  width: 100%;
`

const ServiceWrapper = styled.div`
  display: flex;
  padding: 1rem 3rem;

  @media screen and (max-width: 564px) {
    padding: 0 2rem;
  }
`
const TitleContainer = styled.div`
  width: 40%;

  padding-right: 11.8rem;
  @media screen and (max-width: 1000px) {
    padding-right: 8rem;
  }
  @media screen and (max-width: 920px) {
    padding-right: 6rem;
  }
  @media screen and (max-width: 788px) {
    padding-right: 3rem;
  }
  @media screen and (max-width: 617px) {
    padding-right: 1rem;
  }
`

const Title = styled.p`
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  letter-spacing: 1px;
  font-weight: bold;
  color: #212121;
`

const DescriptionContainer = styled.div`
  display: inline-grid;
  width: 60%;
  grid-template-columns: repeat(2, 4fr);
  grid-gap: 1.3rem 0;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 768px) {
    padding-left: 10px;
  }
`

const Description = styled.p`
  font-size: clamp(1rem, 3vw, 1.2rem);
  font-weight: 300;
  color: #424242;
`
