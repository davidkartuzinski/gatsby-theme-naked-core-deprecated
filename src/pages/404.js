import React from "react"
import SEO from "../components/core/seo"
import Layout from "../components/structure/layout"
import { useSiteMetadata } from "../hooks/use-site-metadata"

// import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const NotFoundPage = ({ pageContext, location, data }) => {
  const { logo, title } = useSiteMetadata()
  // const {
  //   breadcrumb: { crumbs },
  // } = pageContext

  // const customCrumbLabel = location.pathname.toLowerCase().replace("-", " ")

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
      <div>
        {" "}
        You are here:
        {/* <Breadcrumb
          crumbs={crumbs}
          crumbSeparator=""
          crumbLabel={customCrumbLabel}
        /> */}
      </div>
      <h1>Oops 404 - NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
