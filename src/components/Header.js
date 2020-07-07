import React from "react"
import { Link } from "gatsby"
import {
  HeaderWrapper,
  NavWrapper,
  NavLink,
  MobileMenuStyle,
  MobileLink,
} from "../elements/HeaderElements"

export default function Header({ title }) {
  return (
    <div>
      <HeaderWrapper>
        <span>🌳💻</span>
        <Link to="/">
          <h1>{title}</h1>
        </Link>
        <Nav />
      </HeaderWrapper>
      <MobileMenu />
    </div>
  )
}

const Nav = () => {
  return (
    <NavWrapper>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about/">About</NavLink>
      </li>
      <li>
        <NavLink to="/links/">Links</NavLink>
      </li>
    </NavWrapper>
  )
}

// MOBILE MENU

const MobileMenu = () => {
  return (
    <MobileMenuStyle>
      <MobileLink to="/">Home</MobileLink>
      <MobileLink to="/about/">About</MobileLink>
      <MobileLink to="/links/">Links</MobileLink>
    </MobileMenuStyle>
  )
}
