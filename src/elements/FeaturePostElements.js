import styled from "styled-components"

export const FeaturedPostWrapper = styled.div`
  width: 650px;
  padding-bottom: 10px;
  box-shadow: 5px 10px 10px #888888;
  background-color: ${props => props.theme.colors.main1};
  color: #fff;
  margin: 40px auto 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${props => props.theme.breakpoints.mobile} {
    width: 90%;
  }
`

export const PostTextWrapper = styled.div`
  h2 {
    text-align: center;
    color: ${props => props.theme.colors.lightBlue};
    line-height: 1.1;
    font-family: "Roboto mono";
    font-size: 1.7rem;
  }

  p {
    font-size: 1.2rem;
  }

  span {
    float: right;
    margin-right: 10px;
  }
`
