import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

export const HamburgerStyle = styled.div`
  fill: ${props => props.theme.colors.lightBlue};
  display: none;
  cursor: pointer @media only screen and (max-width: 500px) {
    display: block;
  }
`

export const HamburgerMenuContainer = styled.div`
  background-color: #222;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`

export const HamburgerLink = styled(GatsbyLink)`
  text-decoration: none;
  margin-left: 20px;
  margin-top: 15px;
  font-size: 18px;
  color: ${props => props.theme.colors.lightBlue};
  width: 60px;
`
