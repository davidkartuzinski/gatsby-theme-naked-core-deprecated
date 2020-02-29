import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/core/seo"
import Layout from "../components/structure/layout"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import NakedBreadcrumb from "../components/core/breadcrumb"

const NotFoundPage = () => {
  const { logo, title } = useSiteMetadata()

  return (
    <Layout>
      <SEO
        title={`404 - ${title}`}
        canonical={"404"}
        description={`The 404 Error / Not Found Page for ${title}`}
        date={""}
        dateModified={""}
        image={logo}
        slug={"404"}
      />

      <article>
        <header>
          <h1>Oops 404 - NOT FOUND</h1>
        </header>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </article>
    </Layout>
  )
}

NotFoundPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default NotFoundPage
