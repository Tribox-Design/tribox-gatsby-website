import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AllWorks from '../components/WorksPage/AllWorks'

const IndexPage = () => (
  <Layout>
    <SEO title="All posts" />
    
    <h1>This is our works!</h1>
    <AllWorks />
  </Layout>
)

export default IndexPage
