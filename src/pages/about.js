import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroAbout from "../components/AboutPage/IntroAbout"
import Line from "../components/line"
import AboutStaff from "../components/AboutPage/AboutStaff"
import MissionVision from "../components/AboutPage/MissionVision"
import OurServices from "../components/AboutPage/OurServices"
import OurClients from "../components/AboutPage/OurClients"

const IndexPage = () => (
  <Layout page="About">
    <SEO title="About" />
    <IntroAbout />
    <Line />
    <AboutStaff />
    <Line />
    <MissionVision />
    <Line />
    <OurServices />
    <Line />
    <OurClients />
  </Layout>
)

export default IndexPage
