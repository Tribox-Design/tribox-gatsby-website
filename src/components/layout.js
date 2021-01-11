import React from "react"
import Header from "./header"
import { GlobalStyle } from "./styles/GlobalStyles"
import Footer from '../components/footer'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
