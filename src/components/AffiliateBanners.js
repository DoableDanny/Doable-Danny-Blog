import React, { useEffect, useState, useRef } from "react"
import { SideBannerContainerDiv } from "../elements/AffiliateBannerElements"

const SIDE_BANNER_LINKS = [
  "//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=primevideo&banner=0PEFSZ0VQTRVV35WMYG2&f=ifr&linkID=893a335c37f64b4cd0657cba5de68fa9&t=doabledanny-20&tracking_id=doabledanny-20",
  "//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=prime_up&banner=14FS3RN4YQD1CA33DAR2&f=ifr&linkID=2adb8e9476e5dd48616f67bf1ef33316&t=doabledanny-20&tracking_id=doabledanny-20",
  "//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=amz_music&banner=09G7T6KYX076TQG8K002&f=ifr&linkID=f15a70491fbe938e3fd7422f41984249&t=doabledanny-20&tracking_id=doabledanny-20",
  "//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=kindle&banner=0M6H5KRZ3FXHWMQNXYG2&f=ifr&linkID=3a5f6ff76be993ffdcac898d78e76ca9&t=doabledanny-20&tracking_id=doabledanny-20",
  "//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=kindle&banner=1KVED7EBET76KRMTZAG2&f=ifr&linkID=96099b9d344405beceda5dd9378cda4c&t=doabledanny-20&tracking_id=doabledanny-20",
]

let sideBannerTopDistance = 0

const AffiliateBanners = () => {
  const [articleHeight, setArticleHeight] = useState(0)
  const isBrowser = typeof window !== "undefined"

  const bannerDiv = useRef()

  useEffect(() => {
    const height = document.querySelector("article").clientHeight

    setArticleHeight(height)

    return () => (sideBannerTopDistance = 0)
  }, [])

  return (
    <>
      {isBrowser && window.screen.width > 999 ? (
        <SideBannerContainerDiv ref={bannerDiv} articleHeight={articleHeight}>
          {articleHeight > 0 &&
            SIDE_BANNER_LINKS.map((link, i) => {
              sideBannerTopDistance += 1600

              if (articleHeight > sideBannerTopDistance + 600) {
                return (
                  <iframe
                    src={link}
                    title={`amazon-banner-${i}`}
                    key={i}
                    width={160}
                    height={600}
                    scrolling="no"
                    border={0}
                    marginWidth={0}
                    style={{
                      border: "none",
                      position: "absolute",
                      top: sideBannerTopDistance,
                      right: 0,
                    }}
                    frameBorder={0}
                  ></iframe>
                )
              } else return null
            })}
        </SideBannerContainerDiv>
      ) : null}
    </>
  )
}

export default AffiliateBanners
