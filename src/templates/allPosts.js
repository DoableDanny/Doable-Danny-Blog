import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import FeaturePost from "../components/FeaturePost"
import { PostCardsContainer } from "../elements/PostCardElements"
import PostCard from "../components/PostCard"
import Pagination from "../components/Pagination"

export default function allPosts({ pageContext, data }) {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  const posts = data.allMdx.edges
  return (
    <Layout>
      <FeaturePost />
      <h3>{posts.length} Posts</h3>
      <PostCardsContainer>
        {posts.map((post, i) => (
          <Link
            to={post.node.frontmatter.slug}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <PostCard
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              excerpt={post.node.frontmatter.excerpt}
              image={post.node.frontmatter.featureImage.childImageSharp.fixed}
              key={post.node.id}
            />
          </Link>
        ))}
      </PostCardsContainer>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
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
`
