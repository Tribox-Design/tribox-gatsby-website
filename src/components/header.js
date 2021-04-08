import React from "react"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { Link } from "gatsby"
import { menuData } from "../data/MenuData"
import TriboxLogo from "../images/tribox-logo.png"
import TriboxLogoWhite from "../images/tribox-logo-white.png"

const Header = ({ toggle, page, headerBackground }) => {
  const primaryBackground = page === "Home" || page === "About"
  return (
    <NavContainer
      primaryBackground={headerBackground}
      data-sal="fade"
      data-sal-duration="500"
      data-sal-easing="ease"
    >
      <Nav data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
        <NavLink to="/">
          <LogoImg
            src={primaryBackground ? TriboxLogoWhite : TriboxLogo}
            alt="Home"
          />
        </NavLink>
        <Bars onClick={toggle} primaryBackground={primaryBackground} />
        <NavMenu>
          {menuData.map((props, index) => (
            <NavLink
              primary={page === props.title}
              primaryBackground={headerBackground}
              to={props.link}
              key={index}
            >
              {props.title}
            </NavLink>
          ))}
        </NavMenu>
      </Nav>
    </NavContainer>
  )
}

export default Header

/// *********************************************************
/// Styled Components
///
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

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  height: 100%;
  cursor: pointer;
  color: ${({ primary, primaryBackground }) =>
    primaryBackground ? "#fff" : primary ? "#ff3333" : "#1b1b1b"};
  font-size: 18px;
  font-weight: bold;

  &:hover {
    color: ${({ primary, primaryBackground }) =>
      primary && !primaryBackground ? "#ff3333" : "#424242"};
  }
`

const Bars = styled(FaBars)`
  display: none;
  color: ${({ primaryBackground }) => (primaryBackground ? "#fff" : "#1b1b1b")};

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 119%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const LogoImg = styled.img`
  height: 56px;
  position: absolute;
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  stroke: #fff;

  &:hover {
    filter: brightness(105%);
  }
`
