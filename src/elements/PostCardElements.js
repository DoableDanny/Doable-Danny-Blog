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
  grid-gap: 45px 45px;

  @media only screen and (max-width: 50rem) {
    grid-gap: 35px 15px;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`

export const PostCardContent = styled.div`
  background: ${props => props.theme.colors.main1};
  height: 100%;
  position: relative;
  box-shadow: ${props => props.theme.shadows.shadow1};

  h2 {
    text-align: center;
    color: ${props => props.theme.colors.lightBlue};
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
  height: 250px;

  @media only screen and (max-width: 50rem) {
    height: 200px;
  }
  @media only screen and (max-width: 41rem) {
    height: 180px;
  }

  @media only screen and (max-width: 400px) {
    height: 160px;
  }
`

export const StyledImg = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
`
