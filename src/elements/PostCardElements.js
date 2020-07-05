import styled from "styled-components"

export const PostCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 400px));
  justify-content: center;

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 85%;
  }
`

export const PostCardContent = styled.div`
  background-color: #ddd;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20px;
  box-shadow: ${props => props.theme.shadows.shadow1};
  border-bottom-right-radius: 5px;
`
