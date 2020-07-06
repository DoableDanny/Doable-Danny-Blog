import styled from "styled-components"

export const ArticleContainer = styled.article`
  width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  background-color: #fff;
  box-shadow: ${props => props.theme.shadows.shadow1};

  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: left;
    display: block;
    margin-right: auto;
  }

  p {
    line-height: 1.5;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    width: 90%;
  }
`

export const TitleAndDate = styled.div`
  max-width: 600px;

  h1 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 900;
    font-family: "Piedra";
    line-height: 1.1;
  }

  span {
    display: block;
    text-align: right;
    margin-right: 10px;
  }
`

export const ImageContainer = styled.div`
  width: 600px;
  height: 370px;
  margin: 20px auto;

  @media ${props => props.theme.breakpoints.mobile} {
    width: 90%;
    height: 280px;
  }

  @media only screen and (max-width: 530px) {
    height: 240px;
  }
`
