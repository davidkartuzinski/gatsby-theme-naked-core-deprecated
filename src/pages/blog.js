import React from "react"
import { Link, graphql } from "gatsby"
// Utilities
import kebabCase from "lodash/kebabCase"
import Image from "gatsby-image"

import Header from "../components/header"
import Aside from "../components/aside"

import SocialShare from "../components/socialShare"

const BlogPost = ({ data }) => {
  const posts = data.posts
  const site = data.site
  const shareUrl = `${site.siteMetadata.websiteUrl}/blog`

  return (
    <div>
      <div>
        <Header />
        <h1>Blog Posts</h1>
        {posts.edges.map(post => {
          return (
            <div>
              <Link to={post.node.fields.slug}>
                <Image
                  fixed={post.node.frontmatter.image.childImageSharp.fixed}
                />
              </Link>
              <h2>
                <Link to={post.node.fields.slug}>
                  {post.node.frontmatter.title}
                </Link>
              </h2>
              <span>
                Published on {post.node.frontmatter.date}, written by{" "}
                {post.node.frontmatter.author}
              </span>
              <p>{post.node.excerpt}</p>
              <Link to={post.node.fields.slug}>Read the rest...</Link>
              <ul>
                <span>Blog Post Categories:</span>
                {posts.cats.map(cat => (
                  <li key={cat.fieldValue}>
                    <Link to={`/categories/${kebabCase(cat.fieldValue)}/`}>
                      {cat.fieldValue} ({cat.totalCount})
                    </Link>
                  </li>
                ))}
              </ul>
              <ul>
                <span>Blog Post Tags:</span>
                {posts.tags.map(tag => (
                  <li key={tag.fieldValue}>
                    <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                      {tag.fieldValue} ({tag.totalCount})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}

        <SocialShare shareUrl={shareUrl} title="1001 Tea Facts Blog" />

        <Aside />
      </div>
    </div>
  )
}

export default BlogPost

export const query = graphql`
  query blogPosts {
    posts: allMarkdownRemark {
      edges {
        node {
          excerpt(pruneLength: 150)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            image {
              childImageSharp {
                fixed(height: 200, width: 320) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            title
            imageAlt
            imageTitle
            categories
            tags
            author
          }
        }
      }
      cats: group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
      tags: group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    site {
      siteMetadata {
        websiteUrl
      }
    }
  }
`
