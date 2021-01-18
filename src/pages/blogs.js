import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout page="Blogs">
    <SEO title="Blogs" />
    <div style={{ margin: '10%', textAlign: 'center', height: '12rem'}}>
    <h1>Coming Soon</h1>
    <p>A wonderful new website!</p>
    <p>Please check back again soon.</p>
    </div>
  </Layout>
)

export default IndexPage
