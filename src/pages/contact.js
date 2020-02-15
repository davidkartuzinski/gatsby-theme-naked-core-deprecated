import React from "react"
import ContactForm from "../components/contactForm"
import SEO from "../components/SEO"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const Contact = ({ pageContext, location }) => {
  const { logo } = useSiteMetadata()
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const customCrumbLabel = location.pathname.toLowerCase().replace("-", " ")

  return (
    <>
      <SEO
        title={"1001 Tea Facts Contact Page"}
        canonical={"contact"}
        description={"The Contact Page for 1001 Tea Facts"}
        date={""}
        dateModified={""}
        image={logo}
        slug={"contact"}
      />

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

export default Contact
