import React from "react"
import {
  FeaturedPostWrapper,
  PostTextWrapper,
  StyledImgWrapper,
  StyledImg,
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
                  fluid {
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                    originalImg
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
    <FeaturedPostWrapper>
      <Link
        to={`../${edge.node.frontmatter.slug}`}
        style={{
          textDecoration: "none",
          color: "inherit",
          width: "100%",
        }}
      >
        <StyledImgWrapper>
          <StyledImg
            fluid={edge.node.frontmatter.featureImage.childImageSharp.fluid}
          />
        </StyledImgWrapper>
        <PostTextWrapper>
          <h2>{edge.node.frontmatter.title}</h2>
          <p>{edge.node.frontmatter.excerpt}</p>
          <span>- {edge.node.frontmatter.date}</span>
        </PostTextWrapper>
      </Link>
    </FeaturedPostWrapper>
  ))
}
