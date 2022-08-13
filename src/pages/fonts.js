import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AllFonts from "../components/WorksPage/AllFonts"
import IntroFont from "../components/WorksPage/IntroFont"
import TriboxLogo from "../images/tribox-design-logo.jpg"

const seoKeywords =
  "work, strategy, development, design, marketing, online, identity, digital marketing, cebu, brand, branding, branding in cebu, social media marketing, advertising agency, agency, logo design, best logo in cebu, online, identity, boost, sales, business in cebu, grow, local"

const IndexPage = () => (
  <Layout page="Fonts" headerBackground="#ffffff" footerBackground="#ff3333">
    <SEO
      title="Our Fonts"
      description="Defining brands, simplifying the complex. To promote the growth of every Filipino brand through creativity and well-developed strategies."
      image={TriboxLogo}
      keywords={seoKeywords}
    />
    <IntroFont />
    <AllFonts />
  </Layout>
)

export default IndexPage
