import React from "react"
import SEO from "../components/core/seo"
import Layout from "../components/structure/layout"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import NakedBreadcrumb from "../components/core/breadcrumb"
import Aside from "../components/structure/aside"

const Home = ({ pageContext }) => {
  const { logo, title, websiteDescription } = useSiteMetadata()

  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout>
      <SEO
        title={`${title} Home Page`}
        canonical={"/"}
        description={websiteDescription}
        date={""}
        dateModified={""}
        image={logo}
        slug={"/"}
        crumbs={crumbs}
      />
      <main className="page-home">
        <NakedBreadcrumb crumbs={crumbs} crumbLabel="Home" />

        <article>
          <header>
            <h1>The Gatsby Theme Naked</h1>
          </header>

          <p>The Main Article goes here.</p>
        </article>
      </main>
      <Aside></Aside>
    </Layout>
  )
}

export default Home
