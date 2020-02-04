import React from "react"
import PropTypes from "prop-types"
import { IoIosPricetags } from "react-icons/io"
import SiteMetaData from "../components/site-metadata"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components

import { Link, graphql } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const TagsPage = ({
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
        <div>
          {" "}
          You are here:
          <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=""
            crumbLabel={customCrumbLabel}
          />
        </div>
        <h1>
          <IoIosPricetags />
          Tags
        </h1>
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
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

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
