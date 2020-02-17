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
  customCrumbLabel,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
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

  // console.log(wordsCounter(articleBody, { isHtml: true }).wordsCount)

  // https://search.google.com/structured-data/testing-tool/u/0/
  // https://github.com/LekoArts/portfolio/blob/40f8fc5f93a50556a83dd1539ed34983643814d7/src/components/SEO.jsx#L87
  // https://xoocode.com/json-ld-code-examples/webpage/
  const schemaWebPage = {
    "@context": "http://schema.org",
    "@id": `${site.siteMetadata.siteUrl}/${slug}`,
    "@type": "WebPage",
    name: site.siteMetadata.title,
    description: site.siteMetadata.websiteDescription,
    publisher: {
      type: "blog",
      "@id": site.siteMetadata.siteUrl,
    },
    license: "http://creativecommons.org/licenses/by-nc-sa/3.0/us/deed.en_US",
  }
  // https://jsonld-examples.com/schema.org/code/article-markup.php
  const schemaArticle = {
    "@context": "http://schema.org",
    "@type": "Article",
    author: site.siteMetadata.author,
    datePublished: date,
    datemodified: dateModified,
    mainEntityOfPage: "True",
    headline: headline,
    // https://schema.org/articleSection like a category
    articleSection: `${categories && categories.slice(1, 2)}`,
    image: {
      "@type": "imageObject",
      url: `${site.siteMetadata.siteUrl}/${image}`,
      height: "600",
      width: "800",
    },
    publisher: {
      "@type": "Organization",
      name: site.siteMetadata.title,
      logo: {
        "@type": "imageObject",
        url: `${site.siteMetadata.siteUrl}/${site.siteMetadata.logo}`,
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
    <Helmet>
      {/* https://www.advancedwebranking.com/blog/meta-tags-important-in-seo/   https://metatags.io/*/}
      <html lang={site.siteMetadata.locale} />
      {canonical && (
        <link
          rel="canonical"
          href={`${site.siteMetadata.siteUrl}/${canonical} `}
        />
      )}
      {!canonical && (
        <link rel="canonical" href={`${site.siteMetadata.siteUrl}/${slug}`} />
      )}
      <title>
        {title} | {site.siteMetadata.title}
      </title>
      <meta name="description" content={description} />
      <meta
        name="image"
        content={`${site.siteMetadata.siteUrl}/${site.siteMetadata.logo}`}
      />
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
      <meta property="og:locale" content={site.siteMetadata.locale} />
      <meta property="og:site_name" content={site.siteMetadata.title} />
      {canonical && (
        <meta
          property="og:url"
          content={`${site.siteMetadata.siteUrl}/${canonical} `}
        />
      )}
      {!canonical && (
        <meta
          property="og:url"
          content={`${site.siteMetadata.siteUrl}/${slug}`}
        />
      )}
      {/* Only "articles" have tags, so check and make an article ... */}
      <meta property="og:type" content={tags ? "article" : "website"} />

      {tags && <meta property="article:published_time" content={date} />}
      {tags && <meta property="article:modified_time" content={dateModified} />}
      {tags &&
        tags.map((tag, i) => (
          <meta property="article:tag" content={tag} key={i} />
        ))}

      {tags && (
        <meta property="article:author" content={site.siteMetadata.author} />
      )}
      {tags && (
        <meta
          property="og:image"
          content={`${site.siteMetadata.siteUrl}/${image}`}
        />
      )}
      {!tags && (
        <meta
          property="og:image"
          content={`${site.siteMetadata.siteUrl}/${site.siteMetadata.logo}`}
        />
      )}
      {/* Twitter Graph - https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started */}
      <meta name="twitter:card" content="summary"></meta>
      <meta name="robots" content="index, follow"></meta>
      {site.siteMetadata.social.twitter && (
        <meta name="twitter:site" content={site.siteMetadata.social.twitter} />
      )}
      {site.siteMetadata.social.twitterAuthor && (
        <meta
          name="twitter:creator"
          content={site.siteMetadata.social.twitterAuthor}
        />
      )}
      {!tags && (
        <script type="application/ld+json">
          {JSON.stringify(schemaWebPage)}
        </script>
      )}

      {tags && (
        <script type="application/ld+json">
          {JSON.stringify(schemaArticle)}
        </script>
      )}

      {schemaBreadcrumbs && (
        <script type="application/ld+json">
          {JSON.stringify(schemaBreadcrumbs)}
        </script>
      )}
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  canonical: PropTypes.string,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  dateModified: PropTypes.string,
  tags: PropTypes.object,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  categories: PropTypes.object,
  headline: PropTypes.string,
  articleBody: PropTypes.string,
}

export default SEO
