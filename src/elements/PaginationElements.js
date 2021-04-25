import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const PaginationWrapper = styled.div`
  padding: 3rem 0;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

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

  @media only screen and (max-width: 575px) {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 400px) {
    a:nth-child(4),
    span {
      font-size: 0.7rem;
    }
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

export const NonClickableElement = styled.span`
  font-size: 0.875rem !important;
  margin: 0 2rem;
  color: ${props => props.theme.colors.dark3};

  @media ${props => props.theme.breakpoints.mobile} {
    margin: 0 0.7rem;
  }

  @media only screen and (max-width: 400px) {
    font-size: 0.7rem !important;
    margin: 0 0.6rem;
  }
`
