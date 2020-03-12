import React from "react"
import SEO from "../components/core/seo"
import Layout from "../components/structure/layout"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import NakedBreadcrumb from "../components/core/breadcrumb"
import Aside from "../components/structure/aside"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"

const Home = ({ pageContext, data }) => {
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
      <main className="page-home page">
        <NakedBreadcrumb crumbs={crumbs} crumbLabel="Home" />

        <article>
          <header>
            <div>
              <h1>The Gatsby Theme Naked</h1>
              <h2>Just don't eff it up. Seriously. Don't.</h2>
              <p>
                A theme that lets you launch your production ready Gatsby site
                fast!
              </p>
            </div>
            <div>
              <Image
                fluid={data.idea.childImageSharp.fluid}
                alt="Naked Theme is a great idea"
              />
            </div>
          </header>

          <section className="columns-3">
            <div>
              <h2>Accessible & HTML5 Best Practices</h2>
              <ul>
                <li>Accessible Color patterns</li>
                <li>Accessible Forms</li>
                <li>Accessible HTML</li>
                <li>Even a tutorial on Accessibility</li>
              </ul>
              <Link to="/tutorials">Make your site accessible</Link>
            </div>
            <div>
              <h2>Any CSS Component Library</h2>
              <ul>
                <li>Plain Vanilla CSS</li>
                <li>Styled Components / Emotion </li>
                <li>UI Theme</li>
                <li>CSS Modules</li>
              </ul>
              <Link to="/tutorials">Discover real CSS freedom</Link>
            </div>
            <div>
              <h2>Baked in SEO Best Practices</h2>
              <ul>
                <li>Properly nested Header tags</li>
                <li>Schema.org properly implemented</li>
                <li>Semantic HTML5</li>
                <li>Internal Linking done right</li>
              </ul>
              <Link to="/tutorials">Learn SEO best practices</Link>
            </div>
          </section>
        </article>
      </main>
      <Aside></Aside>
    </Layout>
  )
}

export const query = graphql`
  query idea {
    idea: file(relativePath: { eq: "idea.png" }) {
      relativePath
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Home
