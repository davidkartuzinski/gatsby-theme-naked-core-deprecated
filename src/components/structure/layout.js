import React from "react"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div class="wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
