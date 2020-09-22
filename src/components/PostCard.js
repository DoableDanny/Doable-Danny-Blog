import React from "react"
import {
  PostCardContent,
  StyledImgWrapper,
  StyledImg,
} from "../elements/PostCardElements"

export default function PostCard(props) {
  return (
    <PostCardContent>
      <StyledImgWrapper>
        <StyledImg fluid={props.image} />
      </StyledImgWrapper>

      <h2>{props.title}</h2>
      <p>"{props.excerpt}"</p>
      <span>- {props.date}</span>
    </PostCardContent>
  )
}
