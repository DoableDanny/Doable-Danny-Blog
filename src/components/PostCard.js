import React from "react"
import {
  PostCardContent,
  StyledImgWrapper,
  StyledImg,
  TitleAndExcerpt,
} from "../elements/PostCardElements"
import Image from "gatsby-image"

export default function PostCard(props) {
  return (
    <PostCardContent>
      <StyledImgWrapper>
        <StyledImg fluid={props.image} />
      </StyledImgWrapper>
      <TitleAndExcerpt>
        <h2>{props.title}</h2>
        <p>{props.excerpt}</p>
        <span>- {props.date}</span>
      </TitleAndExcerpt>
    </PostCardContent>
  )
}
