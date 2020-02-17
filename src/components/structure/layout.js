import React from "react"

import Header from "./header"
import Footer from "./footer"
import Aside from "./aside"

// https://blog.teamtreehouse.com/use-html5-sectioning-elements

const Layout = ({ children }) => {
  return (
    <div id="outer-container">
      <Header />
      <main id="page-wrap">{children}</main>
      <Aside />
      <Footer />
    </div>
  )
}
export default Layout
