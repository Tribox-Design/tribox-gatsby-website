import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroContact from "../components/ContactPage/IntroContact"
import Clutch from "../components/clutch"
import ContactDetails from "../components/ContactPage/ContactDetails"
import ContactUs from "../components/ContactPage/ContactUs"
import LocationMap from "../components/ContactPage/LocationMap"
import TriboxLogo from "../images/tribox-design-logo.jpg"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <Layout page="Contact">
    <SEO
      title="Contact Us"
      description="We love cluttered things, mind and ideas. Let's solve this together. Contact Tribox Design and let us know how we can help. Contact Number: +639174483092 | Address: 1401 Park Centrale Building, IT Park, Lahug, Apas, Cebu City. "
      image={TriboxLogo}
    />
    <Helmet>
      <script src="https://widget.clutch.co/static/js/widget.js" />
    </Helmet>
    <IntroContact />
    <ContactUs />
    <ContactDetails />
    <Clutch />
    <LocationMap />
  </Layout>
)

export default IndexPage
