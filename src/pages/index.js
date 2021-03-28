import React from "react"
import IntroBanner from "../components/HomePage/IntroBanner"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeCarousel from "../components/HomePage/HomeCarousel"
import HighlightWorks from "../components/HomePage/HighlightWorks"
import WorkWithUs from "../components/HomePage/WorkWithUs"
import Services from "../components/HomePage/Services"
import TriboxLogo from "../images/tribox-design-logo.jpg"

const seoKeywords =
  "work, strategy, development, design, marketing, online, identity, digital marketing, cebu, brand, branding, branding in cebu, social media marketing, advertising agency, agency, logo design, best logo in cebu, online, identity, boost, sales, business in cebu, grow"

const IndexPage = () => (
  <Layout page="Home">
    <SEO
      title="Tribox Design"
      description="Tribox Design is a Cebu based local branding agency for Local Brands, SMEs and Startups. We believe that using our expertise can help you provide value to make a big impact to the community. Our work consists of Brand Strategy, Brand Identity, and Digital Marketing."
      image={TriboxLogo}
      keywords={seoKeywords}
    />
    <IntroBanner />
    <HomeCarousel />
    <HighlightWorks />
    <WorkWithUs />
    <Services />
  </Layout>
)

export default IndexPage
