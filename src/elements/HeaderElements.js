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
  border-top: 3px solid rgb(0, 153, 0);
  padding: 10px;
  padding-left: 70px;

  @media only screen and (max-width: 50rem) {
    padding-left: 10px;
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
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 380px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`
export const EmojiWrapper = styled.div`
  background-color: rgb(0, 153, 0);
  position: absolute;
  top: 0;
  bottom: 0;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavWrapper = styled.ul`
  display: flex;
  list-style: none;
  margin-right: 7vw;

  @media only screen and (max-width: 800px) {
    margin-right: 0;
  }
`

export const NavLink = styled(GatsbyLink)`
  text-decoration: none;
  margin-right: 20px;
  font-size: 18px;
  color: ${props =>
    props.thisPage ? "#68fffe !important" : "#3dcc3d !important"};

  :hover {
    color: ${props => props.theme.colors.lightBlue} !important;
  }
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
  color: ${props => (props.thisPage ? "#68fffe " : "#a6f1a6")};
  width: 60px;

  :hover {
    color: ${props => props.theme.colors.lightBlue} !important;
  }
`
