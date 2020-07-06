import React from "react"
import { Link } from "gatsby"
import { HeaderWrapper, NavWrapper, NavLink } from "../elements/HeaderElements"
import { Hamburger, HamburgerMenu } from "../components/Hamburger"

export default function Header({ title }) {
  return (
    <div>
      <HeaderWrapper>
        <span>🌳💻</span>
        <Link to="/">
          <h1>{title}</h1>
        </Link>
        <Hamburger />
        <Nav />
      </HeaderWrapper>
      <HamburgerMenu />
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
    </NavWrapper>
  )
}
