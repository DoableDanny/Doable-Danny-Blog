import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"
import Theme from "../themes/theme"

// #e30b5d raspberry

export const HeaderWrapper = styled.div`
  background-color: ${props => props.theme.colors.main1};
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;
  padding: 10px;

  h1 {
    margin-left: 10px;
  }
`
export const NavWrapper = styled.ul`
  display: flex;
  list-style: none;
  margin-right: 10vw;
`

export const NavLink = styled(GatsbyLink)`
  text-decoration: none;
  margin-right: 20px;
  font-size: 18px;
  color: #fff;
`
