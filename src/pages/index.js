import React from "react"
import IntroBanner from "../components/HomePage/IntroBanner"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeCarousel from "../components/HomePage/HomeCarousel"
import HighlightWorks from "../components/HomePage/HighlightWorks"
import WorkWithUs from "../components/HomePage/WorkWithUs"
import Services from "../components/HomePage/Services"

const IndexPage = () => (
  <Layout page="Home">
    <SEO title="Home" description="Defining brands, simplifying the complex." />
    <IntroBanner />
    <HomeCarousel />
    <HighlightWorks />
    <WorkWithUs />
    <Services />
  </Layout>
)

export default IndexPage
