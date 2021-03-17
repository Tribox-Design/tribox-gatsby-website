import React from "react"
import styled from "styled-components"
import { menuData } from "../data/MenuData"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((props, index) => (
            <DropdownLink to={props.link} key={index}>
              {props.title}
            </DropdownLink>
          ))}
        </DropdownMenu>
      </DropdownWrapper>
    </DropdownContainer>
  )
}

export default Dropdown

/// *********************************************************
/// Styled Components
///
const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #ff3333;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`

const Icon = styled.div`
  position: absolute;
  top: 2.2rem;
  right: 1.7rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

const CloseIcon = styled(FaTimes)`
  color: #fff;
`

const DropdownWrapper = styled.div``

const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`

const DropdownLink = styled(Link)`
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #000d1a;
  }
`
