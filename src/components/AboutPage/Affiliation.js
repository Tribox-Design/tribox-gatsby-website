import React from "react"
import styled from "styled-components"
import { affiliationsData } from "../../data/AffiliationsData"

const Affiliation = () => {
  return (
    <ServiceContainer>
      <ServiceContent>
        <ServiceWrapper>
          <TitleContainer>
            <Title>Memberships and Affiliations</Title>
          </TitleContainer>
          <DescriptionContainer>
            {affiliationsData.map((props, index) => (
              <Description key={index}>{props.affiliate}</Description>
            ))}
          </DescriptionContainer>
        </ServiceWrapper>
      </ServiceContent>
    </ServiceContainer>
  )
}

export default Affiliation

/// *********************************************************
/// Styled Components
///
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

const Title = styled.h3`
  font-size: clamp(1.4rem, 5vw, 2.1rem);
  letter-spacing: 1px;
  font-weight: bold;
  color: #212121;
  margin-bottom: 0;
  margin-top: 0;
`

const DescriptionContainer = styled.div`
  width: 60%;

  @media screen and (max-width: 768px) {
    padding-left: 10px;
  }
`

const Description = styled.p`
  font-size: clamp(1rem, 3vw, 1.2rem);
  font-weight: 300;
  margin-bottom: 1.3rem;
  color: #424242;
`