import React from "react"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"

const MDXContainer = ({mdx}) => {
  return (
    <MarkdownContainer>
      <MDXRenderer>{mdx}</MDXRenderer>
    </MarkdownContainer> 
  )
}

export default MDXContainer

const MarkdownContainer = styled.div`
  padding: 3rem 0;
`
