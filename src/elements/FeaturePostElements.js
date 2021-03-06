import styled from "styled-components"
import Image from "gatsby-image"

export const FeaturedPostWrapper = styled.div`
  width: 650px;
  padding-bottom: 10px;
  box-shadow: ${props => props.theme.shadows.shadow1};
  background-color: ${props => props.theme.colors.main1};
  margin: 80px auto 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 50rem) {
    width: 40rem;
  }
  @media only screen and (max-width: 41rem) {
    width: 30rem;
  }
  @media only screen and (max-width: 31rem) {
    width: 22rem;
  }
  @media only screen and (max-width: 23rem) {
    width: 18rem;
  }
`
export const StyledImgWrapper = styled.div`
  width: 100%;
  height: 370px;

  @media only screen and (max-width: 50rem) {
    width: 40rem;
    height: 350px;
  }
  @media only screen and (max-width: 41rem) {
    width: 30rem;
    height: 300px;
  }
  @media only screen and (max-width: 31rem) {
    width: 22rem;
    height: 200px;
  }
  @media only screen and (max-width: 23rem) {
    width: 18rem;
    height: 150px;
  }

  @media only screen and (max-width: 480px) {
    height: 200px;
  }
  @media only screen and (max-width: 400px) {
    height: 190px;
  }
`

export const StyledImg = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
`

export const PostTextWrapper = styled.div`
  h2 {
    text-align: center;
    color: #99ffff;
    line-height: 1.1;
    font-family: "Oxygen Mono";
    font-size: 1.7rem;
  }

  p {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.postParagraph};
  }

  span {
    float: right;
    margin-right: 10px;
    color: ${props => props.theme.colors.postDate};
  }

  @media only screen and (max-width: 480px) {
    h2 {
      font-size: 1.4rem;
    }
    p,
    span {
      font-size: 1rem;
    }
  }
`
