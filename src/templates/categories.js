import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/SEO"

import { IoIosFolder } from "react-icons/io"
import { Link, graphql } from "gatsby"

import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const Categories = ({ data, pageContext, location }) => {
  const site = data.site

  const {
    category,
    breadcrumb: { crumbs },
  } = pageContext
  const { edges, totalCount } = data.allMdx
  const categoryHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${category}"`

  // const customCrumbLabel = location.pathname.toLowerCase().replace("-", " ")

  const [, , customCrumbLabel] = location.pathname.split("/")

  return (
    <div>
      <SEO
        title={"1001 Tea Facts Categories"}
        canonical={"categories"}
        description={"The Categories Page for 1001 Tea Facts"}
        date={""}
        dateModified={""}
        image={site.siteMetadata.logo}
        slug={"categories"}
      />

      <div>
        {" "}
        You are here:
        <Breadcrumb
          crumbs={crumbs}
          crumbSeparator=" > "
          crumbLabel={customCrumbLabel}
        />
      </div>

      <h1>
        <IoIosFolder />
        {categoryHeader}
      </h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
      </ul>
      {/* Links to a page that does not exist quite yet... */}
      <Link to="/categories">All categories</Link>
    </div>
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
        siteUrl
        websiteDescription
        logo
      }
    }
  }
`
