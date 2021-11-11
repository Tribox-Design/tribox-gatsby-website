import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroContact from "../components/ContactPage/IntroContact"
import Clutch from "../components/clutch"
import ContactDetails from "../components/ContactPage/ContactDetails"
import ContactUs from "../components/ContactPage/ContactUs"
import LocationMap from "../components/ContactPage/LocationMap"
import TriboxLogo from "../images/tribox-design-logo.jpg"

const seoKeywords =
  "Brand Strategy, Illustration, Brand Identity, Sound Branding, Digital Marketing, Web Development, Packaging Design, Mobile App Development"

const IndexPage = () => (
  <Layout page="Contact" headerBackground="#ffffff" footerBackground="#ff3333">
    <SEO
      title="Contact Us"
      description="We love cluttered things, mind and ideas. Let's solve this together. Contact Tribox Design and let us know how we can help. Contact Number: +639174483092 | Address: 1401 Park Centrale Building, IT Park, Lahug, Apas, Cebu City. "
      image={TriboxLogo}
      keywords={seoKeywords}
    />
    <IntroContact />
    <ContactUs />
    <ContactDetails />
    <Clutch />
    <LocationMap />
  </Layout>
)

export default IndexPage
