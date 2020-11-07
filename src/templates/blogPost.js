import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Image from "gatsby-image"
import HyvorTalk from "hyvor-talk-react"
import Layout from "../components/Layout"
import EmailSubscribeForm from "../components/EmailSubscribeForm"
import {
  ArticleContainer,
  TitleAndDate,
  ImageContainer,
} from "../elements/SingleArticleElements"
import { Seo } from "../components/Seo"

export default function BlogPost({ data }) {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fluid

  // Getting SEO Image
  const imgSrc =
    data.mdx.frontmatter.featureImage &&
    data.mdx.frontmatter.featureImage.childImageSharp.fluid.src

  let origin = ""
  if (typeof window !== "undefined") {
    origin = window.location.origin
  }

  const seoImage = origin + imgSrc
  // end of getting SEO img

  return (
    <Layout thisPage={"blog"}>
      <Seo
        title={data.mdx.frontmatter.title}
        image={seoImage}
        description={data.mdx.frontmatter.excerpt}
        keywords={data.mdx.frontmatter.keywords}
      />
      <ArticleContainer>
        <TitleAndDate>
          <h1 style={{ lineHeight: 1.2 }}>{data.mdx.frontmatter.title}</h1>
          <span>-{data.mdx.frontmatter.date}</span>
        </TitleAndDate>
        <ImageContainer>
          <Image
            fluid={featureImage}
            style={{ width: "100%", height: "100%" }}
          />
        </ImageContainer>
        <MDXRenderer images={data.mdx.frontmatter.images}>
          {data.mdx.body}
        </MDXRenderer>
      </ArticleContainer>

      <EmailSubscribeForm page={data.mdx.frontmatter.slug} />

      <div style={{ marginTop: 30, marginLeft: "15%", color: "blue" }}>
        <HyvorTalk.CommentCount
          websiteId={1101}
          id={data.mdx.frontmatter.slug}
          mode="number"
        />
        <span>...</span>
      </div>
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
        keywords
        images {
          publicURL
        }
        featureImage {
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
