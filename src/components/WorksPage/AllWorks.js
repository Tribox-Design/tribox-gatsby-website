import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const AllWorks = () => {
  const data = useStaticQuery(graphql`
    query AllWorksQuery {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              description
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

  function getAllWorks(data) {
    const worksArray = []
    data.allMdx.edges.forEach((item, index) => {
      var slugString = '/works' + item.node.fields.slug
      worksArray.push(
        <WorkCard key={index}>
          <WorkLink to={slugString}>
            <WorkImg
              alt={item.node.frontmatter.title}
              src={item.node.frontmatter.thumbnail.childImageSharp.fluid.src}
              fluid={item.node.frontmatter.thumbnail.childImageSharp.fluid}
              imgStyle={{ objectFit: 'contain' }}
            />
          </WorkLink>
          <WorkInfo>
            <WorkLink to={slugString}>
              <WorkTitle>{item.node.frontmatter.title}</WorkTitle>
            </WorkLink>
            <WorkDesc>{item.node.frontmatter.description}</WorkDesc>
          </WorkInfo>
        </WorkCard>
      )
    })
    return worksArray
  }

  return (
    <WorksContainer>
      <WorksWrapper>{getAllWorks(data)}</WorksWrapper>
    </WorksContainer>
  )
}

export default AllWorks

const WorksContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #fff;

  @media screen and (max-width: 768px) {
    padding: 2rem calc((100vw - 1300px) / 2);
  }
`

const WorksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-gap: 20px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 2fr);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const WorkCard = styled.div`
  line-height: 1.5;
  width: 100%;
  ${'' /* height: 420px; */}
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
  ${'' /* height: 350px; */}
  max-width: 100%;
  position: relative;
  filter: brightness(97%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(105%);
  }
`

const WorkTitle = styled.h1`
  padding-top: 5px;
  font-weight: 600;
  color: #212121;
  font-size: 1.6rem;
  letter-spacing: 0.5px;

  &:hover {
    color: #424242;
  }
`

const WorkDesc = styled.p`
  letter-spacing: 0.5px;
`

const WorkLink = styled(Link)`
  height: 100%;
  text-decoration: none;
`
