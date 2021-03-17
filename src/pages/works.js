import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AllWorks from "../components/WorksPage/AllWorks"
import IntroWork from "../components/WorksPage/IntroWork"
import TriboxLogo from "../images/tribox-design-logo.jpg"

const IndexPage = () => (
  <Layout page="Work">
    <SEO
      title="Our Works"
      description="Defining brands, simplifying the complex."
      image={TriboxLogo}
    />
    <IntroWork />
    <AllWorks />
  </Layout>
)

export default IndexPage
