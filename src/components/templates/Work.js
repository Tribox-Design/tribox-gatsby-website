import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../seo"
import Layout from "../layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import MoreProjects from "../WorkTemplatePage/MoreProjects"
import WorkDetails from "../WorkTemplatePage/WorkDetails"
// import ProblemSolution from "../WorkTemplatePage/ProblemSolution"

class WorkTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    return (
      <Layout page="Work">
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <WorkContainer>
          <WorkContent>
            <WorkDetails frontmatter={post.frontmatter} />
            <WorkImg
              alt={post.frontmatter.title}
              src={post.frontmatter.thumbnail.childImageSharp.fluid.src}
              fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
            />
            {/* <ProblemSolution frontmatter={post.frontmatter} /> */}
            <MarkdownContainer>
              <MDXRenderer>{post.body}</MDXRenderer>
            </MarkdownContainer>
            <MoreProjects currentPage={post.frontmatter.title} />
          </WorkContent>
        </WorkContainer>
      </Layout>
    )
  }
}

export default WorkTemplate

export const pageQuery = graphql`
  query WorkPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        client
        description
        services
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

const WorkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`

const WorkContent = styled.div`
  z-index: 3;
  max-width: 1140px;
  width: 100%;

  @media screen and (max-width: 1230px) {
    padding: 0 2rem;
  }
`

const WorkImg = styled(Img)`
  max-width: 100%;
  position: relative;
`

const MarkdownContainer = styled.div`
  padding: 3rem 0;
`
