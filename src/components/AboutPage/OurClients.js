import React from "react"
import styled from "styled-components"
import { ourClientsData } from "../../data/OurClientsData"

const OurClients = () => {
  return (
    <ClientContainer>
      <ClientContent>
        <ClientWrapper>
          <TitleContainer>
            <Title>Our Clients</Title>
          </TitleContainer>
          <DescriptionContainer>
            {ourClientsData.map((props, index) => (
              <Description key={index}>{props.client}</Description>
            ))}
          </DescriptionContainer>
        </ClientWrapper>
      </ClientContent>
    </ClientContainer>
  )
}

export default OurClients

const ClientContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
`

const ClientContent = styled.div`
  z-index: 3;
  max-width: 1140px;
  width: 100%;
`

const ClientWrapper = styled.div`
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
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  letter-spacing: 1px;
  font-weight: bold;
`

const DescriptionContainer = styled.div`
  display: inline-grid;
  width: 50%;
  grid-template-columns: 1fr;
  grid-gap: 1.3rem 0;
`

const Description = styled.p`
  font-size: clamp(1rem, 3vw, 1.2rem);
  font-weight: 300;
`
