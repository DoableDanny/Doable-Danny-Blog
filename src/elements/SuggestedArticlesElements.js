import styled from "styled-components"

export const SuggestedArticlesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;

  @media only screen and (max-width: 920px) {
    flex-direction: column;
    align-items: center;
  }
`

export const SuggestedArticleWrapper = styled.div`
  width: 300px;
  margin: 0 8px;
  text-align: center;

  @media only screen and (max-width: 920px) {
    margin-bottom: 40px;
  }
`
