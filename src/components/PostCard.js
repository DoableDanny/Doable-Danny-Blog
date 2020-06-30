import React from "react"
import { PostCardContent } from "../elements/PostCardElements"
import Image from "gatsby-image"

export default function PostCard(props) {
  return (
    <PostCardContent>
      <Image
        fixed={props.image}
        style={{
          width: "100%",
          height: 200,
        }}
      />
      <div>
        <h1>{props.title}</h1>
        <p>{props.excerpt}</p>
        <span>{props.date}</span>
      </div>
    </PostCardContent>
  )
}
