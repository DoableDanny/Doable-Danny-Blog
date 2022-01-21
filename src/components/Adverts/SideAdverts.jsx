import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  AdvertsAsideContainer,
  AdvertContainer,
} from "../../elements/AdvertsElements"

const SideAdverts = () => {
  const [articleHeight, setArticleHeight] = useState(0)

  useEffect(() => {
    const height = document.querySelector("article").clientHeight

    setArticleHeight(height)
  }, [])

  const data = useStaticQuery(graphql`
    query {
      gitCheatSheet: file(relativePath: { eq: "adverts/git_cheat_dark.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <AdvertsAsideContainer articleHeight={articleHeight}>
      <Advert
        title="FREE Git Cheat Sheet PDF 🔥"
        desc="Stop wasting time searching for the same Git commands, and download this cheat sheet with 50 common commands! Available in light and dark mode."
        img={data.gitCheatSheet.childImageSharp.fluid}
        imgAlt="git cheat sheet pdf"
        href="https://doabledanny.gumroad.com/l/git-commands-cheat-sheet-pdf"
        marginTop={1200}
      />
    </AdvertsAsideContainer>
  )
}

const Advert = ({ title, desc, img, imgAlt, href, marginTop }) => {
  return (
    <AdvertContainer marginTop={marginTop}>
      <div
        style={{
          backgroundColor: "lightblue",
          height: "120px",
          borderRadius: "5px",
        }}
      >
        <a href={href}>
          <Img fluid={img} alt={imgAlt} />
        </a>
      </div>

      <h6 style={{ margin: "0" }}>
        <a href={href}>{title}</a>
      </h6>
      <p>{desc}</p>
      <a className="cta" href={href} target="_blank">
        I want this!
      </a>
    </AdvertContainer>
  )
}

export default SideAdverts
