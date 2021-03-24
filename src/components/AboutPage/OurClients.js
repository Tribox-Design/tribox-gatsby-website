import React from "react"
import styled from "styled-components"
import { ourClientsData } from "../../data/OurClientsData"

const OurClients = () => {
  return (
    <ClientContainer>
      <ClientContent>
        <ClientWrapper>
          <Title>Our Valued</Title>
          <Title>Clients</Title>
          <ImgContainer>
            {ourClientsData.map((item, index) => (
              <ClientLink
                key={index}
                urlExists={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                data-sal="fade"
                data-sal-duration="700"

                data-sal-easing="ease"
              >
                <CustomImg src={item.svg} alt={item.client} />
              </ClientLink>
            ))}
          </ImgContainer>
        </ClientWrapper>
      </ClientContent>
    </ClientContainer>
  )
}

export default OurClients

/// *********************************************************
/// Styled Components
///
const ClientContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;

  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }
`

const ClientContent = styled.div`
  z-index: 3;
  max-width: 1140px;
  width: 100%;
`

const ClientWrapper = styled.div`
  padding: 1rem 3rem;

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 564px) {
    padding: 0 2rem;
  }
`

const Title = styled.h3`
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  letter-spacing: 1px;
  font-weight: bold;
  color: #212121;
  margin-bottom: 0;
  margin-top: 0;
`

const ImgContainer = styled.div`
  margin-top: 2rem;
  display: inline-grid;
  grid-template-columns: repeat(4, 4fr);
  grid-gap: 1rem 3rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 2fr);
  }

  @media screen and (max-width: 564px) {
    grid-gap: 0rem;
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
`

const CustomImg = styled.img`
  margin: auto;
  filter: grayscale(100%);
  transition: 0.2s;

  @media screen and (max-width: 768px) {
    width: 82%;
    height: 82%;
  }

  &:hover {
    filter: grayscale(0);
    transform: scale(1.05);
  }
`

const ClientLink = styled.a`
  cursor: ${({ urlExists }) => (urlExists ? "pointer" : null)};
  text-decoration: none;
`
