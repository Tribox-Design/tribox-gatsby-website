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
        maxWidth: "768px",
        width: "100%",
        marginBottom: "1.75rem",
        fontSize: "large",
        lineHeight: "1.6",
        fontWeight: "300",
      }}
      {...props}
    />
  ),
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}

const HeadComponents = [
  <script src="https://widget.clutch.co/static/js/widget.js" async />
]

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents(HeadComponents)
}
