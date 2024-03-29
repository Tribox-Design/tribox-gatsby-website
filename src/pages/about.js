import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroAbout from "../components/AboutPage/IntroAbout"
import Line from "../components/line"
import TheDreamTeam from "../components/AboutPage/TheDreamTeam"
import OurServices from "../components/AboutPage/OurServices"
import Featured from "../components/AboutPage/Featured"
import Affiliation from "../components/AboutPage/Affiliation"
import TriboxLogo from "../images/tribox-logo-2022.png"
import Awards from "../components/AboutPage/Awards"

const seoKeywords =
  "Brand Positioning, Label/Packaging Design, Brand Messaging, Brand Identity Design, Digital Marketing, Brand Naming, Illustration, Brand Evaluation Research, Website Development"

const IndexPage = () => (
  <Layout page="About" headerBackground="#000000" footerBackground="#000000">
    <SEO
      title="About Us"
      description="Tribox Design and Advertising OPCorp. is a Cebu based Branding and Advertising agency founded in 2019 by three entrepreneurs and creatives, Inusentes A. Catapusan Jr. (CEO), Regine Marie V. Ylaya (COO), and Tyrone Chris B. Abad (CTO). The company’s line of business includes Brand Strategy, Brand Identity, Graphic Design, Web Development, and Mobile Development. Our mission is to promote the growth of local SMEs and startup businesses through strategy and creativity. We aim to level the playing field for artists and entrepreneurs so they can express their creativity, enhance their craft, and fuel their passion to achieve their individual goals. We envision a community of artists and entrepreneurs driven by their aspirations and passion for their craft to unlock opportunities and attain success."
      image={TriboxLogo}
      keywords={seoKeywords}
    />
    <IntroAbout />
    <TheDreamTeam />
    <Line />
    <OurServices />
    <Line />
    <Affiliation />
    <Line />
    <Featured />
    <Line />
    <Awards />
  </Layout>
)

export default IndexPage
