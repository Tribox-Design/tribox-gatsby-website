import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

function FeatureTitle(props) {
  var slugString = "/blogs" + props.blogPost.node.fields.slug
  if (props.blogPost.node.frontmatter.link) {
    return (
      <ExternalLink href={props.blogPost.node.frontmatter.link} target="_blank" rel="noopener noreferrer">
        <Title>{props.blogPost.node.frontmatter.title}</Title>
      </ExternalLink>
    )
  }
  return (
    <FeatureLink to={slugString}>
      <Title>{props.blogPost.node.frontmatter.title}</Title>
    </FeatureLink>
  )
}

const LatestBlog = ({ blogPost }) => {
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
        <FeatureTitle blogPost={blogPost} />
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
  padding: 3rem 0;

  @media screen and (max-width: 1140px) {
    grid-gap: 1rem;
    padding: 2.5rem 0;
  }

  @media screen and (max-width: 890px) {
    grid-template-columns: 1fr;
    padding: 2.5rem 0;
  }

  @media screen and (max-width: 768px) {
    justify-content: start;
    align-items: start;
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
  color: #000000;
  text-align: left;
  padding: 0 2rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: relative;
    padding: 0;
  }
`

const Title = styled.h3`
  font-size: clamp(1rem, 6vw, 2rem);
  font-weight: bold;
  margin: 0;
  color: #212121;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  &:hover {
    color: #424242;
  }
`

const DescriptionContainer = styled.div`
  padding-top: 0.5rem;

  @media screen and (max-width: 890px) {
    width: 100%;
  }
`

const Description = styled.pre`
  font-weight: 300;
  font-size: 18px;

  white-space: pre-wrap;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

const FeatureLink = styled(Link)`
  height: 100%;
  text-decoration: none;
  color: #000000;
`

const ExternalLink = styled.a`
  height: 100%;
  text-decoration: none;
  color: #000000;
`

const BlogImg = styled(Img)`
  max-width: 100%;
  position: relative;
`
