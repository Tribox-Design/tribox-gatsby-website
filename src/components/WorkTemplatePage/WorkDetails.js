import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

function FeaturedWork(props) {
  if (props.featuredOn) {
    const data = props.featuredOn
    function getAllFeaturedData(data) {
      const featureArray = []
      data.forEach((featuredOn, index) => {
        featureArray.push(
          <WorkLink key={index} to={featuredOn.featured.link}>
            {featuredOn.featured.name}
          </WorkLink>
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

const WorkDetails = ({ frontmatter }) => {
  console.log(frontmatter)
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
`

const Services = styled.p`
  font-weight: 300;
  font-size: 18px;
  padding-top: 0.3rem;
  margin-bottom: 0;
`

const FeaturedOnDesc = styled.pre`
  font-weight: 300;
  font-size: 18px;
  padding-top: 0.3rem;
`

const WorkLink = styled(Link)`
  height: 100%;
  text-decoration: underline;
  font-weight: 300;
  font-size: 18px;
  padding-top: 0.3rem;
  color: #000000;

  :hover {
    color: #ff3333;
  }
`