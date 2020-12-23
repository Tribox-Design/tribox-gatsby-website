import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const HighlightWorks = () => {
  const data = useStaticQuery(graphql`
    query WorksQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              isHighlighted
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
          <div key={index}>
            <h1>{item.node.frontmatter.title}</h1>
            <Img 
              src={item.node.frontmatter.thumbnail.childImageSharp.fluid.src} 
              fluid={item.node.frontmatter.thumbnail.childImageSharp.fluid}/>
          </div>
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

const HighlightsWrapper = styled.div``
