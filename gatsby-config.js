/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// Disable crawlers for Netlify deploy-previews in Robots.txt
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.doabledanny.com/",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Doable Danny",
    author: "Danny Adams",
    description:
      "A collection of my thoughts and writings on topics such as web development, programming, and meditation.",
    siteUrl: "https://www.doabledanny.com/",
    image: "icon.jpg",
    twitterUsername: "@doabledanny",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/DoableDanny",
      },
      {
        name: "github",
        url: "https://github.com/DoableDanny",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-17W1FPZE37", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
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
        name: `post-featured`,
        path: `${__dirname}/src/post-featured/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        root: __dirname,
        extensions: [".md", ".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              quality: 70,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "roboto mono",
          "muli:400,400i,700,700i",
          "Piedra",
          "Modak",
          "Oxygen Mono",
        ],
        display: "swap",
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Doable Danny Blog`,
        short_name: `Doable Danny`,
        description: `A collection of my thoughts and writings on topics such as web development, programming, and meditation.`,
        lang: `en`,
        display: `standalone`,
        icon: `${__dirname}/src/images/icon.jpg`,
        start_url: `/`,
        background_color: `#F7F7F7`,
        theme_color: `#99ffff`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/links/`],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://app.us10.list-manage.com/subscribe/post?u=aaeb466c8e7c7db1b946ae840&amp;id=fd68b7a6f3",
        timeout: 3500,
      },
    },
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: ["https://fonts.gstatic.com/"],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `/skills/`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/success`, `/links`],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*", disallow: ["/success/"] }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
  ],
}
