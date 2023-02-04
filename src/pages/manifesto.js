import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TriboxLogo from "../images/tribox-design-logo.jpg"
import IntroManifesto from "../components/ManifestoPage/IntroManifesto"
import ManifestoContent from "../components/ManifestoPage/ManifestoContent"
import Line from "../components/line"
import OurProcess from "../components/ManifestoPage/OurProcess"
import ReadyToTalk from "../components/ManifestoPage/ReadyToTalk"

const seoKeywords =
  "work, strategy, development, design, marketing, online, identity, digital marketing, cebu, brand, branding, branding in cebu, social media marketing, advertising agency, agency, logo design, best logo in cebu, online, identity, boost, sales, business in cebu, grow, local"

const IndexPage = () => (
  <Layout page="Manifesto" headerBackground="#ffffff" footerBackground="#000000">
    <SEO
      title="Manifesto"
      description="Defining brands, simplifying the complex. To promote the growth of every Filipino brand through creativity and well-developed strategies."
      image={TriboxLogo}
      keywords={seoKeywords}
    />
    <IntroManifesto />
    <Line />
    <ManifestoContent />
    <Line />
    <OurProcess />
    <ReadyToTalk />
  </Layout>
)

export default IndexPage
