import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
} from "../elements/FooterElements"
import twitter from "../images/svg/twitter-3.svg"
import github from "../images/svg/github-1.svg"
import codepen from "../images/svg/codepen-icon.svg"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      twitter: file(relativePath: { eq: "twitter.png" }) {
        publicURL
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://twitter.com/DoableDanny"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="Twitter Logo" />
          </a>
          <a
            href="https://github.com/DoableDanny"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="Github Logo" />
          </a>
          <a
            href="https://codepen.io/DoableDanny"
            target="_blank"
            rel="noreferrer"
          >
            <img src={codepen} alt="Codepen Logo" />
          </a>
        </FooterSocialIcons>
        <p>Follow me on Twitter where I post my daily coding creations!</p>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
