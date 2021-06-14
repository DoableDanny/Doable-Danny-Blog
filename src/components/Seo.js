import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

export const Seo = ({ description, keywords, title, image, url, author }) => {
  // Ensure full url for Twitter cards
  if (image) {
    image = image[0] === "/" ? `https://www.doabledanny.com${image}` : image
  }

  console.log(image)

  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaTitle = title || data.site.siteMetadata.title
        const metaAuthor = author || data.site.siteMetadata.author
        const metaUrl = url || data.site.siteMetadata.siteUrl
        const metaImage = image || data.site.siteMetadata.image
        const metaKeywords = keywords || [
          "Doable Danny Blog",
          "personal blog",
          "programming",
          "web development",
          "web dev",
          "mindfulness",
        ]
        const metaTwitterUsername = data.site.siteMetadata.twitterUsername
        return (
          <Helmet
            title={title}
            html={[{}]}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              { name: `author`, content: metaAuthor },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content: metaImage,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                name: `twitter:creator`,
                content: metaTwitterUsername,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:title`,
                content: metaTitle,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `twitter:image`,
                content: metaImage,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                    name: `keywords`,
                    content: metaKeywords.join(`, `),
                  }
                : []
            )}
          >
            <html lang="en" />
          </Helmet>
        )
      }}
    />
  )
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
        twitterUsername
      }
    }
  }
`
