/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { MDXProvider } from "@mdx-js/react"

const components = {
  p: props => (
    <p
      style={{
        maxWidth: "580px",
        width: "100%",
        margiBottom: "1.75rem",
        fontSize: "large",
      }}
      {...props}
    />
  ),
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
