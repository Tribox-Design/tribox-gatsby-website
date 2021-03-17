import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

const AllRemainingNews = ({ blogs }) => {
  return <Container>{getAllNews(blogs)}</Container>
}

export default AllRemainingNews

/// *********************************************************
/// Functions
///
function FeatureTitle(props) {
  if (props.item.node.frontmatter.link) {
    return (
      <ExternalLink
        href={props.item.node.frontmatter.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BlogTitle>{props.item.node.frontmatter.title}</BlogTitle>
      </ExternalLink>
    )
  }
  var slugString = "/articles" + props.item.node.fields.slug
  return (
    <BlogLink to={slugString}>
      <BlogTitle>{props.item.node.frontmatter.title}</BlogTitle>
    </BlogLink>
  )
}

function getAllNews(data) {
  var blogsArray = []
  var blogWrapper = []
  var isTwoColumns = false
  data.edges.forEach((item, index) => {
    blogsArray.push(
      <BlogCard key={index}>
        <BlogImg
          alt={item.node.frontmatter.title}
          src={item.node.frontmatter.thumbnail.childImageSharp.fluid.src}
          fluid={item.node.frontmatter.thumbnail.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
        />
        <BlogInfo>
          <BlogDesc>{item.node.frontmatter.category.toUpperCase()}</BlogDesc>
          <FeatureTitle item={item} />
          {/* <BlogDesc>{item.node.frontmatter.date}</BlogDesc> */}
        </BlogInfo>
      </BlogCard>
    )
    if (isTwoColumns) {
      if (blogsArray.length > 1) {
        isTwoColumns = false
        blogWrapper.push(
          <StaggeredBlogs key={"TwoColumns" + index} isTwoColumns={true}>
            {blogsArray}
          </StaggeredBlogs>
        )
        blogsArray = []
      } else {
        if (data.edges.length - 1 === index) {
          blogWrapper.push(
            <StaggeredBlogs key={"TwoColumns" + index} isTwoColumns={true}>
              {blogsArray}
            </StaggeredBlogs>
          )
        }
      }
    } else {
      if (blogsArray.length > 2) {
        isTwoColumns = true
        blogWrapper.push(
          <StaggeredBlogs key={"ThreeColumns" + index} isTwoColumns={false}>
            {blogsArray}
          </StaggeredBlogs>
        )
        blogsArray = []
      } else {
        if (data.edges.length - 1 === index) {
          blogWrapper.push(
            <StaggeredBlogs key={"ThreeColumns" + index} isTwoColumns={false}>
              {blogsArray}
            </StaggeredBlogs>
          )
        }
      }
    }
  })
  return blogWrapper
}

/// *********************************************************
/// Styled Components
///
const Container = styled.div`
  padding-top: 1rem;
`

const StaggeredBlogs = styled.div`
  width: 100%;
  display: inline-grid;
  margin: 4rem 0 0 0;
  grid-template-columns: ${({ isTwoColumns }) =>
    isTwoColumns ? "repeat(2, 2fr)" : "repeat(3, 3fr)"};
  grid-gap: ${({ isTwoColumns }) => (isTwoColumns ? "60px" : "30px")};

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 2fr);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    margin-top: 2rem;
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
  padding-top: 2px;
  color: #000000;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 0.5px;
  margin: 0;
  text-align: left;

  &:hover {
    color: #424242;
  }

  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
`

const BlogDesc = styled.p`
  color: #424242;
  font-size: 12px;
  ${"" /* font-weight: ${({ bold }) => (bold ? "bold" : "normal")}; */}
  font-weight: normal;
  letter-spacing: 0.75px;
  text-align: left;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  white-space: pre-wrap;
  margin: 0;
  padding-top: 14px;
`

const BlogLink = styled(Link)`
  height: 100%;
  text-decoration: none;
`

const ExternalLink = styled.a`
  height: 100%;
  text-decoration: none;
`
