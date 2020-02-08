import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  title,
  canonical,
  description,
  date,
  dateMod,
  tags,
  image,
  slug,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            websiteDescription
            title
            textDirection
            siteUrl
            author
            social {
              twitter
              twitterAuthor
            }
          }
        }
      }
    `
  )

  return (
    <Helmet>
      <html lang={site.siteMetadata.locale} />
      <title>
        {title} | {site.siteMetadata.title}
      </title>
      {canonical && (
        <link
          rel="canonical"
          href={`${site.siteMetadata.siteUrl}/${canonical} `}
        />
      )}
      {!canonical && (
        <link rel="canonical" href={`${site.siteMetadata.siteUrl}/${slug}`} />
      )}
      {/* Twitter Graph - https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started */}
      <meta name="twitter:card" content="summary"></meta>
      {site.siteMetadata.social.twitter && (
        <meta name="twitter:site" content={site.siteMetadata.social.twitter} />
      )}
      {site.siteMetadata.social.twitterAuthor && (
        <meta
          name="twitter:creator"
          content={site.siteMetadata.social.twitterAuthor}
        />
      )}
      {/* Open Graph https://ogp.me/ https://developers.facebook.com/docs/sharing/webmasters/ */}
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title || site.siteMetadata.title} />
      <meta
        property="og:description"
        content={description || site.siteMetadata.websiteDescription}
      />
      <meta property="og:site_name" content={site.siteMetadata.title} />
      <meta property="og:locale" content={site.siteMetadata.locale} />
      <meta property="article:published_time" content={date} />
      <meta property="article:modified_time" content={dateMod} />
      {tags.map((keyword, i) => (
        <meta property="article:tag" content={keyword} key={i} />
      ))}
      <meta property="article:author" content={site.siteMetadata.author} />
      <meta property="og:image" content={image} />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  canonical: PropTypes.string,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  dateMod: PropTypes.string,
  tags: PropTypes.object,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default SEO
