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
        maxWidth: "768px",
        width: "100%",
        marginBottom: "1.75rem",
        fontSize: "large",
        lineHeight: "1.6",
        fontWeight: "300"
      }}
      {...props}
    />
  ),
  h1: props => (
    <h1
      style={{
        maxWidth: "768px",
        width: "100%",
      }}
      {...props}
    />
  ),
  h2: props => (
    <h2
      style={{
        maxWidth: "768px",
        width: "100%",
      }}
      {...props}
    />
  ),
  h3: props => (
    <h3
      style={{
        maxWidth: "768px",
        width: "100%",
      }}
      {...props}
    />
  ),
  h4: props => (
    <h4
      style={{
        maxWidth: "768px",
        width: "100%",
      }}
      {...props}
    />
  ),
  h5: props => (
    <h5
      style={{
        maxWidth: "768px",
        width: "100%",
      }}
      {...props}
    />
  ),
  h6: props => (
    <h6
      style={{
        maxWidth: "768px",
        width: "100%",
      }}
      {...props}
    />
  ),
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}

const HeadComponents = [
  <script src="https://widget.clutch.co/static/js/widget.js" />
]

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents(HeadComponents)
}