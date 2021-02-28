import React, { useState } from "react"
import Header from "./header"
import { GlobalStyle } from "./styles/GlobalStyles"
import Footer from "../components/footer"
import Dropdown from "./dropdown"

const Layout = ({ children, page }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Header page={page} toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
