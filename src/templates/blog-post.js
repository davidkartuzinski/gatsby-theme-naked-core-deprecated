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
import SEO from "../components/SEO"
// import siteIcon from "../images/icon.png"
import Aside from "../components/aside"
import { Link } from "gatsby"
import {
  IoMdCalendar,
  IoIosPerson,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const BlogPost = ({ data, pageContext, location }) => {
  const post = data.mdx
  const site = data.site
  const shareUrl = `${site.siteMetadata.siteUrl}/${post.frontmatter.slug}`
  const {
    next,
    previous,
    breadcrumb: { crumbs },
  } = pageContext

  const defaultTitle = `${post.frontmatter.title} | '' ` // Will be blank if not set

  const customCrumbLabel = location.pathname.toLowerCase().replace("-", " ")

  return (
    <div>
      <div>
        <SEO
          title={defaultTitle}
          canonical={post.frontmatter.canonical}
          slug={post.frontmatter.slug}
          date={post.frontmatter.date}
          dateMod={post.frontmatter.dateModified}
          tags={post.frontmatter.tags}
          featuredImage={post.frontmatter.image}
        />

        <Header />
        <div>
          {" "}
          You are here:
          <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=""
            crumbLabel={customCrumbLabel}
          />
        </div>
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
        dateModified(formatString: "MMMM DD, YYYY")
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
        canonical
      }
      id
    }
    site {
      siteMetadata {
        siteUrl
        title
        socialLinks {
          twitter
        }
        locale
        websiteDescription
      }
    }
  }
`
