module.exports = {
  siteMetadata: {
    title: `1001 Tea Facts`,
    logo: `1001teafactslogo.png`,
    websiteDescription: `Discover 1001 Tea Facts and discover the spiritual and healthy ways of tea. Welcome to the wonderful world of Tea. Discover the practical sides to consuming tea for you and your loved ones.`,
    author: `David Kartuzinski`,
    siteUrl: `https://1001teafacts.com`,
    legalName: `1001 Tea Facts`,
    newsletterHeadline: `Sign up and get exclusive content delivered to your inbox`,
    newsletterTagLine: `Aside from exclusive content, get occasional deals, new product alerts, and tea-related news. No spam. Just occasional emails for stuff you probably want to get.`,
    newsletterButtonText: `Sign up now`,
    newsletterPrivacyText: `We promise to make the best content possible and to keep your email safely with only us. You can unsusbcribe easily at any time.`,
    newsletterPrivacyReminder: `Strict No Spam Policy. No Sharing of your data - EVER!`,
    // twitter: `1001_teafacts`,
    locale: `en-US`,
    textDirection: `ltr`,
    socialLinks: {
      twitter: "https://twitter.com/1001_teafacts",
      instagram: "https://www.instagram.com/official1001teafacts/",
      pinterest: "https://www.pinterest.com/official1001teafacts",
      facebook: "https://www.facebook.com/official1001teafacts/",
    },
    googleAnalyticsID: "UA-149846841-1",
    themeColor: "#90c665",
    backgroundColor: "#543622",
    siteRss: "/rss.xml",
    social: {
      facebook: "official1001teafacts",
      twitter: "@1001_teafacts",
      twitterAuthor: "",
    },
    address: {
      city: "Paris",
      region: "Ile de France",
      country: "France",
      zipCode: "75015",
    },
    contact: {
      email: "david@1001teafact.com",
      phone: "",
    },
    foundingDate: "2019",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // add any options here
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // useAutoGen: required 'true' to use autogen
        useAutoGen: true,
        // autoGenHomeLabel: optional 'Home' is default
        autoGenHomeLabel: `Home`,
        // exlude: optional, include to overwrite these default excluded pages
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
        ],
        // crumbLabelUpdates: optional, update specific crumbLabels in the path
        crumbLabelUpdates: [
          {
            // pathname: "/book",
            // crumbLabel: "Books",
            crumbStyle: { color: "blue" },
            crumbActiveStyle: { color: "red" },
          },
        ],
        // optional: switch to className styling
        // see `useClassNames example with `AutoGen` below
        useClassNames: true,
        // optional: if you are using path prefix
        // usePathPrefix: '/blog',
      },
    },
    `gatsby-plugin-react-helmet`,
    // Reminder (https://github.com/gatsbyjs/gatsby/issues/15486#issuecomment-509405867)
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`],
        defaultLayouts: {
          posts: require.resolve("./src/templates/single-blog-post.js"),
          default: require.resolve("./src/templates/single-blog-post.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
          { resolve: "gatsby-remark-responsive-iframe" },
          {
            // https://dev.to/niklasmtj/implement-prismjs-in-gatsbyjs-fff
            // https://prismjs.com/index.html#supported-languages
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: {
                sh: "bash",
                js: "javascript", // can add additional languages
              },
              showLineNumbers: true,
            },
          },
        ],
        // https://github.com/gatsbyjs/gatsby/issues/15486#issuecomment-510153237
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TeaFacts`,
        short_name: `TeaFacts`,
        start_url: `/`,
        background_color: `#90c665`,
        theme_color: `#90c665`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
        theme_color_in_head: false, // This will avoid adding theme-color meta tag.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://kaidawei.us3.list-manage.com/subscribe/post?u=b96fce7934d3d67838002705e&amp;id=87c55442ce", // add your MC list endpoint here; see instructions below
      },
    },
    {
      resolve: "@debiki/gatsby-plugin-talkyard",
      options: {
        talkyardServerUrl: "https://comments-for-1001teafacts-com.talkyard.net",
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`, `description`, `categories`, `excerpt`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          Mdx: {
            title: node => node.frontmatter.title,
            tags: node => node.frontmatter.tags,
            description: node => node.frontmatter.description,
            categories: node => node.frontmatter.categories,
            path: node => node.frontmatter.path,
            excerpt: node => node.excerpt,
          },
        },
        // Optional filter to limit indexed nodes
        filter: (node, getNode) => node.frontmatter.tags !== "exempt",
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: "17406723570.1677ed0.e1b51a7da4ab4e0094db3cb8c679c9f3",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `1001 Tea Facts`,
        short_name: `1001TeaFacts`,
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
        start_url: `/`,
        background_color: `#fffffa`,
        theme_color: `#90c665`,
        display: `standalone`,
      },
    },

    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://1001teafacts.com",
        sitemap: "https://www.1001teafacts.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}

// SEO needs: https://moz.com/blog/seo-2020
// 1. Titles, metas, headers, image alts, site speed, robots.txt, sitemaps, UX, analytics
// 2. Schema Mark-up, breadcrumbs, FAQ Schema, News schema, Business info
// 3. Research what matters for your industry
// 4. E-A-T Google Factors ?? // BERT   // Searcher Intent
// 5. Favicons
// 6. Entity and Topical integration - part of the keyword buckets
// 7. Featured Snippets (how to do)
// 8. Invest in visuals
// 9. Cultivate engagement with comments
// 10. Repurpose Content
// 11. Prune and / or improve thin / low quality pages
// 12. Customer insigts - https://sparktoro.com/
// 13. Find Keyword opportunities in Google Search Console //facets by google
// 14. target link-intent keyword ____ facts, ____ statistics, to naturally build links
// 15. Provide unique research w/ visuals

// Structured data schema.org
// https://www.youtube.com/watch?v=xQeRA-Ojq5c
// https://developers.google.com/search/docs/guides/sd-policies
// https://jsonld.com/blog/
// custom HTML
// A recipe page with both recipe text and an accompanying video. Mark the text and video separately with schema.org/Recipe and schema.org/VideoObject respectively.
//A category page listing several different products (or recipes, videos, or any other type). Each entity should be marked up using the relevant schema.org type, such as schema.org/Product for product category pages. However, if one item is marked, all items should be marked. Also, unless this is a carousel page, the marked items should not link out to separate details pages.

// A video play page with related videos embedded in a separate section on the page. In this case, mark up the main video and related videos individually.

// Some Datatype
// WebSite, Organization, BlogPosting, VideoObject, BreadCrumbs

// https://search.google.com/structured-data/testing-tool/u/0/#url=kdworld.com.tw

// 1. Keep Gatsby up to date
// 2. Control what you are returning with filters in the graphql queiries
// 3. Control the image type graphql fragments with size breakpoints, image-sharp for the different image points to not generate image thumbnails that users will never use.
// 4. Deployment - Amplify - Gatsby Builds Cloudplatform
