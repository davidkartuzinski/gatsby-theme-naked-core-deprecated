import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { AuthorIcon } from "../core/icons"
import Moment from "react-moment"

const LatestPosts = () => {
  const data = useStaticQuery(
    graphql`
      query LatestPosts {
        posts: allMdx {
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
  const { author } = data.site.siteMetadata
  const ListItems = data.posts.edges.map(post => (
    <li key={post.node.id}>
      <Link to={"/blog/" + post.node.frontmatter.slug}>
        {post.node.frontmatter.title}
      </Link>{" "}
      <address className="author">
        written by <AuthorIcon /> {author}
      </address>
      <Moment
        date={post.node.frontmatter.date}
        format="MMMM DD, YYYY"
        withTitle
      />
    </li>
  ))

  return (
    <section>
      <h2>Latest Posts</h2>
      <ul>{ListItems}</ul>
    </section>
  )
}

export default LatestPosts
