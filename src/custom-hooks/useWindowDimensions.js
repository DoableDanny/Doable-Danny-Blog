import { useState, useEffect } from "react"

const getWindowDimensions = () => {
  const isBrowser = typeof window !== "undefined"

  const windowWidth = isBrowser ? window.innerWidth : undefined
  const windowHeight = isBrowser ? window.innerHeight : undefined
  const screenWidth = isBrowser ? window.screen.innerWidth : undefined
  const screenHeight = isBrowser ? window.screen.innerHeight : undefined

  return {
    windowWidth,
    windowHeight,
    screenWidth,
    screenHeight,
  }
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [windowDimensions])

  return windowDimensions
}

export default useWindowDimensions
