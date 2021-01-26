import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const MoreProjects = ({ currentPage }) => {
  const randomData = useStaticQuery(graphql`
    query RandomWorksQuery {
      allMdx(filter: {frontmatter: {isPublishedWork: {eq: true}}}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              thumbnail {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  function getRandomValue(maxLength) {
    return Math.floor(Math.random() * maxLength);
  }

  function getRandomWorks(randomData) {
    const worksArray = [], chosenRandomNumbers = [];
    var currentIndex = 0;
    randomData.allMdx.edges.forEach((item, index) => {
      if (currentPage === item.node.frontmatter.title) {
        currentIndex = index
        return
      }
    })

    while (chosenRandomNumbers.length < 3) {
      const randomValue = getRandomValue(randomData.allMdx.edges.length)
      if (!chosenRandomNumbers.includes(randomValue) && currentIndex !== randomValue ) {
        chosenRandomNumbers.push(randomValue)
      }
    }

    chosenRandomNumbers.forEach((item, index) => {
      const slugString = '/works' + randomData.allMdx.edges[item].node.fields.slug
      worksArray.push(
        <WorkCard key={index}>
          <WorkLink to={slugString}>
            <MoreWorkImg
              alt={randomData.allMdx.edges[item].node.frontmatter.title}
              src={randomData.allMdx.edges[item].node.frontmatter.thumbnail.childImageSharp.fluid.src}
              fluid={randomData.allMdx.edges[item].node.frontmatter.thumbnail.childImageSharp.fluid}
              imgStyle={{ objectFit: 'contain' }}
            />
          </WorkLink>
          <WorkInfo>
            <WorkLink to={slugString}>
              <WorkTitle>{randomData.allMdx.edges[item].node.frontmatter.title}</WorkTitle>
            </WorkLink>
          </WorkInfo>
        </WorkCard>
      )
    })

    return worksArray
  }

  return (
    <MoreWorksContainer>
      <TitleContainer>
        <MoreProjectsTitle>More Projects</MoreProjectsTitle>
      </TitleContainer>
      <RandomWorksContainer>
        {getRandomWorks(randomData)}
      </RandomWorksContainer>
      
    </MoreWorksContainer>
  )
}

export default MoreProjects

const MoreWorksContainer = styled.div`
  padding: 2rem 0;
`

const MoreProjectsTitle = styled.h1`
  display: flex;
  font-size: clamp(1rem, 3vw, 1.6rem);
  letter-spacing: 1px;
  color: #4f4f4f;
  font-weight: bold;
`

const RandomWorksContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-gap: 5rem;
  justify-items: center;
  padding: 1rem 0;

  @media screen and (max-width: 1000px) {
    grid-gap: 1rem;
  }

  @media screen and (max-width: 890px) {
    grid-template-columns: 1fr;
  }
`

const WorkCard = styled.div`
  line-height: 1.5;
  width: 100%;
  position: relative;
  transition: 0.2s ease;
`

const WorkInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const MoreWorkImg = styled(Img)`
  max-width: 100%;
  position: relative;
  filter: brightness(97%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(105%);
  }
`

const WorkTitle = styled.p`
  padding-top: 5px;
  font-weight: 600;
  color: #212121;
  font-size: 18px;
  letter-spacing: 0.5px;

  &:hover {
    color: #424242;
  }
`

const WorkLink = styled(Link)`
  height: 100%;
  text-decoration: none;
`

const TitleContainer = styled.div`

`