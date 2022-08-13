import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../seo"
import Layout from "../layout"
import MDXContainer from "../WorkTemplatePage/MDXContainer"

class FontTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    var description = post.frontmatter.description + " | Best branding in Cebu."
    return (
      <Layout page="Font" headerBackground="#ffffff" footerBackground="#ff3333">
        <SEO
          title={post.frontmatter.title}
          description={description}
          image={post.frontmatter.thumbnail.childImageSharp.fluid.originalImg}
          keywords={post.frontmatter.services}
        />
        <BlogContainer>
          <BlogContent>
            <Title>{post.frontmatter.title}</Title>
            <Date>{post.frontmatter.date}</Date>
          </BlogContent>
          <WorkImg
            alt={post.frontmatter.title}
            src={post.frontmatter.thumbnail.childImageSharp.fluid.originalImg}
          />
          <BlogContent>
            <MDXContainer mdx={post.body} />
          </BlogContent>
        </BlogContainer>
      </Layout>
    )
  }
}

export default FontTemplate

export const pageQuery = graphql`
  query FontPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        client
        description
        services
        featuredOn {
          featured {
            link
            name
          }
        }
        thumbnail {
          childImageSharp {
            fluid(quality: 100) {
              originalImg
            }
          }
        }
      }
    }
  }
`

/// *********************************************************
/// Styled Components
///
const BlogContainer = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6rem 0 2rem 0;

  @media screen and (max-width: 768px) {
    padding: 4rem 0 0 0;
  }
`

const BlogContent = styled.div`
  z-index: 3;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 1230px) {
    padding: 0 2rem;
  }
`

const Title = styled.h1`
  font-size: clamp(2rem, 5.5vw, 3.8rem);
  font-weight: bold;
  letter-spacing: -1px;
  margin-top: -4px;
  margin-bottom: 0;
  
  @media screen and (max-width: 868px) {
    font-size: clamp(2rem, 4vw, 3.7rem);
    margin-top: 0;
  }
`

const Date = styled.p`
  font-size: 16px;
  letter-spacing: .5px;
  margin-top: 8px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

const WorkImg = styled.img`
  max-width: 100%;
  position: relative;
  margin-top: 3rem;
`
