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
  const { currentPage, numPages } = pageContext

  const posts = data.allMdx.edges

  return (
    <Layout thisPage={"blog"}>
      <Seo
        title={`Doable Danny | Blog`}
        description="A collection of articles on topics such as web development, react, react native, PHP, JavaScript, TypeScript, marketing and freelancing"
      />

      <div
        style={{
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 16,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <iframe
          src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=amz_music&banner=159S8R1P9HH8N29W4P82&f=ifr&linkID=830be6483b3f8b04d469ea34324a40c6&t=doabledanny-20&tracking_id=doabledanny-20"
          width={728}
          height={90}
          scrolling="no"
          border={0}
          marginWidth={0}
          style={{ border: "none" }}
          frameBorder={0}
        ></iframe>
      </div>

      {currentPage === 1 ? (
        <>
          <FeaturePost />
          <EmailSubscribeForm page={currentPage} />
          <h3
            style={{
              textAlign: "center",
              marginTop: 80,
              marginBottom: 0,
              fontSize: 22,
            }}
          >
            Recent Posts
          </h3>
        </>
      ) : null}

      <CenterAllPostCards>
        <PostCardsContainer>
          {posts.map((post, i) => (
            <Link
              to={`../../${post.node.frontmatter.slug}`}
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
      <Pagination currentPage={currentPage} numPages={numPages} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { featuredPost: { eq: false } } }
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
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
