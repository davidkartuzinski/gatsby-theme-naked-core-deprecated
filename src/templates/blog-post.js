import React from "react"
import { graphql } from "gatsby"
import AffiliateDisclaimer from "../components/affiliateDisclaimer"
import ResponsiveImage from "../components/responsiveImage"
import SocialShare from "../components/social-share"
import MailChimpSignUp from "../components/mailChimpSignUp"
import Tags from "../components/tags"
import Categories from "../components/categories"
import TalkYardComments from "../components/talkYardComments"
import Header from "../components/header"
import Aside from "../components/aside"
import { Link } from "gatsby"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const site = data.site
  const shareUrl = `${site.siteMetadata.siteUrl}${post.frontmatter.slug}`
  const { next, previous } = pageContext

  return (
    <div>
      <div>
        <Header />
        <h1>{post.frontmatter.title}</h1>

        <ResponsiveImage
          fluid={post.frontmatter.image.childImageSharp.fluid}
          title={post.frontmatter.imageTitle}
          alt={post.frontmatter.imageAlt}
        />

        <p>
          {post.frontmatter.date}, written by {post.frontmatter.author}
        </p>
        <AffiliateDisclaimer />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <SocialShare shareUrl={shareUrl} title={post.frontmatter.description} />
        <MailChimpSignUp />
        <Categories categories={data.markdownRemark.frontmatter.categories} />
        <Tags tags={data.markdownRemark.frontmatter.tags} />
        <p>=======================================================</p>
        <div>
          {previous && (
            <Link to={previous.frontmatter.slug} style={{ maxWidth: "25%" }}>
              <strong>Previous Article</strong> <br />
              {previous.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link to={next.frontmatter.slug} style={{ maxWidth: "25%" }}>
              <strong>Next Article</strong> <br />
              {next.frontmatter.title}
            </Link>
          )}
        </div>
        <TalkYardComments />
        <Aside />
      </div>
    </div>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        author
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        slug
        title
        categories
        tags
        imageTitle
        imageAlt
      }
      id
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
