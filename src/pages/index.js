import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/structure/layout"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const Home = ({ pageContext }) => {
  const { logo } = useSiteMetadata()

  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout>
      <SEO
        title={"1001 Tea Facts Home Page"}
        canonical={"/"}
        description={
          "Discover 1001 Tea Facts and discover the spiritual and healthy ways of tea. Welcome to the wonderful world of Tea. Discover the practical sides to consuming tea for you and your loved ones."
        }
        date={""}
        dateModified={""}
        image={logo}
        slug={"/"}
      />

      <div>
        {" "}
        You are here:
        <Breadcrumb crumbs={crumbs} crumbSeparator="" crumbLabel="Home" />
      </div>

      <div>Hello world!</div>
    </Layout>
  )
}

export default Home
