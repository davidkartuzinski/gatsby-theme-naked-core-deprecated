import React from "react"
import PropTypes from "prop-types"
import SiteMetaData from "../components/site-metadata"

import { IoIosFolder } from "react-icons/io"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Link, graphql } from "gatsby"

import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const CategoriesPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
  pageContext,
  location,
}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const customCrumbLabel = location.pathname.toLowerCase().replace("-", " ")
  return (
    <div>
      <SiteMetaData />
      <div>
        {" "}
        You are here:
        <Breadcrumb
          crumbs={crumbs}
          crumbSeparator=""
          crumbLabel={customCrumbLabel}
        />
      </div>
      <div>
        <h1>
          <IoIosFolder /> Categories
        </h1>
        <ul>
          {group.map(category => (
            <li key={category.fieldValue}>
              <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
                {category.fieldValue} ({category.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

CategoriesPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default CategoriesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`
