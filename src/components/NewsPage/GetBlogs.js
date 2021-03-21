import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AllNews from './AllNews'

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

  const AllBlogs = data.allMdx.edges
  console.log(AllBlogs)
  AllBlogs.concat(news)
  console.log(AllBlogs)


  return (
    <AllNews news={AllBlogs} />
  )
}

export default GetBlogs
