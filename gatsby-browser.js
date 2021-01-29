import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { preToCodeBlock } from "mdx-utils"
import { MDXProvider } from "@mdx-js/react"

import Theme from "./src/themes/theme.js"
import "./language-tabs.css"
import Code from "./src/components/Code"

const GloablStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, html {
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        background:  ${props => props.theme.colors.light1}) ;
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
  wrapper: ({ children }) => <>{children}</>,
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <ThemeProvider theme={Theme}>
      <GloablStyles />
      {element}
    </ThemeProvider>
  </MDXProvider>
)
