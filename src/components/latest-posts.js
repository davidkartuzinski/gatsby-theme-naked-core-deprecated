import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Moment from "react-moment"

const LatestPosts = () => {
  const data = useStaticQuery(
    graphql`
      query LatestPosts {
        posts: allMdx {
          edges {
            node {
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

  const ListItems = data.posts.edges.map(post => (
    <li>
      <Link to={post.node.frontmatter.slug}>{post.node.frontmatter.title}</Link>{" "}
      <br />-{" "}
      <Moment format="MMMM DD, YYYY">{post.node.frontmatter.date}</Moment>
    </li>
  ))

  const { author } = data.site.siteMetadata

  return (
    <div>
      <h2>Latest Posts</h2>

      <p>by {author}</p>
      <ul>{ListItems}</ul>
    </div>
  )
}

export default LatestPosts
