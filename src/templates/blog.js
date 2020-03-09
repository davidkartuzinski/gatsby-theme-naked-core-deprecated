import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/structure/layout"
import Aside from "../components/structure/aside"
import SEO from "../components/core/seo"
import PostPreview from "../components/core/post-preview"
import PageNavigation from "../components/core/page-navigation"
import NakedBreadcrumb from "../components/core/breadcrumb"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const BlogRoll = ({ data, pageContext, location }) => {
  const { logo, title } = useSiteMetadata()

  const posts = data.posts

  const {
    breadcrumb: { crumbs },
  } = pageContext

  const customCrumbLabel = "/"

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
            <article key={index} className="inner-article">
              <PostPreview
                slug={post.node.fields.slug}
                image={post.node.frontmatter.image.childImageSharp.fluid}
                imageAlt={post.node.frontmatter.imageAlt}
                figcaption={post.node.frontmatter.imageFigcaption}
                title={post.node.frontmatter.title}
                date={post.node.frontmatter.date}
                excerpt={post.node.frontmatter.description}
              />
            </article>
          )
        })}

        <PageNavigation pageContext={pageContext} />
      </article>

      <Aside />
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
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            slug
            date
            description
            image {
              childImageSharp {
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            tags
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
