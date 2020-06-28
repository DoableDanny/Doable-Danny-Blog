import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
} from "../elements/FooterElements"

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
            <img src={data.twitter.publicURL} alt="Twitter Logo" />
          </a>
        </FooterSocialIcons>
        <p>Follow me on Twitter where I post my daily coding creations!</p>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
