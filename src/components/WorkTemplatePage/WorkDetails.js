import React from "react"
import styled from "styled-components"

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
        <FeaturedWork featuredOn={frontmatter.featuredOn} />
      </RightContainer>
    </WorkWrapper>
  )
}

export default WorkDetails

/// *********************************************************
/// Functions
///
function FeaturedWork(props) {
  if (props.featuredOn) {
    const data = props.featuredOn
    function getAllFeaturedData(data) {
      const featureArray = []
      data.forEach((featuredOn, index) => {
        featureArray.push(
          <FeatureContainer key={index}>
            <FeatureLink href={featuredOn.featured.link} target="_blank" rel="noopener noreferrer">
              {featuredOn.featured.name}
            </FeatureLink>
          </FeatureContainer>
        )
      })
      return featureArray
    }

    return (
      <ServicesContainer>
        <ServicesTitle>Featured on</ServicesTitle>
        {getAllFeaturedData(data)}
      </ServicesContainer>
    )
  }
  return <></>
}

/// *********************************************************
/// Styled Components
///
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
    padding: 4rem 0 2rem 0;
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
  width: 70%;

  @media screen and (max-width: 890px) {
    width: 100%;
  }
`

const Description = styled.pre`
  font-weight: 300;
  font-size: 18px;
  line-height: 1.5rem;
  white-space: pre-wrap;
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
  padding-top: 0.5rem;
`

const ServicesContainer = styled.div`
  padding-top: 2rem;

  @media screen and (max-width: 768px) {
    padding-top: 1rem;
    display: relative;
  }
`

const ServicesTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 0;
`

const Services = styled.p`
  font-weight: 300;
  font-size: 18px;
  padding-top: 0.5rem;
  margin-bottom: 0;
`

const FeatureContainer = styled.div`
  padding-top: 0.5rem;
`

const FeatureLink = styled.a`
  height: 100%;
  text-decoration: none;
  font-weight: 300;
  font-size: 18px;
  color: #000000;

  :hover {
    color: #ff3333;
    text-decoration: underline;
  }
`
