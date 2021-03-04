import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const AllWorks = () => {
  const data = useStaticQuery(graphql`
    query AllWorksQuery {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { isPublishedWork: { eq: true } } }
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

  function getAllWorks(data) {
    const worksArray = []
    data.allMdx.edges.forEach((item, index) => {
      var slugString = "/works" + item.node.fields.slug
      worksArray.push(
        <WorkCard key={index}>
          <WorkLink to={slugString}>
            <WorkImg
              alt={item.node.frontmatter.title}
              src={item.node.frontmatter.thumbnail.childImageSharp.fluid.src}
              fluid={item.node.frontmatter.thumbnail.childImageSharp.fluid}
              imgStyle={{ objectFit: "contain" }}
            />
          </WorkLink>
          <WorkInfo>
            <WorkLink to={slugString}>
              <WorkTitle>{item.node.frontmatter.title}</WorkTitle>
            </WorkLink>
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
  display: flex;
  width: 100%;
  margin-bottom: 4rem;
`

const WorksWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-gap: 20px 40px;
  justify-items: center;
  max-width: 1140px;
  width: 100%;

  @media screen and (max-width: 1140px) {
    padding: 0 2rem;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 2fr);
  }

  @media screen and (max-width: 700px) {
    grid-gap: 30px;
    grid-template-columns: 1fr;
    width: 100%;
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
  padding-top: 5px;
  font-weight: 600;
  color: #212121;
  font-size: 20px;
  letter-spacing: 0.5px;

  &:hover {
    color: #424242;
  }

  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
`

const WorkLink = styled(Link)`
  height: 100%;
  text-decoration: none;
`
