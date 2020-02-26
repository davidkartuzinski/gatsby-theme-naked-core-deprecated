import React from "react"
import PropTypes from "prop-types"
import { TagsIcon } from "../components/core/icons.js"
import SEO from "../components/core/seo"
import Layout from "../components/structure/layout"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components

import { useSiteMetadata } from "../hooks/use-site-metadata"
import { useAllMdx } from "../hooks/use-all-mdx"

import { Link } from "gatsby"
import NakedBreadcrumb from "../components/core/breadcrumb"

const TagsPage = ({ pageContext, location }) => {
  const { logo, title } = useSiteMetadata()
  const { tags } = useAllMdx()

  const {
    breadcrumb: { crumbs },
  } = pageContext

  const customCrumbLabel = location.pathname.toLowerCase().replace("-", " ")
  return (
    <Layout>
      <SEO
        title={`${title} Tags`}
        canonical={"tags"}
        description={`The Tags Page for ${title}`}
        date={""}
        dateModified={""}
        image={logo}
        slug={"tags"}
        crumbs={crumbs}
      />
      <div>
        <NakedBreadcrumb crumbs={crumbs} crumbLabel={customCrumbLabel} />

        <article>
          <header>
            <h1>
              <TagsIcon />
              Tags
            </h1>
          </header>
          <ul>
            {tags.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Layout>
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
