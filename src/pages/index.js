import React from "react"
import IntroBanner from "../components/HomePage/IntroBanner"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeCarousel from "../components/HomePage/HomeCarousel"
import HighlightWorks from "../components/HomePage/HighlightWorks"
import WorkWithUs from "../components/HomePage/WorkWithUs"
import Services from "../components/HomePage/Services"
import TriboxLogo from "../images/tribox-design-logo.jpg"

const IndexPage = () => (
  <Layout page="Home">
    <SEO
      title="Home"
      description="Defining brands, simplifying the complex. Tribox Design is a local branding agency for Local Brands, SMEs and Startups."
      image={TriboxLogo}
    />
    <IntroBanner />
    <HomeCarousel />
    <HighlightWorks />
    <WorkWithUs />
    <Services />
  </Layout>
)

export default IndexPage
