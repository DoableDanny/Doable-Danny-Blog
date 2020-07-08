import styled from "styled-components"
import Image from "gatsby-image"

export const PostCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
`

export const PostCardContent = styled.div`
  display: flex;
  flex-direction: column;
  -ms-flex: 1;
  flex: 1;
`

export const StyledImgWrapper = styled.div`
  width: 100%;
  height: 200px;

  @media only screen and (max-width: 400px) {
    height: 160px;
  }
`

export const StyledImg = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
`

export const TitleAndExcerpt = styled.div``
