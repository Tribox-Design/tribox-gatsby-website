import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroBlogs from "../components/NewsPage/IntroNews"
import styled from "styled-components"
// import LatestBlog from "../components/BlogsPage/LatestBlog"
import AllRemainingBlogs from "../components/NewsPage/AllNews"
import { useStaticQuery, graphql } from "gatsby"
import TriboxLogo from "../images/tribox-design-logo.jpg"

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
              date(formatString: "MMMM DD, YYYY")
              link
              category
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
  return (
    <Layout page="News">
      <SEO
        title="News"
        description="Tribox Design provides the latest news and blogs of our recent activities and works."
        image={TriboxLogo}
      />
      <BlogContainer>
        <AllBlogContent>
          <BlogPoint blogPost={data} />
        </AllBlogContent>
      </BlogContainer>
    </Layout>
  )
}

export default IndexPage

/// *********************************************************
/// Functions
///
function BlogPoint(props) {
  if (props) {
    return (
      <AllBlogContent>
        <IntroBlogs />
        {/* <LatestBlog blogPost={props.blogPost.allMdx.edges[0]} /> */}
        <AllRemainingBlogs blogs={props.blogPost.allMdx} />
      </AllBlogContent>
    )
  }
  return <></>
}

/// *********************************************************
/// Styled Components
///
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
    padding: 2px 0 0 0;
  }
`

const AllBlogContent = styled.div`
  z-index: 3;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 1140px) {
    padding: 1rem 0;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`