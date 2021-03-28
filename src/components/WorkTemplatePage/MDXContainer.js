import React from "react"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

const shortCodes = {
  wrapper: ({ children }) => <>{children}</>,
}

const MDXContainer = ({ mdx }) => {
  return (
    <MarkdownContainer>
      <MDXProvider components={shortCodes}>
        <MDXRenderer>{mdx}</MDXRenderer>
      </MDXProvider>
    </MarkdownContainer>
  )
}

export default MDXContainer

const MarkdownContainer = styled.div`
  padding: 2rem 0;
`
