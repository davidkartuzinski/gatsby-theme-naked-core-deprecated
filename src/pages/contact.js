import React from "react"
import Layout from "../components/structure/layout"
import ContactForm from "../components/optional/contact-form"
import SEO from "../components/core/seo"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Aside from "../components/structure/aside"

import NakedBreadcrumb from "../components/core/breadcrumb"

const Contact = ({ pageContext, location }) => {
  const { logo, title } = useSiteMetadata()
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const customCrumbLabel = location.pathname.toLowerCase().replace("-", " ")

  return (
    <Layout pageClass={`contact-page`}>
      <SEO
        title={`${title} Contact Page`}
        canonical={"contact"}
        description={`The Contact Page for ${title}`}
        date={""}
        dateModified={""}
        image={logo}
        slug={"contact"}
        crumbs={crumbs}
      />
      <main className="page">
        <NakedBreadcrumb crumbs={crumbs} crumbLabel={customCrumbLabel} />

        <article>
          <header>
            <h1>Contact Us</h1>
          </header>
          <ContactForm />
        </article>
      </main>
      <Aside></Aside>
    </Layout>
  )
}

export default Contact
