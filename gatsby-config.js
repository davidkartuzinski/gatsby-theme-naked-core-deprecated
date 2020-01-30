module.exports = {
  siteMetadata: {
    title: `Healthy Tea | 1001 Tea Facts`,
    description: `Discover 1001 Tea Facts and discover the spiritual and healthy ways of tea. Discover how you can choose the right tea for your needs and wants.`,
    author: `David Kartuzinski`,
    websiteUrl: `https://1001teafacts.com/`,
    newsletterHeadline: `Sign up and get exclusive content delivered to your inbox`,
    newsletterTagLine: `Aside from exclusive content, get occasional deals, new product alerts, and tea-related news. No spam. Just occasional emails for stuff you probably want to get.`,
    newsletterButtonText: `Sign up now`,
    newsletterPrivacyText: `We promise to make the best content possible and to keep your email safely with only us. You can unsusbcribe easily at any time.`,
    newsletterPrivacyReminder: `Strict No Spam Policy. No Sharing of your data - EVER!`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // add any options here
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `1001 Tea Facts`,
        short_name: `1001 Tea Facts`,
        start_url: `/`,
        background_color: `#90c665`,
        theme_color: `#90c665`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://kaidawei.us3.list-manage.com/subscribe/post?u=b96fce7934d3d67838002705e&amp;id=87c55442ce", // add your MC list endpoint here; see instructions below
      },
    },
    `gatsby-plugin-offline`,
  ],
}
