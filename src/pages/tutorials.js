import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/core/seo"
import Layout from "../components/structure/layout"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Aside from "../components/structure/aside"

import NakedBreadcrumb from "../components/core/breadcrumb"

const Tutorials = ({ pageContext }) => {
  const { logo, title, websiteDescription } = useSiteMetadata()

  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout pageClass={`tutorials-page`}>
      <SEO
        title={`${title} Tutorials Page`}
        canonical={"/"}
        description={websiteDescription}
        date={""}
        dateModified={""}
        image={logo}
        slug={"/"}
        crumbs={crumbs}
      />

      <main className="page">
        <NakedBreadcrumb crumbs={crumbs} crumbLabel="Tutorials" />
        <article>
          <header>
            <h1>Tutorials</h1>
          </header>
          <p>
            <strong>Coming Soon.</strong>
          </p>
          <p>
            Tutorials on every aspect of setting up a <i>production ready</i>{" "}
            website using this theme and the Gatsby plugin ecosystem. Most
            techniques applicable to any Gatsby website.
          </p>
        </article>
      </main>
      <Aside />
    </Layout>
  )
}

Tutorials.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default Tutorials
