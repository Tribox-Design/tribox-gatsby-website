import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const AllRemainingBlogs = ({ blogs }) => {
  function getAllBlogs(data) {
    const blogsArray = []
    data.edges.forEach((item, index) => {
      if (index == 0) {
        return
      }
      var slugString = "/blogs" + item.node.fields.slug
      blogsArray.push(
        <BlogCard key={index}>
          <BlogLink to={slugString}>
            <BlogImg
              alt={item.node.frontmatter.title}
              src={item.node.frontmatter.thumbnail.childImageSharp.fluid.src}
              fluid={item.node.frontmatter.thumbnail.childImageSharp.fluid}
              imgStyle={{ objectFit: "contain" }}
            />
          </BlogLink>
          <BlogInfo>
            <BlogLink to={slugString}>
              <BlogTitle>{item.node.frontmatter.title}</BlogTitle>
            </BlogLink>
            <BlogDesc>{item.node.frontmatter.description}</BlogDesc>
          </BlogInfo>
        </BlogCard>
      )
    })
    return blogsArray
  }

  return (
    <BlogContainer>
      <BlogWrapper>{getAllBlogs(blogs)}</BlogWrapper>
    </BlogContainer>
  )
}

export default AllRemainingBlogs

const BlogContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 3rem 0;
`

const BlogWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-gap: 80px;
  max-width: 1140px;
  width: 100%;

  @media screen and (max-width: 1140px) {
    padding: 0 2rem;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 2fr);
  }

  @media screen and (max-width: 768px) {
    padding: 0;
  }

  @media screen and (max-width: 700px) {
    grid-gap: 30px;
    grid-template-columns: 1fr;
    width: 100%;
  }
`

const BlogCard = styled.div`
  line-height: 1.5;
  width: 100%;
  position: relative;
`

const BlogInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const BlogImg = styled(Img)`
  display: block;
  width: auto;
  height: auto;

  position: relative;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`

const BlogTitle = styled.h3`
  padding-top: 5px;
  font-weight: 600;
  color: #212121;
  font-size: 20px;
  letter-spacing: 0.5px;
  margin: 0;

  &:hover {
    color: #424242;
  }

  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
`

const BlogDesc = styled.p`
  color: #212121;
  font-size: 16px;
  letter-spacing: 0.5px;
  text-align: left;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

const BlogLink = styled(Link)`
  height: 100%;
  text-decoration: none;
`
