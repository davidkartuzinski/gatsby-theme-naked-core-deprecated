import React from "react"
import SEO from "../components/core/seo"
import Layout from "../components/structure/layout"
import { useSiteMetadata } from "../hooks/use-site-metadata"

import NakedBreadcrumb from "../components/core/breadcrumb"

const Home = ({ pageContext }) => {
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

      <NakedBreadcrumb crumbs={crumbs} crumbLabel="Tutorials" />

      <article>
        <div>Tutorials</div>
      </article>
    </Layout>
  )
}

export default Home
