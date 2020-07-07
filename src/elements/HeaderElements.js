import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

export const HeaderWrapper = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.main1};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;
  padding: 10px;
  border-top: 3px solid rgb(0, 153, 0);

  span {
    background-color: rgb(0, 153, 0);
    position: absolute;
    top: 0;
    bottom: 0;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.lightBlue};
  }

  @media only screen and (max-width: 650px) {
    a:first-child {
      display: none;
    }
  }

  h1 {
    margin-left: 80px;
    font-family: roboto mono;
    font-size: 2.2rem;
  }

  @media only screen and (max-width: 380px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`
export const NavWrapper = styled.ul`
  display: flex;
  list-style: none;
  margin-right: 10vw;

  @media only screen and (max-width: 800px) {
    margin-right: 0;
  }
`

export const NavLink = styled(GatsbyLink)`
  text-decoration: none;
  margin-right: 20px;
  font-size: 18px;
  color: ${props => props.theme.colors.lightBlue};
`
// MOBILE MENU

export const MobileMenuStyle = styled.div`
  background-color: #333;
  display: flex;
  justify-content: flex-end;
  visibility: hidden;

  @media only screen and (max-width: 650px) {
    visibility: visible;
  }
`
export const MobileLink = styled(GatsbyLink)`
  text-decoration: none;
  margin-right: 20px;
  padding: 3px;
  font-size: 18px;
  color: ${props => props.theme.colors.lightBlue};
  width: 60px;
`
