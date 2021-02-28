import React from "react"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../styles/mdxstyles.css"

const MDXContainer = ({mdx}) => {
  return (
    <MarkdownContainer>
      <MDXRenderer>{mdx}</MDXRenderer>
    </MarkdownContainer> 
  )
}

const MarkdownContainer = styled.div`
  padding: 3rem 0;
`
export default MDXContainer
