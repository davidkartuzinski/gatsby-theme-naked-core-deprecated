import React from "react"
import ContactForm from "../components/contactForm"
import SEO from "../components/SEO"

import { Breadcrumb } from "gatsby-plugin-breadcrumb"

export default ({ pageContext, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const customCrumbLabel = location.pathname.toLowerCase().replace("-", " ")

  return (
    <>
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
      <ContactForm />
    </>
  )
}
