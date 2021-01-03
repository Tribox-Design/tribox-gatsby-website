import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const HighlightWorks = () => {
  const data = useStaticQuery(graphql`
    query WorksQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              isHighlighted
              description
              path
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

  function getHighlightedWorks(data) {
    const worksArray = []
    data.allMarkdownRemark.edges.forEach((item, index) => {
      console.log(item)
      if (item.node.frontmatter.isHighlighted) {
        worksArray.push(
          <WorkCard key={index}>
            <WorkLink to={item.node.frontmatter.path}>
              <WorkImg
                alt={item.node.frontmatter.title}
                src={item.node.frontmatter.thumbnail.childImageSharp.fluid.src}
                fluid={item.node.frontmatter.thumbnail.childImageSharp.fluid}
              />
            </WorkLink>

            <WorkInfo>
              <WorkLink to={item.node.frontmatter.path}>
                <WorkTitle>{item.node.frontmatter.title}</WorkTitle>
              </WorkLink>

              <p>{item.node.frontmatter.description}</p>
            </WorkInfo>
          </WorkCard>
        )
      }
    })
    return worksArray
  }

  return (
    <HighlightsContainer>
      <HighlightsHeader>This</HighlightsHeader>
      <HighlightsWrapper>{getHighlightedWorks(data)}</HighlightsWrapper>
    </HighlightsContainer>
  )
}

export default HighlightWorks

const HighlightsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #fff;
`

const HighlightsHeader = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #fc000d;
`

const HighlightsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 4fr);
  grid-gap: 20px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 0 1fr;
  }
`

const WorkCard = styled.div`
  line-height: 1.5;
  width: 100%;
  height: 420px;
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

const WorkImg = styled(Img)`
  height: 350px;
  max-width: 100%;
  position: relative;
  filter: brightness(97%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(105%);
  }
`

const WorkTitle = styled.div`
  padding-top: 5px;
  font-weight: 600;
  color: #212121;
  font-size: 2rem;

  &:hover {
    color: #424242;
  }
`

const WorkLink = styled(Link)`
  height: 100%;
  text-decoration: none;
`
