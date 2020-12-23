import React from "react"
import Helmet from 'react-helmet'
import { graphql } from "gatsby"

export default function Work({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  console.log(frontmatter)
  return (
    <div className="work-container">
      <div className="work-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        {/* <div
          className="work-post-content" 
          dangerouslySetInnerHTML={{ __html: html }}
        /> */}
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query WorkPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`