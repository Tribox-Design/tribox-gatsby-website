import React from "react"
import styled from "styled-components"

function FeaturedWork(props) {
  if (props.feature) {
    return (
      <ServicesContainer>
        <ServicesTitle>Featured on</ServicesTitle>
        <FeaturedOnDesc>{props.feature}</FeaturedOnDesc>
      </ServicesContainer>
    )
  }
  return <></>
}

const WorkDetails = ({ frontmatter }) => {
  return (
    <WorkWrapper>
      <LeftContainer>
        <Title>{frontmatter.title}</Title>
        <DescriptionContainer>
          <Description>{frontmatter.description}</Description>
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
        <FeaturedWork feature={frontmatter.featuredOn} />
      </RightContainer>
    </WorkWrapper>
  )
}

export default WorkDetails

const WorkWrapper = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-gap: 6rem;
  padding: 5rem 0;

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

const Title = styled.h3`
  font-size: clamp(1rem, 6vw, 2rem);
  letter-spacing: 1px;
  font-weight: bold;
  margin: 0;
`

const DescriptionContainer = styled.div`
  padding-top: 0.5rem;
`

const Description = styled.pre`
  font-weight: 300;
  font-size: 18px;
  line-height: 1.5rem;
`

const ClientContainer = styled.div`
  @media screen and (max-width: 768px) {
    padding-top: 1rem;
  }
`

const ClientTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
`

const Client = styled.p`
  font-weight: 300;
  margin-bottom: 0;
  font-size: 18px;
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
  margin-bottom: 0;
  font-size: 18px;
`

const Services = styled.p`
  font-weight: 300;
  font-size: 18px;
  padding-top: 0.3rem;
  margin-bottom: 0;
  font-size: 18px;
`

const FeaturedOnDesc = styled.pre`
  font-weight: 300;
  font-size: 18px;
  padding-top: 0.3rem;
  font-size: 18px;
`