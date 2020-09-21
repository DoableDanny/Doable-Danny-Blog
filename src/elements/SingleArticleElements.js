import styled from "styled-components"

export const ArticleContainer = styled.article`
  width: 650px;
  margin: 20px auto;
  box-shadow: ${props => props.theme.shadows.shadow1};

  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: left;
    display: block;
    padding-top: 40px;
    padding-bottom: 8px;
  }

  p,
  li {
    line-height: 1.6;
    text-align: left;
    font-family: ${props => props.theme.fonts.main};
    padding-top: 8px;
    padding-bottom: 8px;
  }

  a {
    color: blue;
    text-decoration: none;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    width: 90%;
  }
`

export const TitleAndDate = styled.div`
  // background-color: pink;

  margin-top: 32px;
  margin-bottom: 40px;

  h1 {
    text-align: center;
    font-size: 2.3rem;
    font-family: ${props => props.theme.fonts.main};
    padding-top: 40px;
    padding-bottom: 16px;
  }

  span {
    display: block;
    text-align: right;
    color: black;
    margin-right: 10px;
  }

  img {
    width: 95%;
  }
`

export const ImageContainer = styled.div`
  width: 600px;
  height: 370px;
  margin: 20px auto;

  @media only screen and (max-width: 50rem) {
    width: 38rem;
    height: 350px;
  }

  @media only screen and (max-width: 42rem) {
    width: 32rem;
    height: 320px;
  }

  @media only screen and (max-width: 37rem) {
    width: 28rem;
    height: 280px;
  }
  @media only screen and (max-width: 33rem) {
    width: 24rem;
    height: 250px;
  }
  @media only screen and (max-width: 29rem) {
    width: 21rem;
    height: 210px;
  }
  @media only screen and (max-width: 25rem) {
    width: 18rem;
    height: 170px;
  }
  @media only screen and (max-width: 22rem) {
    width: 15rem;
    height: 150px;
  }
`
