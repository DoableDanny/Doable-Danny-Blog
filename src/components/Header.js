import React from "react"
import { HeaderWrapper, NavWrapper, NavLink } from "../elements/HeaderElements"

export default function Header({ title }) {
  return (
    <HeaderWrapper>
      <span>🌳💻</span>
      <h1>{title}</h1>

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
