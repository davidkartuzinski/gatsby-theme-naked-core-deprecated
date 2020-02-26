import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/structure/layout"
import SiteWideMessage from "../components/widgets/sitewide-message"
import ResponsiveImage from "../components/core/responsive-image"
import SocialShare from "../components/optional/social-share"
import MailChimpSignUp from "../components/widgets/mailchimp-sign-up"
import Tags from "../components/core/tags"
import Categories from "../components/core/categories"
import TalkYardComments from "../components/optional/talkyard-comments"
import SEO from "../components/core/seo"
import { Link } from "gatsby"

import {
  PreviousPageIcon,
  NextPageIcon,
  AuthorIcon,
  PublishDateIcon,
} from "../components/core/icons"

import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import NakedBreadcrumb from "../components/core/breadcrumb"
import Bio from "../components/widgets/bio"
import Moment from "react-moment"

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
            <PublishDateIcon />{" "}
            <Moment
              date={post.frontmatter.date}
              format="MMMM DD, YYYY"
              withTitle
            />
            , written by <AuthorIcon />
            {post.frontmatter.author}
          </p>
        </header>

        <SiteWideMessage />
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
      <Bio />
      <SocialShare shareUrl={shareUrl} title={post.frontmatter.description} />
      <MailChimpSignUp />
      <Categories categories={data.mdx.frontmatter.categories} />
      <Tags tags={data.mdx.frontmatter.tags} />

      <nav>
        {previous && (
          <Link to={previous.frontmatter.slug} style={{ maxWidth: "25%" }}>
            <strong>
              <PreviousPageIcon />
              Previous Article
            </strong>{" "}
            <br />
            {previous.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link to={next.frontmatter.slug} style={{ maxWidth: "25%" }}>
            <strong>
              Next Article <NextPageIcon />
            </strong>{" "}
            <br />
            {next.frontmatter.title}
          </Link>
        )}
      </nav>
      <TalkYardComments />
    </Layout>
  )
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
