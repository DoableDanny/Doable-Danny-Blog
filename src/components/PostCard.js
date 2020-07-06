import React from "react"
import { PostCardContent, TitleAndExcerpt } from "../elements/PostCardElements"
import Image from "gatsby-image"

export default function PostCard(props) {
  return (
    <PostCardContent>
      <Image
        fixed={props.image}
        style={{
          width: "100%",
          height: 200,
          display: "block",
        }}
      />
      <TitleAndExcerpt>
        <h2>{props.title}</h2>
        <p>{props.excerpt}</p>
        <span>- {props.date}</span>
      </TitleAndExcerpt>
    </PostCardContent>
  )
}
