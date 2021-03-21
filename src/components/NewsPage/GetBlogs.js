import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AllNews from './AllNews'
import styled from "styled-components"

const GetBlogs = ({ news }) => {
  const data = useStaticQuery(graphql`
    query AllBlogsQuery {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: {
          frontmatter: { isPublishedBlog: { eq: true } }
        }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              category
              thumbnail {
                childImageSharp {
                  fluid(quality: 92) {
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
  var allPosts = news
  const AllBlogs = data.allMdx.edges
  if (AllBlogs.length > 0) {
    allPosts =  AllBlogs.concat(news)
  } 

  if (allPosts.length > 0) {
    return (
      <AllNews allPosts={allPosts} />
    )
  }

  return (
    <IntroContainer>
      <IntroContent>
        <IntroItems>
          <IntroH1>Watch out for fresh contents here, coming soon.</IntroH1>
        </IntroItems>
      </IntroContent>
    </IntroContainer>
  )
  
}

export default GetBlogs

const IntroContainer = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  color: #fff;
  padding: 8rem 0;

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-top: 1rem;
    padding: 2rem 0;
  }
`

const IntroContent = styled.div`
  z-index: 3;
  max-width: 1140px;
  margin: 0 auto;
`

const IntroItems = styled.div`
  align-items: start;
  text-align: start;
  max-height: 100%;
  color: #000000;
  line-height: 1.1;
  width: 80%;
`

const IntroH1 = styled.h1`
  font-size: clamp(1.4rem, 4vw, 3rem);
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    font-size: clamp(2.5rem, 6vw, 4rem);
  }
`

