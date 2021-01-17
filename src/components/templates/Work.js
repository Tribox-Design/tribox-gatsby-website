import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../seo"
import Layout from "../layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

// export default function Work({ data }) {
//   const { markdownRemark } = data
//   const { frontmatter, html } = markdownRemark
//   console.log(frontmatter)
//   return (
//     <div className="work-container">
//       <div className="work-post">
//         <h1>{frontmatter.title}</h1>
//         <h2>{frontmatter.date}</h2>
//         {/* <div
//           className="work-post-content" 
//           dangerouslySetInnerHTML={{ __html: html }}
//         /> */}
//       </div>
//     </div>
//   )
// }

class WorkTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout page="Works">
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <WorkContainer>
          <WorkContent>
            <WorkWrapper>
              <LeftContainer>
                <TitleContainer>
                  <Title>{post.frontmatter.title}</Title>
                </TitleContainer>
                <DescriptionContainer>
                  <Description>{post.frontmatter.description}</Description>
                </DescriptionContainer>
              </LeftContainer>
              <RightContainer>
                <ClientContainer>
                  <ClientTitle>Client</ClientTitle>
                  <Client>{post.frontmatter.client}</Client>
                </ClientContainer>
                <ServicesContainer>
                  <ServicesTitle>Services</ServicesTitle>
                  <Services>{post.frontmatter.services}</Services>
                </ServicesContainer>
              </RightContainer>
              
            </WorkWrapper>
            <MarkdownContainer>
              <MDXRenderer>{post.body}</MDXRenderer>
            </MarkdownContainer>

            <MoreWorksContainer>

            </MoreWorksContainer>

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
      frontmatter {
        client
        description
        thumbnail {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        title
      }
      body
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

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

const WorkWrapper = styled.div`
  display: flex;
  padding: 2rem 0;

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`

const LeftContainer = styled.div`
  width: 80%;
  display: inline-block;
  padding-right: 4rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-right: 0rem;
    display: relative;
  }
`

const RightContainer = styled.div`
  width: 20%;
  display: inline-block;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: relative;
  }
`

const TitleContainer = styled.div`

`

const Title = styled.h1`
  display: flex;
  font-size: clamp(1rem, 3vw, 1.8rem);
  letter-spacing: 1px;
  font-weight: bold;
`

const DescriptionContainer = styled.div`
  padding-top: 1rem;
`

const Description = styled.p`
  ${'' /* font-size: clamp(1rem, 3vw, 1.4rem); */}
  font-weight: 300;
`

const ClientContainer = styled.div`

`

const ClientTitle = styled.p`
  ${'' /* font-size: clamp(1rem, 2vw, 1.2rem); */}
  font-weight: 600;
`

const Client = styled.p`
  ${'' /* font-size: clamp(1rem, 2vw, 1.2rem); */}
  font-weight: 300;
  padding-top: 0.5rem;
`

const ServicesContainer = styled.div`
  padding-top: 2rem;
`

const ServicesTitle = styled.p`
  ${'' /* font-size: clamp(1rem, 2vw, 1.2rem); */}
  font-weight: 600;
`

const Services = styled.p`
  ${'' /* font-size: clamp(1rem, 2vw, 1.2rem); */}
  font-weight: 300;
  padding-top: 0.5rem;
`

const MarkdownContainer = styled.div`
  padding: 1rem 0;
`

const MoreWorksContainer = styled.div`
  padding: 2rem 0;
`