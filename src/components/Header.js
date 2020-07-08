import React from "react"
import { Link } from "gatsby"
import {
  HeaderWrapper,
  EmojiWrapper,
  NavWrapper,
  NavLink,
  MobileMenuStyle,
  MobileLink,
} from "../elements/HeaderElements"

export default function Header({ title, thisPage }) {
  return (
    <div>
      <HeaderWrapper>
        <EmojiWrapper>
          <span role="img" aria-label="tree">
            🌳
          </span>
          <span role="img" aria-label="laptop">
            💻
          </span>
        </EmojiWrapper>
        <Link to="/">
          <h1>{title}</h1>
        </Link>
        <Nav thisPage={thisPage} />
      </HeaderWrapper>
      <MobileMenu thisPage={thisPage} />
    </div>
  )
}

const Nav = ({ thisPage }) => {
  return (
    <NavWrapper>
      <li>
        <NavLink to="/" thisPage={thisPage === `home` ? true : false}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about/" thisPage={thisPage === `about` ? true : false}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/links/" thisPage={thisPage === `links` ? true : false}>
          Links
        </NavLink>
      </li>
    </NavWrapper>
  )
}

// MOBILE MENU

const MobileMenu = ({ thisPage }) => {
  return (
    <MobileMenuStyle>
      <MobileLink to="/" thisPage={thisPage === `home` ? true : false}>
        Home
      </MobileLink>
      <MobileLink to="/about/" thisPage={thisPage === `about` ? true : false}>
        About
      </MobileLink>
      <MobileLink to="/links/" thisPage={thisPage === `links` ? true : false}>
        Links
      </MobileLink>
    </MobileMenuStyle>
  )
}
