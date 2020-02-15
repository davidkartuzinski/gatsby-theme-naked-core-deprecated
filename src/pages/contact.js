import React from "react"
import Layout from "../components/structure/layout"
import ContactForm from "../components/contact-form"
import SEO from "../components/core/seo"
import { useSiteMetadata } from "../hooks/use-site-metadata"

import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const Contact = ({ pageContext, location }) => {
  const { logo } = useSiteMetadata()
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const customCrumbLabel = location.pathname.toLowerCase().replace("-", " ")

  return (
    <Layout>
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
    </Layout>
  )
}

export default Contact
