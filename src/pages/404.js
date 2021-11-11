import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import TriboxLogo from "../images/tribox-design-logo.jpg"
import SEO from "../components/seo"

const seoKeywords = "tyrone, chris, abad, flutter, gatsby, react, developer, CTO"

const NotFoundPage = () => (
  <Layout>
  <SEO
      title="404: Not found"
      description="Made with <3 by Tyrone Chris Abad. If you read this then congratulations! Contact me with this screenshot and I'll give you a prize."
      image={TriboxLogo}
      keywords={seoKeywords}
    />
    <Container>
      <Content>
        <IntroP>Error: 404</IntroP>
        <h1>The page you are looking for doesn't exist.</h1>
        <StyledLink to="/">Back to home</StyledLink>
      </Content>
    </Container>
  </Layout>
)

export default NotFoundPage

/// *********************************************************
/// Styled Components
///
const Container = styled.div`
  display: flex;
  background: #fff;
  width: 100%;
  padding: 6rem 0;

  justify-content: start;
  align-items: start;
`

const Content = styled.div`
  max-width: 1140px;
  z-index: 3;
  width: 100%;
  height: 40vh;
  margin: 0 auto;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

const StyledLink = styled(Link)`
  font-size: 18px;
  height: 100%;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

const IntroP = styled.div`
  font-size: 21px;
  color: #424242;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
