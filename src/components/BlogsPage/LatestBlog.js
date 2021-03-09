import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const LatestBlog = ({ blogPost }) => {
  console.log(blogPost)
  return (
    <BlogWrapper>
      <LeftContainer>
      <BlogImg
              alt={blogPost.node.frontmatter.title}
              src={blogPost.node.frontmatter.thumbnail.childImageSharp.fluid.src}
              fluid={blogPost.node.frontmatter.thumbnail.childImageSharp.fluid}
              imgStyle={{ objectFit: "contain" }}
            />
      </LeftContainer>
      <RightContainer>
        <Title>{blogPost.node.frontmatter.title}</Title>
        <DescriptionContainer>
          <Description>{blogPost.node.frontmatter.description}</Description>
        </DescriptionContainer>
      </RightContainer>
    </BlogWrapper>
  )
}

export default LatestBlog

const BlogWrapper = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr;
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

const BlogImg = styled(Img)`
  max-width: 100%;
  position: relative;
`