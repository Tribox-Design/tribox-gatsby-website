import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../seo"
import Layout from "../layout"
import Img from "gatsby-image"
import MoreProjects from "../WorkTemplatePage/MoreProjects"
import WorkDetails from "../WorkTemplatePage/WorkDetails"
import MDXContainer from "../WorkTemplatePage/MDXContainer"
// import ProblemSolution from "../WorkTemplatePage/ProblemSolution"

class BlogTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    return (
      <Layout page="Blog">
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={post.frontmatter.thumbnail.childImageSharp.fluid.src}
        />

        <BlogContainer>
          <BlogContent>
            <Title>{post.frontmatter.title}</Title>
            <Date>{post.frontmatter.date}</Date>
            <WorkImg
              alt={post.frontmatter.title}
              src={post.frontmatter.thumbnail.childImageSharp.fluid.src}
              fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
            />
            <MDXWrapper>
              <MDXContainer mdx={post.body} />
            </MDXWrapper>
          </BlogContent>
        </BlogContainer>
      </Layout>
    )
  }
}

export default BlogTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
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
`

const Title = styled.h1`
  font-size: clamp(1.4rem, 5vw, 3.5rem);
  font-weight: bold;
  letter-spacing: -1px;
  margin-top: 0;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    font-size: clamp(2.5rem, 6vw, 4rem);
  }
`

const Date = styled.p`
  font-size: 16px;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

const BlogContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const BlogContent = styled.div`
  z-index: 3;
  max-width: 1140px;
  width: 100%;

  @media screen and (max-width: 1230px) {
    padding: 0 2rem;
  }
`

const WorkImg = styled(Img)`
  max-width: 1140px;
  position: relative;
`

const MDXWrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
`
