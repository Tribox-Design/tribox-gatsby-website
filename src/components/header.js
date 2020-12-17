import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">Tribox</NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((props, index) => (
          <NavLink to={props.link} key={index}>
            {props.title}
          </NavLink>
        ))}
      </NavMenu>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((10vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #424242;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`

const Bars = styled(FaBars)`
  display: none;
  color: #424242;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;


  @media screen and (max-width: 768px) {
    display: none;
  }
`