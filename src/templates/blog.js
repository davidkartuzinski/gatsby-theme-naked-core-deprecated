import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/structure/layout"

import SocialShare from "../components/optional/social-share"
import SEO from "../components/core/seo"
import PostPreview from "../components/core/post-preview"

import PageNavigation from "../components/core/page-navigation"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import { DateTime } from "luxon"

import { useSiteMetadata } from "../hooks/use-site-metadata"

const BlogList = ({ data, pageContext, location }) => {
  const { siteUrl, logo, title } = useSiteMetadata()

  const posts = data.posts

  const shareUrl = `${siteUrl}/blog`

  const {
    breadcrumb: { crumbs },
  } = pageContext

  const [, , preCrumbLabel] = location.pathname.split("/")

  const customCrumbLabel = preCrumbLabel

  return (
    <div>
      <div>
        <Layout>
          <SEO
            title={`${title}| Blog`}
            canonical={"blog"}
            description={`The Blog Page for ${title}`}
            date={""}
            dateModified={""}
            image={logo}
            slug={"blog"}
          />

          <nav>
            {" "}
            You are here:
            <Breadcrumb
              crumbs={crumbs}
              crumbSeparator=" > "
              crumbLabel={customCrumbLabel}
            />
          </nav>
          <article>
            <header>
              <h1>Blog Posts</h1>
            </header>

            {posts.edges.map(post => {
              let formattedDate = DateTime.fromISO(
                post.node.frontmatter.date
              ).toFormat("MMMM dd yyyy")

              return (
                <article>
                  <PostPreview
                    slug={post.node.fields.slug}
                    image={post.node.frontmatter.image.childImageSharp.fixed}
                    imageAlt={post.node.frontmatter.imageAlt}
                    imageTitle={post.node.frontmatter.imageTitle}
                    title={post.node.frontmatter.title}
                    date={formattedDate}
                    author={post.node.frontmatter.author}
                    cats={post.node.frontmatter.categories}
                    tags={post.node.frontmatter.tags}
                  />
                </article>
              )
            })}
          </article>
          <PageNavigation pageContext={pageContext} />
          <SocialShare shareUrl={shareUrl} title={title} />
        </Layout>
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
            date
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
  }
`
export default BlogList
