import React from "react"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
} from "../elements/FooterElements"
import twitter from "../images/svg/twitter-3.svg"
import github from "../images/svg/github-1.svg"
import codepen from "../images/svg/codepen-icon.svg"
import theme from "../themes/theme"

export default function Footer() {
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
        <p>
          <a
            href="https://twitter.com/DoableDanny"
            target="_blank"
            rel="noreferrer"
            style={{ color: theme.colors.lightBlue }}
          >
            Follow me on Twitter{" "}
          </a>
          where I post my daily coding creations!
        </p>
        <p style={{ fontSize: "0.8rem" }}>
          Affiliate disclosure: As an Amazon Associate, we may earn commissions
          from qualifying purchases from Amazon.com.
        </p>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
