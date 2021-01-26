import React from "react"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { Link } from "gatsby"

import { menuData } from "../data/MenuData"
import TriboxLogo from "../images/tribox-logo.png"
import TriboxLogoWhite from "../images/tribox-logo-white.png"

const Header = ({ toggle, page }) => {
  return (
    <NavContainer home={page === "Home"}>
      <Nav>
        <NavLink to="/">
          <LogoImg
            src={page === "Home" ? TriboxLogoWhite : TriboxLogo}
            alt="Home"
          />
        </NavLink>
        <Bars onClick={toggle} home={page === "Home"} />
        <NavMenu>
          {menuData.map((props, index) => (
            <NavLink
              primary={page === props.title}
              home={page === "Home"}
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

const NavContainer = styled.div`
  background: ${({ home }) => (home ? "#ff3333" : "#fffff")};
  display: flex;
  text-align: center;
  width: 100%;
  justify-items: center;
  align-items: center;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2.8rem 0 0 0;
  z-index: 300;
  margin: 0 auto;
  max-width: 1188px;
  width: 100%;


  @media screen and (max-width: 768px) {
    padding: 2.8rem 0 0 1rem;
  } 
  /* @media screen and (max-width: 890px) {
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
  color: ${({ primary, home }) =>
    home ? "#fff" : primary ? "#ff3333" : "#1b1b1b"};
  font-size: 18px;
  font-weight: bold;

  &:hover {
    color: ${({ primary }) => (primary ? "#ff3333" : "#424242")};
  }
`

const Bars = styled(FaBars)`
  display: none;
  color: ${({ home }) => (home ? "#fff" : "#1b1b1b")};

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

// const TriboxLogos = styled.i`
//   height: 100%;
//   width: 120px;
//   background-image: url(${TriboxLogo});
//   background-size: contain;
//   fill: white;
//   stroke: white;
//   cursor: pointer;
//   position: absolute;
//   top: 0;
//   left: 0;
//   transform: translateY(-50%, 25%);
// `
