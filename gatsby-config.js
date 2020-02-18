module.exports = {
  siteMetadata: {
    title: `Gatsby Naked Theme`,
    logo: `naked-logo.png`,
    websiteDescription: `If HTML is the structure, and JavaScript the action, then CSS is the clothing. You just need to add CSS and content. This is the Gatsby Theme Naked. Just like what you wear in life, what your site wears is very personal. CSS in Js, check! No problem. CSS Modules, check! No Problem. Styled component libraries of different flavors? Check! No problem.`,
    menuLinks: [
      {
        id: 1,
        name: "home",
        link: "/",
      },
      {
        id: 2,
        name: "blog",
        link: "/blog",
      },
      {
        id: 3,
        name: "tutorials",
        link: "/tutorials",
      },
      {
        id: 4,
        name: "contact",
        link: "/contact",
      },
    ],
    author: `David Kartuzinski`,
    authorIntro: `David Kartuzinski is a Web Developer who loves open source and loves GatsbyJs. Hire him today for your next project or unfilled job.`,
    authorImage: `david-kartuzinski.jpg`,
    siteUrl: `https://gatsby-theme-naked.netlify.com/`,
    legalName: `A Gatsby Naked Theme`,
    locale: `en-US`,
    textDirection: `ltr`,
    socialLinks: {
      twitter: "https://twitter.com/NakedGatsby",
      instagram: "https://www.instagram.com/nakedgatsby/",
      pinterest: "#",
      facebook: "#",
    },

    // googleAnalyticsID: "UA-158642528-1",
    themeColor: "#F3824A",
    backgroundColor: "#FFF7F0",
    siteRss: "/rss.xml",
    social: {
      facebook: "",
      twitter: "@NakedGatsby",
      twitterAuthor: "",
    },
    address: {
      city: "Paris",
      region: "Ile de France",
      country: "France",
      zipCode: "75015",
    },
    contact: {
      email: "david@kaidawei.me",
      phone: "",
    },
    foundingDate: "2019",
    googleTrackingId: "UA-158642528-1",
    cookieHubId: "77974473",
  },
  plugins: [
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
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
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
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://kaidawei.us3.list-manage.com/subscribe/post?u=b96fce7934d3d67838002705e&amp;id=87c55442ce", // add your MailChimp list endpoint here; see instructions below
      },
    },
    {
      resolve: "@debiki/gatsby-plugin-talkyard",
      options: {
        talkyardServerUrl:
          "https://comments-for-gatsby-theme-naked-netlify-com.talkyard.net/",
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
        access_token: "29925131442.1677ed0.ed375ff25eae45c4867b30955d3ec304",
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://gatsby-theme-naked.netlify.com/",
        sitemap: "https://gatsby-theme-naked.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    // https://manifest-validator.appspot.com/
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyThemeNaked`,
        short_name: `NakedTheme`,
        start_url: `/`,
        background_color: `#FFF7F0`,
        theme_color: `#F3824A`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
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
