import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/SEO"

import { IoIosFolder } from "react-icons/io"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Link } from "gatsby"

import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { useAllMdx } from "../hooks/useAllMdx"

import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const CategoriesPage = ({ data, pageContext, location }) => {
  const { logo } = useSiteMetadata()
  const { categories } = useAllMdx()

  const {
    breadcrumb: { crumbs },
  } = pageContext

  const customCrumbLabel = location.pathname.toLowerCase().replace("-", " ")
  return (
    <div>
      <SEO
        title={"1001 Tea Facts Categories"}
        canonical={"categories"}
        description={"The Categories Page for 1001 Tea Facts"}
        date={""}
        dateModified={""}
        image={logo}
        slug={"categories"}
      />
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
          {categories.map(category => (
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
