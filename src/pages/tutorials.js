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
    <Layout>
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

      <main className="page-tutorial">
        <NakedBreadcrumb crumbs={crumbs} crumbLabel="Tutorials" />
        <article>
          <header>
            <h1>Tutorials</h1>
          </header>
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
