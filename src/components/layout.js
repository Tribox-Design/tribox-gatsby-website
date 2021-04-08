import React, { useState } from "react"
import Header from "./header"
import { GlobalStyle } from "./styles/GlobalStyles"
import Footer from "../components/footer"
import Dropdown from "./dropdown"
import "./styles/mdxstyles.css"

const Layout = ({ children, page, headerBackground, footerBackground }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Header page={page} toggle={toggle} headerBackground={headerBackground}/>
      <Dropdown isOpen={isOpen} toggle={toggle} headerBackground={headerBackground}/>
      <main>{children}</main>
      <Footer footerBackground={footerBackground}/>
    </>
  )
}

export default Layout
