import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Header from "../components/header"
import Aside from "../components/aside"
import SocialShare from "../components/social-share"

import PostPreview from "../components/post-preview"
import PageNavigation from "../components/page-navigation"

const BlogList = ({ data, pageContext }) => {
  const posts = data.posts
  const site = data.site
  const shareUrl = `${site.siteMetadata.websiteUrl}/blog`

  return (
    <div>
      <div>
        <Header />
        <h1>Blog Posts</h1>

        {posts.edges.map(post => (
          <PostPreview
            slug={post.node.fields.slug}
            image={post.node.frontmatter.image.childImageSharp.fixed}
            imageAlt={post.node.frontmatter.imageAlt}
            imageTitle={post.node.frontmatter.imageTitle}
            title={post.node.frontmatter.title}
            date={post.node.frontmatter.date}
            author={post.node.frontmatter.author}
            excerpt={post.node.excerpt}
            cats={post.node.frontmatter.categories}
            tags={post.node.frontmatter.tags}
          />
        ))}

        <PageNavigation pageContext={pageContext} />
        <SocialShare shareUrl={shareUrl} title="1001 Tea Facts Blog" />

        <Aside />
      </div>
    </div>
  )
}

BlogList.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
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
    }
    site {
      siteMetadata {
        websiteUrl
      }
    }
  }
`
export default BlogList
