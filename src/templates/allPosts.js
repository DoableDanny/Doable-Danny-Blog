import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import FeaturePost from "../components/FeaturePost"
import {
  PostCardsContainer,
  CenterAllPostCards,
} from "../elements/PostCardElements"
import PostCard from "../components/PostCard"
import Pagination from "../components/Pagination"

import { Seo } from "../components/Seo"
import EmailSubscribeForm from "../components/EmailSubscribeForm"

export default function AllPosts({ pageContext, data }) {
  // Forward and backwards one page
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  // Back ten pages
  const isPastTen = currentPage > 10
  let minusTen
  if (currentPage <= 10) {
    minusTen = false
  } else if (currentPage === 11) {
    minusTen = `/`
  } else {
    minusTen = `${currentPage - 10}`
  }

  // Forward ten pages
  let plusTen = currentPage + 10 <= numPages ? `${currentPage + 10}` : false
  const abletoforwardten = currentPage + 10 <= numPages ? true : false

  const posts = data.allMdx.edges
  return (
    <Layout thisPage={"home"}>
      <Seo title={`Doable Danny | Blog`} />
      {currentPage === 1 ? <FeaturePost /> : null}
      {currentPage === 1 ? <EmailSubscribeForm page={currentPage} /> : null}
      {currentPage === 1 ? (
        <h3 style={{ marginLeft: "10%", marginTop: 30 }}>Recent Posts</h3>
      ) : null}
      <CenterAllPostCards>
        <PostCardsContainer>
          {posts.map((post, i) => (
            <Link
              to={`../${post.node.frontmatter.slug}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                height: "100%",
              }}
              key={post.node.frontmatter.slug}
            >
              <PostCard
                title={post.node.frontmatter.title}
                date={post.node.frontmatter.date}
                excerpt={post.node.frontmatter.excerpt}
                image={post.node.frontmatter.featureImage.childImageSharp.fluid}
                key={post.node.frontmatter.slug}
              />
            </Link>
          ))}
        </PostCardsContainer>
      </CenterAllPostCards>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
        currentPage={currentPage}
        numPages={numPages}
        minusTen={minusTen}
        isPastTen={isPastTen}
        plusTen={plusTen}
        abletoforwardten={abletoforwardten}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
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
`
