import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroBlogs from "../components/BlogsPage/IntroBlogs"
import styled from "styled-components"
import Line from "../components/line"
import LatestBlog from "../components/BlogsPage/LatestBlog"
import { useStaticQuery, graphql, Link } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query AllBlogsQuery {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { isPublishedBlog: { eq: true } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              description
              thumbnail {
                childImageSharp {
                  fluid(quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <Layout page="Blog">
      <SEO title="Blogs" />
      <BlogContainer>
        <AllBlogContent>
          <IntroBlogs />
          <LatestBlog blogPost={data.allMdx.edges[0]} />
          <Line />
        </AllBlogContent>
      </BlogContainer>
    </Layout>
  )
}

export default IndexPage

const BlogContainer = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  color: #fff;
  padding: 6rem 0;

  @media screen and (max-width: 1140px) {
    padding: 6rem 2rem;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-top: 1rem;
    padding: 2rem 0;
  }
`

const AllBlogContent = styled.div`
  z-index: 3;
  max-width: 1140px;
  margin: 0 auto;
  width: 95%;

  @media screen and (max-width: 1140px) {
    padding: 1rem 0;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }
`
