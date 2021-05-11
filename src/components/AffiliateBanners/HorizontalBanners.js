import React, { useState, useEffect } from "react"
import useWindowDimensions from "../../custom-hooks/useWindowDimensions"

const HorizontalBanners = () => {
  const { windowWidth } = useWindowDimensions()
  const [bannerSize, setBannerSize] = useState("sm")

  useEffect(() => {
    if (windowWidth && windowWidth > 720) {
      if (bannerSize === "sm") setBannerSize("bg")
    } else if (bannerSize === "bg") setBannerSize("sm")
  }, [windowWidth, bannerSize])

  return (
    <div
      style={{
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 50,
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <iframe
        src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=amz_music&banner=159S8R1P9HH8N29W4P82&f=ifr&linkID=a4c56aa974c4944277f0ccf005d127b0&t=doabledanny-20&tracking_id=doabledanny-20"
        title="large-amazon-banner"
        width={728}
        height={90}
        scrolling="no"
        border={0}
        marginWidth={0}
        style={{
          border: "none",
          display: bannerSize === "bg" ? "block" : "none",
        }}
        frameBorder={0}
      ></iframe>
      <iframe
        src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=13&l=ur1&category=amz_music&banner=14TVPT2VMAVM946B7302&f=ifr&linkID=a883b427408117bf1c854d98c31cece3&t=doabledanny-20&tracking_id=doabledanny-20"
        title="small-amazon-banner"
        width={468}
        height={60}
        scrolling="no"
        border={0}
        marginWidth={0}
        style={{
          border: "none",
          display: bannerSize === "sm" ? "block" : "none",
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
        frameBorder={0}
      ></iframe>
    </div>
  )
}

export default HorizontalBanners
