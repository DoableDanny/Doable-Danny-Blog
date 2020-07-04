import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Image from "gatsby-image"
import HyvorTalk from "hyvor-talk-react"
import Layout from "../components/Layout"
import EmailSubscribeForm from "../components/EmailSubscribeForm"

export default function BlogPost({ data }) {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed

  return (
    <Layout>
      <article>
        <h1>{data.mdx.frontmatter.title}</h1>
        <p>{data.mdx.frontmatter.date}</p>
        <Image fixed={featureImage} style={{ marginLeft: 30 }} />
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </article>
      <EmailSubscribeForm page={data.mdx.frontmatter.slug} />
      <HyvorTalk.Embed
        websiteId={1101}
        id={data.mdx.frontmatter.slug}
        loadMode="scroll"
      />
    </Layout>
  )
}

// $id is a variable passed into this query from gatsby-node.js. This query then finds that posts data.
export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
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
`
