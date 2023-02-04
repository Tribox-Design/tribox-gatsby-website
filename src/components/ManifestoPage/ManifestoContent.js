import React from "react"
import styled from "styled-components"
import { manifestoData } from "../../data/ManifestoData"

const ManifestoContent = () => {
  return (
    <ServiceContainer>
      <ServiceContent>
        {manifestoData.map((props, index) => (
            <ServiceWrapper key={index}>
              <NumberContainer>
                <Number>{props.number}</Number>
              </NumberContainer>
              <DescriptionContainer>
              <Title>{props.title}</Title>
                <Description key={index}>{props.description}</Description>
              </DescriptionContainer>
            </ServiceWrapper>
        ))}
      </ServiceContent>
    </ServiceContainer>
  )
}

export default ManifestoContent

/// *********************************************************
/// Styled Components
///
const ServiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  line-height: 1.4;

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

const NumberContainer = styled.div`
  width: 20%;
  padding-right: 2rem;
  padding-left: 4rem;

  @media screen and (max-width: 617px) {
    padding-right: 1rem;
    padding-left: 2rem;
  }
`

const Number = styled.h3`
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  letter-spacing: 1px;
  font-weight: bold;
  color: #ff3333;
  margin-bottom: 0;
  margin-top: 8px;
`

const Title = styled.h3`
  font-size: clamp(1rem, 3vw, 1.2rem);
  letter-spacing: 1px;
  font-weight: bold;
  color: #212121;
  margin-bottom: 4px;
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
