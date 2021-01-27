import React from "react"
import styled from "styled-components"

const WorkDetails = ({ frontmatter }) => {
  return (
    <WorkWrapper>
      <LeftContainer>
        <TitleContainer>
          <Title>{frontmatter.title}</Title>
        </TitleContainer>
        <DescriptionContainer>
          <Description dangerouslySetInnerHTML={{ __html: frontmatter.description }} />
        </DescriptionContainer>
      </LeftContainer>
      <RightContainer>
        <ClientContainer>
          <ClientTitle>Client</ClientTitle>
          <Client>{frontmatter.client}</Client>
        </ClientContainer>
        <ServicesContainer>
          <ServicesTitle>Services</ServicesTitle>
          <Services>{frontmatter.services}</Services>
        </ServicesContainer>
      </RightContainer>
    </WorkWrapper>
  )
}

export default WorkDetails

const WorkWrapper = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-gap: 6rem;
  padding: 6rem 0;

  @media screen and (max-width: 1140px) {
    grid-gap: 1rem;
    padding: 2.5rem 0;
  }

  @media screen and (max-width: 890px) {
    grid-template-columns: 1fr;
    padding: 2.5rem 0;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
  }
`

const LeftContainer = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-right: 0rem;
    display: relative;
  }
`

const RightContainer = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
    display: relative;
  }
`

const TitleContainer = styled.div`

`

const Title = styled.p`
  font-size: clamp(1rem, 6vw, 2rem);
  letter-spacing: 1px;
  font-weight: bold;
`

const DescriptionContainer = styled.div`
  padding-top: 0.5rem;
`

const Description = styled.p`
  font-weight: 300;
`

const ClientContainer = styled.div`
  @media screen and (max-width: 768px) {
    padding-top: 1rem;
  }
`

const ClientTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
`

const Client = styled.p`
  font-weight: 300;
  padding-top: 0.3rem;
`

const ServicesContainer = styled.div`
  padding-top: 2rem;

  @media screen and (max-width: 768px) {
    padding-top: 1rem;
    width: 50%;
    display: relative;
  }
`

const ServicesTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
`

const Services = styled.p`
  font-weight: 300;
  padding-top: 0.3rem;
`