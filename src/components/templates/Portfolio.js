import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import WorkDetails from "../WorkTemplatePage/WorkDetails"
import MDXContainer from "../WorkTemplatePage/MDXContainer"
import Footer from "../footer"
import TriboxLogo from "../../images/tribox-logo.png"
import { Link } from "gatsby"
import { GlobalStyle } from "../styles/GlobalStyles"
import { Helmet } from "react-helmet"

class PortfolioTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    return (
      <div>
        <GlobalStyle />
        <Helmet>
          <meta name={`robots`} content={`${`noindex`},${`nofollow`}`} />
          <link rel="canonical" href="https://triboxdesign.com/" />
        </Helmet>
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
        <WorkContainer>
          <WorkContent>
            <WorkDetails frontmatter={post.frontmatter} />
            <WorkImg
              alt={post.frontmatter.title}
              src={post.frontmatter.thumbnail.childImageSharp.fluid.originalImg}
            />
            <MDXContainer mdx={post.body} />
          </WorkContent>
        </WorkContainer>
        <Footer footerBackground="#ff3333" />
      </div>
    )
  }
}

export default PortfolioTemplate

export const pageQuery = graphql`
  query PortfolioPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        client
        description
        services
        featuredOn {
          featured {
            link
            name
          }
        }
        thumbnail {
          childImageSharp {
            fluid(quality: 100) {
              originalImg
            }
          }
        }
      }
    }
  }
`

/// *********************************************************
/// Styled Components
///
const WorkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`

const WorkContent = styled.div`
  z-index: 3;
  max-width: 1140px;
  width: 100%;

  @media screen and (max-width: 1230px) {
    padding: 0 2rem;
  }
`

const WorkImg = styled.img`
  max-width: 100%;
  position: relative;
`

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
  max-width: 1140px;
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
