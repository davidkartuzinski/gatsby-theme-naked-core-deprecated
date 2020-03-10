import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/core/seo"
import Layout from "../components/structure/layout"
import Aside from "../components/structure/aside"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Image from "gatsby-image"
import { graphql, Link } from "gatsby"

const NotFoundPage = ({ data }) => {
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
      <main className="page-404">
        <article>
          <header>
            <h1>Oops 404 - Not Found</h1>
          </header>
          <p>
            <Image
              fluid={data.image404.childImageSharp.fluid}
              alt="404 not found picture"
            />
          </p>

          <p>
            You just hit a route that doesn&#39;t exist. Please check the url,
            or go ahead and check out the <Link to="/blog">blog</Link>.
          </p>
        </article>
      </main>
      <Aside />
    </Layout>
  )
}

NotFoundPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export const query = graphql`
  query image404 {
    image404: file(relativePath: { eq: "404_page_not_found_.png" }) {
      relativePath
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default NotFoundPage
