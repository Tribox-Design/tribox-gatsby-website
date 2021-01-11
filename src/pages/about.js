import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroAbout from '../components/AboutPage/IntroAbout'
import Line from '../components/line'
import AboutStaff from '../components/AboutPage/AboutStaff'
import MissionVision from '../components/AboutPage/MissionVision'

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <IntroAbout />
    <Line />
    <AboutStaff />
    <Line />
    <MissionVision />
  </Layout>
)

export default IndexPage
