import React from "react"
import { Link } from "gatsby"
import { HeaderWrapper, NavWrapper, NavLink } from "../elements/HeaderElements"

export default function Header({ title }) {
  return (
    <HeaderWrapper>
      <span>🌳💻</span>
      <Link to="/">
        <h1>{title}</h1>
      </Link>

      <Nav />
    </HeaderWrapper>
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
