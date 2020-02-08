import React from "react"
import SEO from "../components/SEO"

import { Breadcrumb } from "gatsby-plugin-breadcrumb"

export default ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <>
      <SEO />

      <div>
        {" "}
        You are here:
        <Breadcrumb crumbs={crumbs} crumbSeparator="" crumbLabel="Home" />
      </div>

      <div>Hello world!</div>
    </>
  )
}
