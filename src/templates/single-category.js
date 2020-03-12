import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Layout from "../components/structure/layout"
import SEO from "../components/core/seo"
import NakedBreadcrumb from "../components/core/breadcrumb"
import { CategoriesIcon } from "../components/core/icons.js"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Aside from "../components/structure/aside"

const Categories = ({ data, pageContext, location }) => {
  const { logo, title } = useSiteMetadata()

  const {
    category,
    breadcrumb: { crumbs },
  } = pageContext
  const { edges, totalCount } = data.allMdx
  const categoryHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${category}"`

  const [, , customCrumbLabel] = location.pathname.split("/")

  return (
    <Layout>
      <SEO
        title={`${title} Categories`}
        canonical={"categories"}
        description={`The Categories Page for ${title}`}
        date={""}
        dateModified={""}
        image={logo}
        slug={"categories"}
        crumbs={crumbs}
        crumbLabel={customCrumbLabel}
      />

      <main className="single-category page">
        <NakedBreadcrumb crumbs={crumbs} crumbLabel={customCrumbLabel} />

        <article>
          <header>
            <h1>
              <CategoriesIcon />
              {categoryHeader}
            </h1>
          </header>
          <ul>
            {edges.map(({ node }, index) => {
              const { slug } = node.fields
              const { title } = node.frontmatter
              return (
                <li key={index}>
                  <Link to={"/blog/" + slug}>{title}</Link>
                </li>
              )
            })}
          </ul>
          <Link to="/categories">All categories</Link>
        </article>
      </main>
      <Aside></Aside>
    </Layout>
  )
}

Categories.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Categories

export const pageQuery = graphql`
  query($category: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            slug
            title
          }
          fields {
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        logo
      }
    }
  }
`
