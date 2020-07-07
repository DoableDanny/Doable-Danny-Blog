import styled from "styled-components"
import Image from "gatsby-image"

export const PostCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 400px));
  justify-content: center;
  grid-template-rows: repeat(2, minmax(300px, 560px));

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 85%;
    grid-template-rows: repeat(4, minmax(300px, 480px));
  }

  @media only screen and (max-width: 450px) {
    grid-template-rows: repeat(4, minmax(300px, 500px));
  }

  @media only screen and (max-width: 350px) {
    grid-template-rows: repeat(4, minmax(300px, 620px));
  }
`

export const PostCardContent = styled.div`
  background-color: ${props => props.theme.colors.main1};
  color: #fff;
  position: relative;
  margin: 10px;
  box-shadow: ${props => props.theme.shadows.shadow1};
  border-bottom-right-radius: 5px;
  height: 80%;

  @media only screen and (max-width: 750px) {
    height: 91%;
  }

  @media only screen and (max-width: 350px) {
    height: 93%;
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
  position: absolute;
  bottom: 0;
  top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
    color: ${props => props.theme.colors.lightBlue2};
    font-family: "Oxygen Mono";
    margin-bottom: 15px;
  }

  p {
    margin-top: 0;
  }

  span {
    margin-left: auto;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }

  @media only screen and (max-width: 400px) {
    top: 158px;

    h2 {
      font-size: 1.4rem;
      margin-bottom: 10px;
    }
    p {
      margin-top: 0;
    }
    p,
    span {
      font-size: 1rem;
    }
  }
`
