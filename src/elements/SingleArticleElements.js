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
    padding-top: 56px;
  }

  p,
  li {
    text-align: left;
    padding-top: 16px;
    padding-bottom: 16px;
    font-size: 20px;
    line-height: 145%;
  }

  li {
    margin-left: 36px;
    padding-right: 10px;
  }

  a {
    text-decoration: none;
    color: #009292;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    width: 90%;

    p,
    li {
      padding-top: 8px;
      padding-bottom: 8px;
    }
  }
`

export const TitleAndDate = styled.div`
  // background-color: pink;

  margin-top: 32px;
  margin-bottom: 40px;

  h1 {
    font-family: ${props => props.theme.fonts.code};
    text-align: center;
    font-size: 2.6rem;
    padding-top: 40px;
    padding-bottom: 16px;
  }

  @media only screen and (max-width: 42rem) {
    h1 {
      font-size: 2.2rem;
    }
  }

  span {
    display: block;
    text-align: right;
    color: black;
    margin-right: 30px;
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
