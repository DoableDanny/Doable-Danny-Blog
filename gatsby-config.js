/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Doable Danny",
    author: "Danny Adams",
    description:
      "A collection of my thoughts and writings on topics such as web development, programming, and meditation.",
    url: "https://www.doabledanny.com/",
    image: "/icon.jpg",
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
        extensions: [".md", ".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
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
        icon: `/src/images/icon.jpg`,
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
  ],
}
