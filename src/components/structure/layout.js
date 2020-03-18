import React from "react"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, pageClass }) => {
  return (
    <div class={`wrapper ${pageClass}`}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
