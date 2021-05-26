import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AllPortfolio from "../components/PortfolioPage/AllPortfolio"
import IntroPortfolio from "../components/PortfolioPage/IntroPortfolio"
import TriboxLogo from "../images/tribox-design-logo.jpg"
import Footer from "../components/footer"
import styled from "styled-components"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import { Link } from "gatsby"

const seoKeywords =
  "work, strategy, development, design, marketing, online, identity, digital marketing, cebu, brand, branding, branding in cebu, social media marketing, advertising agency, agency, logo design, best logo in cebu, online, identity, boost, sales, business in cebu, grow, local"

const IndexPage = () => (
  <>
    <GlobalStyle />
    <NavContainer
      data-sal="fade"
      data-sal-duration="500"
      data-sal-easing="ease"
    >
      <Nav data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
        <NavLink to="/">
          <LogoImg src={TriboxLogo} alt="Home" />
        </NavLink>
      </Nav>
    </NavContainer>
    <div>
      <IntroPortfolio />
      <AllPortfolio />
    </div>
    <Footer footerBackground="#ff3333" />
  </>
)

export default IndexPage

const NavContainer = styled.div`
  background: ${({ primaryBackground }) => primaryBackground};
  display: flex;
  text-align: center;
  width: 100%;
  justify-items: center;
  align-items: center;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  z-index: 300;
  margin: 0 auto;
  max-width: 1188px;
  width: 100%;
  padding: 2.8rem 0 0 0;

  @media screen and (max-width: 1140px) {
    width: 99%;
  }

  @media screen and (max-width: 768px) {
    width: 96.7%;
  }
  ${
    "" /* @media screen and (max-width: 1140px) {
    padding: 2.8rem 0 0 .5rem;
  } 

  @media screen and (max-width: 768px) {
    padding: 2.8rem 0 0 .5rem;
  }  */
  }/* @media screen and (max-width: 890px) {
    padding: 2.8rem 0 3rem 1rem;
  }*/
`

const NavLink = styled(Link)`
  text-decoration: none;
`

const LogoImg = styled.img`
  height: 56px;
  position: absolute;
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  stroke: #ffffff;

  &:hover {
    filter: brightness(105%);
  }
`
