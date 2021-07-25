import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { ContainerWrapper, ContentWrapper } from "../elements/ContainerElements"
import { useStaticQuery, graphql } from "gatsby"

export default function Layout({ children, thisPage }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <ContainerWrapper>
      <Header title={data.site.siteMetadata.title} thisPage={thisPage} />
      <ContentWrapper>
        <main>{children}</main>
        <Footer />
      </ContentWrapper>
    </ContainerWrapper>
  )
}
