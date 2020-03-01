import React from "react"

import Header from "./header"
import Footer from "./footer"
import Aside from "./aside"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Aside />
      <Footer />
    </>
  )
}
export default Layout
