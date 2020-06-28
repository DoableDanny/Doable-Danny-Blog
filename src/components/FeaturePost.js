import React from "react"
import {
  FeaturedPostWrapper,
  PostTextWrapper,
} from "../elements/FeaturePostElements"
import { useStaticQuery, graphql } from "gatsby"

export default function FeaturePost() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "post-1/greyhound.jpg" }) {
        publicURL
      }
    }
  `)

  return (
    <FeaturedPostWrapper>
      <img
        src={data.image.publicURL}
        alt="Running Greyhound"
        style={{ width: "100%", height: 300 }}
      />
      <PostTextWrapper>
        <h1>Title of Post</h1>
        <p>
          Excerpt from the post... greyhounds are 100mph couch potatoes,
          lighting fast but like to sleep through most of the day.
        </p>
      </PostTextWrapper>
    </FeaturedPostWrapper>
  )
}
