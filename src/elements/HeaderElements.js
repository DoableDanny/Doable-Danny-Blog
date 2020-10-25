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
  border-top: 4px solid ${props => props.theme.colors.lightBlue};
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
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 380px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`
export const EmojiWrapper = styled.div`
  background-color: ${props => props.theme.colors.lightBlue};
  // background-color: rgb(0, 153, 0);
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
  text-decoration: ${props =>
    props.thisPage ? "underline !important" : "none"};
  margin-right: 20px;
  font-size: 18px;
  color: ${props =>
    props.thisPage
      ? "#68fffe !important"
      : `${props.theme.colors.lightBlue2} !important`};

  :hover,
  :focus {
    color: ${props => props.theme.colors.lightBlue} !important;
  }
`
// MOBILE MENU

export const MobileMenuStyle = styled.div`
  display: none;

  @media only screen and (max-width: 650px) {
    background-color: #051f59;
    display: flex;
    justify-content: flex-end;
  }
`
export const MobileLink = styled(GatsbyLink)`
  text-decoration: ${props => (props.thisPage ? "underline" : "none")};
  margin-right: 20px;
  padding: 3px;
  font-size: 18px;
  color: ${props =>
    props.thisPage ? "#A0FCFC " : props.theme.colors.lightBlue2};
  width: 60px;

  :hover,
  :focus {
    color: ${props => props.theme.colors.lightBlue} !important;
  }
`
