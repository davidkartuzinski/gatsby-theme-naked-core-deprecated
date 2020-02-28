import React from "react"
import PropTypes from "prop-types"
import Moment from "react-moment"
import { graphql } from "gatsby"
import Layout from "../components/structure/layout"
import SocialShare from "../components/optional/social-share"
import SEO from "../components/core/seo"
import PostPreview from "../components/core/post-preview"
import PageNavigation from "../components/core/page-navigation"
import NakedBreadcrumb from "../components/core/breadcrumb"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const BlogRoll = ({ data, pageContext, location }) => {
  const { siteUrl, logo, title } = useSiteMetadata()

  const posts = data.posts

  const shareUrl = `${siteUrl}/blog`

  const {
    breadcrumb: { crumbs },
  } = pageContext

  const [, , preCrumbLabel] = location.pathname.split("/")

  const customCrumbLabel = preCrumbLabel

  return (
    <Layout>
      <SEO
        title={`${title}| Blog`}
        canonical={"blog"}
        description={`The Blog Page for ${title}`}
        date={""}
        dateModified={""}
        image={logo}
        slug={"blog"}
        crumbs={crumbs}
      />

      <NakedBreadcrumb crumbs={crumbs} crumbLabel={customCrumbLabel} />

      <article>
        <header>
          <h1>Blog Posts</h1>
        </header>

        {posts.edges.map((post, index) => {
          return (
            <article key={index}>
              <PostPreview
                slug={post.node.fields.slug}
                image={post.node.frontmatter.image.childImageSharp.fixed}
                imageAlt={post.node.frontmatter.imageAlt}
                imageTitle={post.node.frontmatter.imageTitle}
                figcaption={post.node.frontmatter.imageFigcaption}
                title={post.node.frontmatter.title}
                date={
                  <Moment
                    date={post.node.frontmatter.date}
                    format="MMMM DD, YYYY"
                    withTitle
                  />
                }
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
  )
}

BlogRoll.propTypes = {
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
            imageFigcaption
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
export default BlogRoll
