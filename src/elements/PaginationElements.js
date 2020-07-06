import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const PaginationWrapper = styled.div`
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  a:nth-child(1) {
    color: ${props =>
      props.isPastTen ? props.theme.colors.dark1 : props.theme.colors.dark3};
    pointer-events: ${props => (props.isPastTen ? "auto" : "none")};
    cursor: ${props => (props.isPastTen ? "pointer" : "default")};
  }

  a:nth-child(2) {
    color: ${props =>
      props.isFirst ? props.theme.colors.dark3 : props.theme.colors.dark1};
    pointer-events: ${props => (props.isFirst ? "none" : "auto")};
    cursor: ${props => (props.isFirst ? "default" : "pointer")};
  }

  span {
    font-size: 1rem;
  }

  a:nth-child(4) {
    text-decoration: none;
    margin-left: 3px;
    font-size: 1rem;
  }

  a:nth-child(4):hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 400px) {
    a:nth-child(4),
    span {
      font-size: 0.7rem;
    }
  }

  a:nth-child(5) {
    color: ${props =>
      props.isLast ? props.theme.colors.dark3 : props.theme.colors.dark1};
    pointer-events: ${props => (props.isLast ? "none" : "auto")};
    cursor: ${props => (props.isLast ? "default" : "pointer")};
  }

  a:nth-child(6) {
    color: ${props =>
      props.abletoforwardten
        ? props.theme.colors.dark1
        : props.theme.colors.dark3};
    pointer-events: ${props => (props.abletoforwardten ? "auto" : "none")};
    cursor: ${props => (props.abletoforwardten ? "pointer" : "default")};
  }
`

export const PaginationElement = styled(props => <Link {...props} />)`
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 400;
  text-decoration: none;
  margin: 0 2rem;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    margin: 0 0.7rem;
  }

  @media only screen and (max-width: 400px) {
    font-size: 0.7rem;
    margin: 0 0.6rem;
  }
`
