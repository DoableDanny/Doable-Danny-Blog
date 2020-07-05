import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

// #e30b5d raspberry

export const HeaderWrapper = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.main1};
  color: #68fffe;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;
  padding: 10px;
  border-top: 3px solid #009900;

  span {
    background-color: #009900;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    margin-left: 80px;
    font-family: Piedra;
    font-size: 2.2rem;
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
  color: #68fffe;
`
