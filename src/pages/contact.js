import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroContact from '../components/ContactPage/IntroContact'
import Clutch from '../components/clutch'
import ContactDetails from '../components/ContactPage/ContactDetails'
import ContactUs from '../components/ContactPage/ContactUs'
import LocationMap from "../components/ContactPage/LocationMap"

const IndexPage = () => (
  <Layout page="Contact">
    <SEO title="Contact Us" />
    <IntroContact />
    <ContactUs />
    <ContactDetails />
    <Clutch />
    <LocationMap />
  </Layout>
)

export default IndexPage
