import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroBlogs from '../components/BlogsPage/IntroBlogs'

const IndexPage = () => (
  <Layout page="Blog">
    <SEO title="Blogs" />
    <IntroBlogs />
    
  </Layout>
)

export default IndexPage
