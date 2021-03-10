import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../seo"
import Layout from "../layout"
import Img from "gatsby-image"
import MoreProjects from "../WorkTemplatePage/MoreProjects"
import WorkDetails from "../WorkTemplatePage/WorkDetails"
import MDXContainer from '../WorkTemplatePage/MDXContainer'
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
        <WorkContainer>
          <WorkContent>
            <WorkImg
              alt={post.frontmatter.title}
              src={post.frontmatter.thumbnail.childImageSharp.fluid.src}
              fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
            />
            <MDXContainer mdx={post.body} />
          </WorkContent>
        </WorkContainer>
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
  max-width: 960px;
  width: 100%;

  @media screen and (max-width: 1230px) {
    padding: 0 2rem;
  }
`

const WorkImg = styled(Img)`
  max-width: 100%;
  position: relative;
`