import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroAbout from "../components/AboutPage/IntroAbout"
import Line from "../components/line"
import TheDreamTeam from "../components/AboutPage/TheDreamTeam"
import MissionVision from "../components/AboutPage/MissionVision"
import OurServices from "../components/AboutPage/OurServices"
import OurClients from "../components/AboutPage/OurClients"
import WeAreFeatured from "../components/AboutPage/WeAreFeatured"
import TriboxLogo from "../images/tribox-design-logo.jpg"

const IndexPage = () => (
  <Layout page="About">
    <SEO
      title="About Us"
      description="Tribox Design is a local branding agency for Local Brands, SMEs and Startups.
We are a passionate team with different expertise but with the same goals. We believe that using our expertise can help you and provide value to make a big impact to the community. Our work consists of Brand Identity Design, Brand Strategy and Graphics."
      image={TriboxLogo}
    />
    <IntroAbout />
    <MissionVision />
    <Line />
    <TheDreamTeam />
    <Line />
    <OurServices />
    <Line />
    <OurClients />
    <Line />
    <WeAreFeatured />
  </Layout>
)

export default IndexPage
