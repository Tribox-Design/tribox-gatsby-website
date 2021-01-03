import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AllWorks from '../components/WorksPage/AllWorks'

const IndexPage = () => (
  <Layout>
    <SEO title="All posts" />
    <h1>We clarify brands and</h1>
    <h1>simplify the complex.</h1>
    <AllWorks />
  </Layout>
)

export default IndexPage
