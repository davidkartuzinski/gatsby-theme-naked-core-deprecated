import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import wordsCounter from "word-counting"

const SEO = ({
  title,
  canonical,
  description,
  date,
  dateModified,
  tags,
  image,
  slug,
  categories,
  headline,
  articleBody,
  crumbs,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            logo
            websiteDescription
            title
            textDirection
            siteUrl
            author
            locale
            social {
              twitter
              twitterAuthor
            }
          }
        }
      }
    `
  )

  const siteUrl = site.siteMetadata.siteUrl
  const siteNameTitle = site.siteMetadata.title
  const websiteDescription = site.siteMetadata.websiteDescription
  const author = site.siteMetadata.author
  const logo = site.siteMetadata.logo
  const locale = site.siteMetadata.locale
  const twitter = site.siteMetadata.social.twitter
  const twitterAuthor = site.siteMetadata.twitterAuthor

  const schemaWebPage = {
    "@context": "http://schema.org",
    "@id": `${siteUrl}/${slug}`,
    "@type": "WebPage",
    name: siteNameTitle,
    description: websiteDescription,
    publisher: {
      type: "blog",
      "@id": siteUrl,
    },
    license: "http://creativecommons.org/licenses/by-nc-sa/3.0/us/deed.en_US",
  }
  // https://jsonld-examples.com/schema.org/code/article-markup.php
  const schemaArticle = {
    "@context": "http://schema.org",
    "@type": "Article",
    author: author,
    datePublished: date,
    datemodified: dateModified,
    mainEntityOfPage: "True",
    headline: headline,
    // https://schema.org/articleSection like a category
    articleSection: `${categories && categories.slice(1, 2)}`,
    image: {
      "@type": "imageObject",
      url: `${siteUrl}/${image}`,
      height: "600",
      width: "800",
    },
    publisher: {
      "@type": "Organization",
      name: siteNameTitle,
      logo: {
        "@type": "imageObject",
        url: `${siteUrl}/${logo}`,
      },
    },
    wordCount: `${tags &&
      wordsCounter(articleBody, { isHtml: true }).wordsCount}`,
    articleBody: articleBody,
  }

  // https://schema.org/BreadcrumbList

  let schemaBreadcrumbs = [{}]

  function createBreadCrumbsSchema(crumbs) {
    let breadCrumbSchema = [{}]

    for (let i = 0; i < crumbs.length; i++) {
      let schema = [
        {
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@id": crumbs[i].pathname,
            name: crumbs[i].crumbLabel,
          },
        },
      ]
      breadCrumbSchema.push(schema)
    }
    breadCrumbSchema.shift(0)
    schemaBreadcrumbs = {
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [breadCrumbSchema],
    }
  }

  if (crumbs) {
    createBreadCrumbsSchema(crumbs)
  }

  return (
    <>
      <Helmet>
        {/* https://www.advancedwebranking.com/blog/meta-tags-important-in-seo/   https://metatags.io/*/}
        <html lang={locale} />
        {canonical && (
          <link rel="canonical" href={`${siteUrl}/${canonical} `} />
        )}
        {!canonical && <link rel="canonical" href={`${siteUrl}/${slug}`} />}
        <title>
          {title} | {siteNameTitle}
        </title>
        <meta name="description" content={description} />
        <meta name="image" content={`${siteUrl}/${logo}`} />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        {/* https://realfavicongenerator.net/ https://brodieclark.com/4-faq-schema-filtering-commandments/ */}
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#F3824A"
        ></link>
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#F3824A"
        ></link>
        <meta name="msapplication-TileColor" content="#F3824A" />
        <meta name="theme-color" content="##F3824A"></meta>
        {/* Open Graph https://ogp.me/ https://developers.facebook.com/docs/sharing/webmasters/ */}
        <meta property="og:locale" content={locale} />
        <meta property="og:site_name" content={siteNameTitle} />
        {canonical && (
          <meta property="og:url" content={`${siteUrl}/${canonical} `} />
        )}
        {!canonical && (
          <meta property="og:url" content={`${siteUrl}/${slug}`} />
        )}
        {/* Only "articles" have tags, so check and make an article ... */}
        <meta property="og:type" content={tags ? "article" : "website"} />

        {tags && <meta property="article:published_time" content={date} />}
        {tags && (
          <meta property="article:modified_time" content={dateModified} />
        )}
        {tags &&
          tags.map((tag, i) => (
            <meta property="article:tag" content={tag} key={i} />
          ))}

        {tags && <meta property="article:author" content={author} />}
        {tags && <meta property="og:image" content={`${siteUrl}/${image}`} />}
        {!tags && <meta property="og:image" content={`${siteUrl}/${logo}`} />}
        {/* Twitter Graph - https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started */}
        <meta name="twitter:card" content="summary"></meta>
        <meta name="robots" content="index, follow"></meta>
        {twitter && <meta name="twitter:site" content={twitter} />}
        {twitterAuthor && (
          <meta name="twitter:creator" content={twitterAuthor} />
        )}
        {!tags && (
          <script type="application/ld+json">
            {JSON.stringify(schemaWebPage)}
          </script>
        )}

        {tags && (
          <script type="application/ld+json">
            {JSON.stringify(schemaArticle, schemaBreadcrumbs)}
          </script>
        )}

        {schemaBreadcrumbs && (
          <script type="application/ld+json">
            {JSON.stringify(schemaBreadcrumbs)}
          </script>
        )}
      </Helmet>
    </>
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  canonical: PropTypes.string,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  dateModified: PropTypes.string,
  tags: PropTypes.array,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  categories: PropTypes.array,
  headline: PropTypes.string,
  articleBody: PropTypes.string,
  crumbs: PropTypes.array.isRequired,
}

export default SEO
