/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
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
              quality: 85,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["roboto mono", "muli:400,400i,700,700i"],
        display: "swap",
      },
    },
  ],

  siteMetadata: {
    title: "Doable Danny",
    author: "Danny Adams",
    description: "A collection of my thoughts and writings.",
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
}
