import React from "react"
import styled from "styled-components"
import { ourServicesData } from "../../data/OurServicesData"

const OurServices = () => {
  return (
    <ServiceContainer>
      <ServiceContent>
        <ServiceWrapper>
          <TitleContainer>
            <Title>Our Services</Title>
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
`

const ServiceContent = styled.div`
  z-index: 3;
  max-width: 1140px;
  width: 100%;
`

const ServiceWrapper = styled.div`
  display: flex;
  padding: 1rem 3rem;

  @media screen and (max-width: 800px) {
    justify-content: center;
    align-items: center;
  }
`
const TitleContainer = styled.div`
  width: 50%;
  display: inline-block;
`

const Title = styled.h1`
  display: flex;
  font-size: clamp(1.5rem, 6vw, 2.3rem);
  letter-spacing: 1px;
  font-weight: bold;
`

const DescriptionContainer = styled.div`
  display: inline-grid;
  width: 50%;
  grid-template-columns: repeat(2, 4fr);
  grid-gap: 1.3rem 0;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const Description = styled.p`
  font-size: clamp(1rem, 3vw, 1.4rem);
  font-weight: 300;
`
