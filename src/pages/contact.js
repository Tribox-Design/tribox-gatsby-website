import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroContact from '../components/ContactPage/IntroContact'
import Line from '../components/line'
import ContactDetails from '../components/ContactPage/ContactDetails'
import ContactUs from '../components/ContactPage/ContactUs'
import LocationMap from "../components/ContactPage/LocationMap"

const IndexPage = () => (
  <Layout page="Contact">
    <SEO title="Contact Us" />
    <IntroContact />
    <Line />
    <ContactDetails />
    <Line />
    <ContactUs />
    <LocationMap />
  </Layout>
)

export default IndexPage
