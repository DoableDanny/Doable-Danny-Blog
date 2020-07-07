import styled from "styled-components"
import Image from "gatsby-image"

export const FeaturedPostWrapper = styled.div`
  width: 650px;
  padding-bottom: 10px;
  box-shadow: ${props => props.theme.shadows.shadow1};
  background-color: ${props => props.theme.colors.main1};
  color: #fff;
  margin: 40px auto 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 45rem) {
    width: 90%;
  }
`
export const StyledImgWrapper = styled.div`
  width: 100%;
  height: 300px;

  @media only screen and (max-width: 500px) {
    height: 200px;
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
  }

  span {
    float: right;
    margin-right: 10px;
  }

  @media only screen and (max-width: 500px) {
    h2 {
      font-size: 1.4rem;
    }
    p,
    span {
      font-size: 1rem;
    }
  }
`
