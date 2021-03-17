import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

function FeatureTitle(props) {
  if (props.blogPost.node.frontmatter.link) {
    return (
      <ExternalLink
        href={props.blogPost.node.frontmatter.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Title>{props.blogPost.node.frontmatter.title}</Title>
      </ExternalLink>
    )
  }
  var slugString = "/blogs" + props.blogPost.node.fields.slug
  return (
    <FeatureLink to={slugString}>
      <Title>{props.blogPost.node.frontmatter.title}</Title>
    </FeatureLink>
  )
}

const LatestBlog = ({ blogPost }) => {
  return (
    <BlogWrapper>
      <BlogImg
        alt={blogPost.node.frontmatter.title}
        src={blogPost.node.frontmatter.thumbnail.childImageSharp.fluid.src}
        fluid={blogPost.node.frontmatter.thumbnail.childImageSharp.fluid}
        imgStyle={{ objectFit: "contain" }}
      />
        <Description>{blogPost.node.frontmatter.category.toUpperCase()}</Description>
      <FeatureTitle blogPost={blogPost} />
    
        <Description bold="true">{blogPost.node.frontmatter.date}</Description>
    </BlogWrapper>
  )
}

export default LatestBlog

const BlogWrapper = styled.div`
  padding: 3rem 0 0 0;
  justify-content: left;
  align-items: left;
  text-align: left;

  @media screen and (max-width: 1140px) {
    padding: 2.5rem 0;
  }

  @media screen and (max-width: 890px) {
    padding: 2.5rem 0;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0 1rem 0;
  }
`

const Title = styled.h3`
  font-size: 23px;
  font-weight: normal;
  margin: 0;
  padding-top: 8px;
  color: #212121;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  &:hover {
    color: #424242;
  }
`

const Description = styled.p`
  color: #424242;
  font-size: 14px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  letter-spacing: 0.5px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  white-space: pre-wrap;
  padding-top: 1rem;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 12px;
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
