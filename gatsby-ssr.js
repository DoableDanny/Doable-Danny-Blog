import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { MDXProvider } from "@mdx-js/react"
import { preToCodeBlock } from "mdx-utils"

import Theme from "./src/themes/theme"
import Code from "./src/components/Code"

const GloablStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        background-color: pink;
    }

    body, html {
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        background-color: ${props => props.theme.colors.light1};
    
    }
`

// For styling code blocks with prism
const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    }

    // It's possible to have a pre without code in it
    return <pre {...preProps} />
  },
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <ThemeProvider theme={Theme}>
      <GloablStyles />
      {element}
    </ThemeProvider>
  </MDXProvider>
)
