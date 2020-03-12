import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Layout from "../components/structure/layout"
import SEO from "../components/core/seo"
import { TagsIcon } from "../components/core/icons.js"
import NakedBreadcrumb from "../components/core/breadcrumb"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Aside from "../components/structure/aside"

const Tags = ({ pageContext, data, location }) => {
  const { logo, title } = useSiteMetadata()
  const { tag } = pageContext

  const { edges, totalCount } = data.allMdx

  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  const {
    breadcrumb: { crumbs },
  } = pageContext

  const [, , customCrumbLabel] = location.pathname.split("/")

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
      <main className="single-tag page">
        <NakedBreadcrumb crumbs={crumbs} crumbLabel={customCrumbLabel} />

        <article>
          <header>
            <h1>
              <TagsIcon />
              {tagHeader}
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
          <Link to="/tags">See all tags</Link>
        </article>
      </main>
      <Aside />
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
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

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
