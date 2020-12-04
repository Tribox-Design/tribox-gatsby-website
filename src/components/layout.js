import React from "react"
import PropTypes from "prop-types"


import Header from "./header"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
  
      <main>{children}</main>
       
    </>
  )
}

export default Layout
