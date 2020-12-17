import React from "react"
import IntroBanner from "../components/HomePage/IntroBanner"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import HomeCarousel from "../components/HomePage/HomeCarousel"
import HighlightWorks from "../components/HomePage/HighlightWorks"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroBanner />
    <HomeCarousel />
    <HighlightWorks />
  </Layout>
)

export default IndexPage
