import styled from "styled-components"
import Image from "gatsby-image"

export const CenterAllPostCards = styled.div`
  display: flex;
  justify-content: center;
`

export const PostCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 450px));
  grid-auto-rows: 1fr;
  margin: 20px;
  grid-gap: 35px 15px;

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`

export const PostCardContent = styled.div`
  background: ${props => props.theme.colors.main1};
  height: 100%;
  color: red;
  position: relative;

  h2 {
    text-align: center;
    color: ${props => props.theme.colors.lightBlue2};
  }

  p {
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.postParagraph};
  }

  span {
    position: absolute;
    color: ${props => props.theme.colors.postDate};
    bottom: 3px;
    right: 5px;
  }
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

export const TitleAndExcerpt = styled.div`
  color: red;
  backround: pink;

  span {
    color: green;
    float: right;
    vertical-align: bottom;
  }
`
