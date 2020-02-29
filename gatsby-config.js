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
      twitter: "https://twitter.com/kai_dawei",
      linkedin: "https://www.linkedin.com/in/kaidawei/",
      github: "https://github.com/davidkartuzinski/",
    },
    foundingDate: "2019",
    googleTrackingId: "UA-158642528-1",
    cookieHubId: "77974473",
    sitewideMessage: `Gatsby Theme Naked may contain paid advertising and contextual
    affiliate links. Companies may pay (at no cost to you) commissions for the
    sale of products linked in a post. I partner with brands and products that I
    am passionate about and appreciate your support in making this blog
    possible!`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        autoGenHomeLabel: `Home`,
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
        ],
        crumbLabelUpdates: [],
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
          //<iframe src="http://www.example.com/" width="600" height="400"></iframe> must use width and height unitless or pixel based.
          `gatsby-remark-responsive-iframe`,
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
    `gatsby-plugin-catch-links`,
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
        fields: [
          `title`,
          `tags`,
          `description`,
          `categories`,
          `excerpt`,
          `slug`,
        ],
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
            slug: node => node.frontmatter.slug,
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
