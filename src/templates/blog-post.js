import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import AffiliateDisclaimer from "../components/affiliateDisclaimer"
import ResponsiveImage from "../components/responsiveImage"
import SocialShare from "../components/social-share"
import MailChimpSignUp from "../components/mailChimpSignUp"
import Tags from "../components/tags"
import Categories from "../components/categories"
import TalkYardComments from "../components/talkYardComments"
import Header from "../components/header"
import siteIcon from "../images/icon.png"
import Aside from "../components/aside"
import { Link } from "gatsby"
import {
  IoMdCalendar,
  IoIosPerson,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

const BlogPost = ({ data, pageContext }) => {
  const post = data.mdx
  const site = data.site
  const shareUrl = `${site.siteMetadata.siteUrl}${post.frontmatter.slug}`
  const { next, previous } = pageContext
  const defaultTitle = `${post.frontmatter.title} | ${site.siteMetadata.title}`

  return (
    <div>
      <div>
        <Helmet
          defer={false}
          defaultTitle={defaultTitle}
          titleTemplate={`%s | ${post.frontmatter.title}`}
        >
          <html lang={site.siteMetadata.locale} />
          <link rel="canonical" href={`${shareUrl}`} />
          <meta name="docsearch:version" content="2.0" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
          />
          <meta name="description" content={post.frontmatter.description} />
          <meta property="og:url" content={site.siteMetadata.siteUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={site.siteMetadata.locale} />
          <meta property="og:site_name" content={site.siteMetadata.title} />
          <meta
            property="og:image"
            content={`${site.siteMetadata.siteUrl}${siteIcon}`}
          />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta name="twitter:card" content={post.frontmatter.description} />
          <meta name="twitter:site" content={site.siteMetadata.twitter} />
        </Helmet>

        <Header />
        <h1>{post.frontmatter.title}</h1>

        <ResponsiveImage
          fluid={post.frontmatter.image.childImageSharp.fluid}
          title={post.frontmatter.imageTitle}
          alt={post.frontmatter.imageAlt}
        />

        <p>
          <IoMdCalendar /> {post.frontmatter.date}, written by <IoIosPerson />
          {post.frontmatter.author}
        </p>
        <AffiliateDisclaimer />
        <MDXRenderer>{post.body}</MDXRenderer>
        <SocialShare shareUrl={shareUrl} title={post.frontmatter.description} />
        <MailChimpSignUp />
        <Categories categories={data.mdx.frontmatter.categories} />
        <Tags tags={data.mdx.frontmatter.tags} />

        <div>
          {previous && (
            <Link to={previous.frontmatter.slug} style={{ maxWidth: "25%" }}>
              <strong>
                <IoIosArrowBack />
                Previous Article
              </strong>{" "}
              <br />
              {previous.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link to={next.frontmatter.slug} style={{ maxWidth: "25%" }}>
              <strong>
                Next Article <IoIosArrowForward />
              </strong>{" "}
              <br />
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
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      body
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
        imageAlt
        imageTitle
      }
      id
    }
    site {
      siteMetadata {
        siteUrl
        title
        twitter
        locale
      }
    }
  }
`
