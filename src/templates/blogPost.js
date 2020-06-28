import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"

export default function BlogPost({ data }) {
  console.log(data)

  return (
    <Layout>
      <div>
        <h1>hello</h1>
      </div>
    </Layout>
  )
}

// $id is a variable passed into this query from gatsby-node.js. This query then finds that posts data.
export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
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
`
