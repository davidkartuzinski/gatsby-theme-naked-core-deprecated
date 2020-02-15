import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/SEO"

import { IoIosPricetags } from "react-icons/io"

import { Link, graphql } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

const Tags = ({ pageContext, data, location }) => {
  const { logo } = useSiteMetadata()
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
    <div>
      <SEO
        title={"1001 Tea Facts Tags"}
        canonical={"tags"}
        description={"The Tags Page for 1001 Tea Facts"}
        date={""}
        dateModified={""}
        image={logo}
        slug={"tags"}
      />
      <h1>
        <IoIosPricetags />
        {tagHeader}
      </h1>

      <div>
        {" "}
        You are here:
        <Breadcrumb
          crumbs={crumbs}
          crumbSeparator=" > "
          crumbLabel={customCrumbLabel}
        />
      </div>
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
      <Link to="/tags">See all tags</Link>
    </div>
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
