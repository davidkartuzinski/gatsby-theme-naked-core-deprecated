import React from "react"
import SEO from "../components/SEO"

import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const NotFoundPage = ({ pageContext, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const customCrumbLabel = location.pathname.toLowerCase().replace("-", " ")

  return (
    <div>
      <SEO />
      <div>
        {" "}
        You are here:
        <Breadcrumb
          crumbs={crumbs}
          crumbSeparator=""
          crumbLabel={customCrumbLabel}
        />
      </div>
      <h1>Oops 404 - NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  )
}

export default NotFoundPage
