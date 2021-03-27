import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AllWorks from "../components/WorksPage/AllWorks"
import IntroWork from "../components/WorksPage/IntroWork"
import TriboxLogo from "../images/tribox-design-logo.jpg"

const seoKeywords =
  "work, strategy, development, business, marketing, online, identity, digital marketing, cebu, brand, branding in cebu, social media marketing, advertising agency, agency, logo design, best logo in cebu, online, identity, boost, sales, business in cebu, grow"

const IndexPage = () => (
  <Layout page="Work">
    <SEO
      title="Our Works"
      description="Defining brands, simplifying the complex. To promote the growth of every Filipino brand through creativity and well-developed strategies."
      image={TriboxLogo}
      keywords={seoKeywords}
    />
    <IntroWork />
    <AllWorks />
  </Layout>
)

export default IndexPage
