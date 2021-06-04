import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  SuggestedArticlesContainer,
  SuggestedArticleWrapper,
} from "../elements/SuggestedArticlesElements"

const SuggestedArticles = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              date(formatString: "DD MMM YYYY")
              excerpt
              featureImage {
                childImageSharp {
                  fixed(width: 350, height: 200) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              slug
              title
            }
          }
        }
      }
    }
  `)

  console.log(data.allMdx.edges[0].node.frontmatter)
  return (
    <div style={{ marginTop: 100 }}>
      <h2 style={{ textAlign: "center" }}>
        Enjoyed this article? Check out these...
      </h2>
      <SuggestedArticlesContainer>
        {data.allMdx.edges.map(edge => (
          <SuggestedArticle
            image={edge.node.frontmatter.featureImage.childImageSharp.fixed}
            title={edge.node.frontmatter.title}
            excerpt={edge.node.frontmatter.excerpt}
            date={edge.node.frontmatter.date}
          />
        ))}
      </SuggestedArticlesContainer>
    </div>
  )
}

const SuggestedArticle = ({ image, title, excerpt, date }) => {
  console.log(image)
  return (
    <SuggestedArticleWrapper>
      <div
        style={{
          width: 300,
          height: 200,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Img
          fixed={image}
          style={{ position: "absolute", left: -30, top: 0 }}
        />
      </div>
      <h2>{title}</h2>
      <p>{excerpt}</p>
      <span>- {date}</span>
    </SuggestedArticleWrapper>
  )
}

export default SuggestedArticles
