import React from "react"

import Header from "./header"
import Footer from "./footer"
import Aside from "./aside"

const Layout = ({ children }) => {
  return (
    <div id="outer-container">
      <Header />
      <main id="page-wrap">
        {children}
        <Aside />
      </main>
      <Footer />
    </div>
  )
}
export default Layout
