import styled from "styled-components"

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
    grid-template-rows: repeat(4, minmax(300px, 560px));
  }
`

export const PostCardContent = styled.div`
  background-color: ${props => props.theme.colors.main1};
  color: #fff;
  position: relative;
  margin: 20px;
  box-shadow: ${props => props.theme.shadows.shadow1};
  border-bottom-right-radius: 5px;
  height: 80%;

  @media only screen and (max-width: 750px) {
    height: 91%;
  }
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
    color: ${props => props.theme.colors.lightBlue};
    font-family: "Roboto mono";
  }

  span {
    margin-left: auto;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`
