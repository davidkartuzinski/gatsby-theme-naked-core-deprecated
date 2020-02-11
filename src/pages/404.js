import React from "react"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

// import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const NotFoundPage = ({ pageContext, location, data }) => {
  const site = data.site
  // const {
  //   breadcrumb: { crumbs },
  // } = pageContext

  // const customCrumbLabel = location.pathname.toLowerCase().replace("-", " ")

  return (
    <div>
      <SEO
        title={"404 - 1001 Tea Facts"}
        canonical={"404"}
        description={"The 404 Error / Not Found Page for 1001 Tea Facts"}
        date={""}
        dateModified={""}
        image={site.siteMetadata.logo}
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
    </div>
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

export default NotFoundPage
