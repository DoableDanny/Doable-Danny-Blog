import React from "react"

const FigureWithCaption = ({ src, alt, caption, href, a_text }) => {
  return (
    <figure>
      <img
        src={src}
        style={{ width: "85%", margin: "20px auto", display: "block" }}
        alt={alt}
        loading="lazy"
      />
      <figcaption>
        {caption}
        <a href={href} target="_blank">
          {a_text}
        </a>
      </figcaption>
    </figure>
  )
}

export default FigureWithCaption
