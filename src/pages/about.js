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

const IndexPage = () => (
  <Layout page="About">
    <SEO
      title="About Us"
      description="Tribox Design is a local branding agency for Local Brands, SMEs and Startups.
We are a passionate team with different expertise but with the same goals. We believe that using our expertise can help you and provide value to make a big impact to the community. Our work consists of Brand Identity Design, Brand Strategy and Graphics."
      image="https://dev-tribox-website-v3.netlify.app/static/0fff671ed187a5595c554d5d7e2b38c3/0e329/izza-cover.jpg"
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
