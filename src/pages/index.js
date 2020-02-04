import React from "react"
import SiteMetaData from "../components/site-metadata"

import { Breadcrumb } from "gatsby-plugin-breadcrumb"

export default ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <>
      <SiteMetaData />

      <div>
        {" "}
        You are here:
        <Breadcrumb crumbs={crumbs} crumbSeparator="" crumbLabel="Home" />
      </div>

      <div>Hello world!</div>
    </>
  )
}
