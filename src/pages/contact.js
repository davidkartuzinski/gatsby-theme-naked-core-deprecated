import React from "react"
import ContactForm from "../components/contactForm"
import SEO from "../components/SEO"

import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const Contact = ({ data, pageContext, location }) => {
  const site = data.site
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
        // tags={undefined}
        image={site.siteMetadata.logo}
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

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        websiteDescription
        logo
      }
    }
  }
`
export default Contact
