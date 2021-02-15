// This Code component is for styling codeBlocks
import React from "react"
import rangeParser from "parse-numeric-range"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/vsDark"

// Determines if a line of code needs to be highlighted
const calculateLinesToHighlight = meta => {
  const RE = /{([\d,-]+)}/
  if (RE.test(meta)) {
    const strlineNumbers = RE.exec(meta)[1]
    const lineNumbers = rangeParser(strlineNumbers)
    return index => lineNumbers.includes(index + 1)
  } else {
    return () => false
  }
}

// CodeString is the code to be highlighted, language e.g. "html", metaString = lines to highlight e.g. {1-2, 6}
const Code = ({ codeString, language, metastring, ...props }) => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="gatsby-highlight" data-language={language}>
          <pre className={className} style={style}>
            {tokens.map((line, index) => {
              const lineProps = getLineProps({ line, key: index })
              if (shouldHighlightLine(index)) {
                lineProps.className = `${lineProps.className} highlight-line`
              }
              return (
                <div key={index} {...lineProps}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              )
            })}
          </pre>
        </div>
      )}
    </Highlight>
  )
}

export default Code
