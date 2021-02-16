import React from "react"
import styled from "styled-components"
import { ourClientsData } from "../../data/OurClientsData"
import { Link } from "gatsby"

const OurClients = () => {
  return (
    <ClientContainer>
      <ClientContent>
        <ClientWrapper>
          <Title>Our Valued</Title>
          <Title>Clients</Title>

          <ImgContainer>
            {ourClientsData.map((item, index) => (
              <ClientLink key={index} urlExists={item.url} to={item.url}>
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
  padding: 1rem 3rem;

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`

const Title = styled.p`
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  letter-spacing: 1px;
  font-weight: bold;
  color: #212121;
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
    grid-gap: 2rem 0rem;
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
`

const CustomImg = styled.img`
  margin: auto;
  height: 80%;
  width: 80%;
  filter: grayscale(95%);

  @media screen and (max-width: 768px) {
    width: 180px;
    height: 144px;
  }

  :hover {
    filter: grayscale(0);
  }
`

const ClientLink = styled(Link)`
  cursor: ${({ urlExists }) => (urlExists ? "pointer" : null)};
  text-decoration: none;
`
