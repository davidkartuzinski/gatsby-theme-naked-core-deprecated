import React from "react"
import { graphql, Link } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import PropTypes from "prop-types"
import Moment from "react-moment"
import Layout from "../components/structure/layout"
import Aside from "../components/structure/aside"
import Tags from "../components/core/tags"
import Categories from "../components/core/categories"
import ResponsiveImage from "../components/core/responsive-image"
import SEO from "../components/core/seo"
import {
  PreviousPageIcon,
  NextPageIcon,
  AuthorIcon,
  PublishDateIcon,
} from "../components/core/icons"
import NakedBreadcrumb from "../components/core/breadcrumb"
import SocialShare from "../components/optional/social-share"
import TalkYardComments from "../components/optional/talkyard-comments"
import SiteWideMessage from "../components/widgets/sitewide-message"

import { useSiteMetadata } from "../hooks/use-site-metadata"

const BlogPost = ({ data, pageContext, location }) => {
  const { siteUrl } = useSiteMetadata()

  const post = data.mdx

  const shareUrl = `${siteUrl}/${post.frontmatter.slug}`

  const {
    next,
    previous,
    breadcrumb: { crumbs },
  } = pageContext
  const customCrumbLabel = location.pathname.toLowerCase().replace("-", " ")

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        canonical={post.frontmatter.canonical}
        slug={post.frontmatter.slug}
        description={post.frontmatter.description}
        date={post.frontmatter.date}
        dateModified={post.frontmatter.dateModified}
        tags={post.frontmatter.tags}
        categories={post.frontmatter.categories}
        image={post.frontmatter.image.publicURL}
        headline={post.frontmatter.title}
        articleBody={post.rawBody}
        crumbs={crumbs}
        crumbLabel={customCrumbLabel}
      />

      <NakedBreadcrumb crumbs={crumbs} crumbLabel={customCrumbLabel} />

      <article>
        <header>
          <h1>{post.frontmatter.title}</h1>

          <ResponsiveImage
            fluid={post.frontmatter.image.childImageSharp.fluid}
            alt={post.frontmatter.imageAlt}
            figcaption={post.frontmatter.imageFigcaption}
            imageClassName={post.frontmatter.imageClassName}
          />

          <p>
            <span>
              <PublishDateIcon />{" "}
              <Moment
                date={post.frontmatter.date}
                format="MMMM DD, YYYY"
                withTitle
              />
              , written by
            </span>
            <span>
              <AuthorIcon /> {post.frontmatter.author}
            </span>
          </p>
        </header>

        <SiteWideMessage />
        <div className="article__body">
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </article>
      <section></section>

      <nav
        className="previous-next-post-nav"
        aria-label="Previous post or next post"
      >
        {previous && (
          <Link
            to={"/blog/" + previous.frontmatter.slug}
            style={{ maxWidth: "25%" }}
          >
            <strong>
              <PreviousPageIcon />
              Previous Article
            </strong>
            <br />
            {previous.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link
            to={"/blog/" + next.frontmatter.slug}
            style={{ maxWidth: "25%" }}
          >
            <strong>
              Next Article <NextPageIcon />
            </strong>
            <br />
            {next.frontmatter.title}
          </Link>
        )}
      </nav>
      <Aside>
        <SocialShare shareUrl={shareUrl} title={post.frontmatter.description} />

        <Categories categories={data.mdx.frontmatter.categories} />
        <Tags tags={data.mdx.frontmatter.tags} />
      </Aside>
      <TalkYardComments />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      body
      rawBody
      frontmatter {
        author
        date
        dateModified
        description
        image {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
          publicURL
        }
        slug
        title
        categories
        tags
        imageAlt
        imageTitle
        imageFigcaption
        canonical
      }
      id
    }
  }
`
