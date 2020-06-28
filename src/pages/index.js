import React from "react"
import Layout from "../components/Layout"
import FeaturePost from "../components/FeaturePost"
import PostCard from "../components/PostCard"
import {
  PostCardsContainer,
  PostCardContent,
} from "../elements/PostCardElements"
import { graphql } from "gatsby"

export default function index({ data }) {
  const posts = data.allMdx.edges

  return (
    <Layout>
      <FeaturePost />
      <PostCardsContainer>
        {posts.map((post, i) => (
          <PostCard
            title={post.node.frontmatter.title}
            date={post.node.frontmatter.date}
            excerpt={post.node.frontmatter.excerpt}
            image={post.node.frontmatter.featureImage.childImageSharp.fixed}
            key={post.node.id}
          />
        ))}
      </PostCardsContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            excerpt
            slug
            title
            featureImage {
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
