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
    <SEO title="About Us" />
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
