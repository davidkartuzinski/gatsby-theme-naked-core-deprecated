import React from "react"
import SEO from "../components/core/seo"
import Layout from "../components/structure/layout"
import { useSiteMetadata } from "../hooks/use-site-metadata"

import { Breadcrumb } from "gatsby-plugin-breadcrumb"

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
      />

      <nav>
        {" "}
        You are here:
        <Breadcrumb crumbs={crumbs} crumbSeparator="" crumbLabel="Tutorials" />
      </nav>
      <article>
        <div>Tutorials</div>
      </article>
    </Layout>
  )
}

export default Home
