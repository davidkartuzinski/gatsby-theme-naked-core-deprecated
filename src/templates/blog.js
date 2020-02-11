import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Header from "../components/header"
import Aside from "../components/aside"
import SocialShare from "../components/social-share"
import SEO from "../components/SEO"
import PostPreview from "../components/post-preview"
import PageNavigation from "../components/page-navigation"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const BlogList = ({ data, pageContext, location }) => {
  const posts = data.posts
  const site = data.site
  const shareUrl = `${site.siteMetadata.siteUrl}/blog`

  const {
    breadcrumb: { crumbs },
  } = pageContext

  const [, , preCrumbLabel] = location.pathname.split("/")

  const customCrumbLabel = preCrumbLabel

  return (
    <div>
      <div>
        <SEO
          title={"1001 Tea Facts Blog"}
          canonical={"blog"}
          description={"The Blog Page for 1001 Tea Facts"}
          date={""}
          dateModified={""}
          image={site.siteMetadata.logo}
          slug={"blog"}
        />
        <Header />

        <div>
          {" "}
          You are here:
          <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" > "
            crumbLabel={customCrumbLabel}
          />
        </div>
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
    posts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
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
            slug
            date(formatString: "MMMM DD, YYYY")
            description
            image {
              childImageSharp {
                fixed(height: 200, width: 320) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            title
            tags
            imageTitle
            imageAlt
            categories
            author
          }
          fields {
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
        websiteDescription
        logo
      }
    }
  }
`
export default BlogList
