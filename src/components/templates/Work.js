import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../seo"
import Layout from "../layout"
import Img from "gatsby-image"
import MoreProjects from "../WorkTemplatePage/MoreProjects"
import WorkDetails from "../WorkTemplatePage/WorkDetails"
import MDXContainer from "../WorkTemplatePage/MDXContainer"

class WorkTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx

    var description = post.frontmatter.description + " | Best branding in Cebu."
    return (
      <Layout page="Work">
        <SEO
          title={post.frontmatter.title}
          description={description}
          image={post.frontmatter.thumbnail.childImageSharp.fluid.src}
          keywords={post.frontmatter.services}
        />
        <WorkContainer>
          <WorkContent>
            <WorkDetails frontmatter={post.frontmatter} />
            <WorkImg
               data-sal="fade"
        data-sal-duration="800"
        data-sal-delay="500"
        data-sal-easing="ease"
              alt={post.frontmatter.title}
              src={post.frontmatter.thumbnail.childImageSharp.fluid.src}
              fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
            />
            <MDXContainer mdx={post.body} />
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
              ...GatsbyImageSharpFluid
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
