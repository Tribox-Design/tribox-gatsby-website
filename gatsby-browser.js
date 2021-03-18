/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from "react"
import { MDXProvider } from "@mdx-js/react"

const components = {
  p: props => (
    <p
      style={{
        maxWidth: "580px",
        width: "100%",
        marginBottom: "1.75rem",
        fontSize: "large",
      }}
      {...props}
    />
  ),
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
