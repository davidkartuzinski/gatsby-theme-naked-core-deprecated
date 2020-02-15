import React from "react"

import Header from "./header"
import Footer from "./footer"
import Aside from "./aside"

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main id="page-wrap">
        {children}

        <Aside />
      </main>
      <Footer />
    </>
  )
}
export default Layout
