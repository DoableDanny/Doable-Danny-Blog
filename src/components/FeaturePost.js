import React from "react"
import {
  FeaturedPostWrapper,
  PostTextWrapper,
} from "../elements/FeaturePostElements"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

export default function FeaturePost() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { featuredPost: { eq: true } } }) {
        edges {
          node {
            body
            id
            frontmatter {
              date(formatString: "DD MMMM YYYY")
              excerpt
              slug
              title
              featureImage {
                childImageSharp {
                  fixed {
                    base64
                    tracedSVG
                    aspectRatio
                    srcWebp
                    srcSetWebp
                    originalName
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allMdx.edges.map(edge => (
    <Link
      to={`../${edge.node.frontmatter.slug}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <FeaturedPostWrapper>
        <Image
          fixed={edge.node.frontmatter.featureImage.childImageSharp.fixed}
          style={{ width: "100%", height: 300 }}
        />
        <PostTextWrapper>
          <h1>{edge.node.frontmatter.title}</h1>
          <p>{edge.node.frontmatter.excerpt}</p>
          <span>- {edge.node.frontmatter.date}</span>
        </PostTextWrapper>
      </FeaturedPostWrapper>
    </Link>
  ))
}
