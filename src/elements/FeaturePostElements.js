import styled from "styled-components"

export const FeaturedPostWrapper = styled.div`
  width: 650px;
  padding-bottom: 10px;
  box-shadow: 5px 10px 10px #888888;
  background-color: #ccc;
  margin: 40px auto 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${props => props.theme.breakpoints.mobile} {
    width: 90%;
  }
`

export const PostTextWrapper = styled.div`
  h1 {
    text-align: center;
  }
`
