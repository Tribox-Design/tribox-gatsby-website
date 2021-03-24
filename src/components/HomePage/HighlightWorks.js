import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const HighlightWorks = () => {
  const data = useStaticQuery(graphql`
    query WorksQuery {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: {
          frontmatter: {
            isHighlighted: { eq: true }
            isPublishedWork: { eq: true }
          }
        }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              thumbnail {
                childImageSharp {
                  fluid(quality: 90) {
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

  return (
    <HighlightsContainer>
      <HighlightsWrapper>{getHighlightedWorks(data)}</HighlightsWrapper>
    </HighlightsContainer>
  )
}

export default HighlightWorks

/// *********************************************************
/// Functions
///
function getHighlightedWorks(data) {
  const worksArray = []
  data.allMdx.edges.forEach((item, index) => {
    worksArray.push(
      <WorkCard
        key={index}
        data-sal="fade"
        data-sal-duration="700"
        data-sal-delay="100"
        data-sal-easing="ease"
      >
        <WorkLink to={"works" + item.node.fields.slug}>
          <WorkImg
            alt={item.node.frontmatter.title}
            src={item.node.frontmatter.thumbnail.childImageSharp.fluid.src}
            fluid={item.node.frontmatter.thumbnail.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
          />
        </WorkLink>
        <WorkInfo>
          <WorkLink to={"works" + item.node.fields.slug}>
            <WorkTitle>{item.node.frontmatter.title}</WorkTitle>
          </WorkLink>
          {/* <WorkDesc>{item.node.frontmatter.shortDescription}</WorkDesc> */}
        </WorkInfo>
      </WorkCard>
    )
  })
  return worksArray
}

/// *********************************************************
/// Styled Components
///
const HighlightsContainer = styled.div`
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #fff;

  @media screen and (max-width: 880px) {
    padding: 3rem calc((100vw - 1300px) / 2);
  }
`

const HighlightsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 28px 64px;
  justify-items: center;
  padding: 0 7rem;

  @media screen and (max-width: 880px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
    padding: 0 2.5rem;
  }
`

const WorkCard = styled.div`
  line-height: 1.5;
  width: 100%;
  position: relative;
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
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
  max-width: 100%;
  position: relative;
  filter: brightness(97%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(105%);
  }
`

const WorkTitle = styled.div`
  padding-top: 10px;
  font-weight: normal;
  color: #000000;
  letter-spacing: 0.5px;
  font-size: clamp(16px, 1.5vw, 2rem);

  &:hover {
    color: #424242;
  }

  @media screen and (max-width: 868px) {
    font-size: clamp(20px, 2.5vw, 3.7rem);
  }
`

const WorkLink = styled(Link)`
  height: 100%;
  text-decoration: none;
`
