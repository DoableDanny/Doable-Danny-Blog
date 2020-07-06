import React from "react"
import {
  HamburgerStyle,
  HamburgerMenuContainer,
  HamburgerLink,
} from "../elements/HamburgerElements"

export const Hamburger = () => {
  const handleClick = () => {}

  return (
    <HamburgerStyle onClick={handleClick}>
      <svg viewBox="0 0 100 80" width="40" height="40">
        <rect width="100" height="20" rx="8"></rect>
        <rect y="30" width="100" height="20" rx="8"></rect>
        <rect y="60" width="100" height="20" rx="8"></rect>
      </svg>
    </HamburgerStyle>
  )
}

export const HamburgerMenu = () => {
  return (
    <HamburgerMenuContainer>
      <HamburgerLink to="/">Home</HamburgerLink>
      <HamburgerLink to="/about/">About</HamburgerLink>
      <HamburgerLink to="/links/">Links</HamburgerLink>
    </HamburgerMenuContainer>
  )
}
