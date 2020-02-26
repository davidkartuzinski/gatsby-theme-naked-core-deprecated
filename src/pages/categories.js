import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/structure/layout"
import SEO from "../components/core/seo"

import { CategoriesIcon } from "../components/core/icons.js"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Link } from "gatsby"

import { useSiteMetadata } from "../hooks/use-site-metadata"
import { useAllMdx } from "../hooks/use-all-mdx"

import NakedBreadcrumb from "../components/core/breadcrumb"

const CategoriesPage = ({ pageContext, location }) => {
  const { logo, title } = useSiteMetadata()
  const { categories } = useAllMdx()

  const {
    breadcrumb: { crumbs },
  } = pageContext

  const customCrumbLabel = location.pathname.toLowerCase().replace("-", " ")
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
      />

      <NakedBreadcrumb crumbs={crumbs} crumbLabel={customCrumbLabel} />

      <div>
        <article>
          <header>
            <h1>
              <CategoriesIcon /> Categories
            </h1>
          </header>
          <ul>
            {categories.map(category => (
              <li key={category.fieldValue}>
                <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
                  {category.fieldValue} ({category.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Layout>
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
