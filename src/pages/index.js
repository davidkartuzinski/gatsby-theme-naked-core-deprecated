import React from "react"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const Home = ({ data, pageContext }) => {
  const site = data.site

  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <>
      <SEO
        title={"1001 Tea Facts Home Page"}
        canonical={"/"}
        description={
          "Discover 1001 Tea Facts and discover the spiritual and healthy ways of tea. Welcome to the wonderful world of Tea. Discover the practical sides to consuming tea for you and your loved ones."
        }
        date={""}
        dateModified={""}
        image={site.siteMetadata.logo}
        slug={"/"}
      />

      <div>
        {" "}
        You are here:
        <Breadcrumb crumbs={crumbs} crumbSeparator="" crumbLabel="Home" />
      </div>

      <div>Hello world!</div>
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

export default Home
