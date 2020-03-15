import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { PublishDateIcon, NextPageIcon } from "../core/icons"
import Moment from "react-moment"

const LatestPosts = () => {
  const data = useStaticQuery(
    graphql`
      query LatestPosts {
        latestPosts: allMdx {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                slug
                date
              }
            }
          }
        }
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  )

  const ListItems = data.latestPosts.edges.map(post => (
    <li key={post.node.id}>
      <Link to={"/blog/" + post.node.frontmatter.slug}>
        <NextPageIcon />
        <strong>{post.node.frontmatter.title}</strong>
      </Link>
      <span>
        <PublishDateIcon className="publish-icon" /> Published on <br />
        <Moment
          date={post.node.frontmatter.date}
          format="MMMM DD, YYYY"
          withTitle
        />
      </span>
    </li>
  ))

  return (
    <section className="latest-posts">
      <h3>Latest Posts</h3>
      <ul>{ListItems}</ul>
    </section>
  )
}

export default LatestPosts
