import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AllWorks from "../components/WorksPage/AllWorks"
import IntroWork from "../components/WorksPage/IntroWork"

const IndexPage = () => (
  <Layout page="Work">
    <SEO
      title="Our Works"
      description="Defining brands, simplifying the complex."
    />
    <IntroWork />
    <AllWorks />
  </Layout>
)

export default IndexPage
