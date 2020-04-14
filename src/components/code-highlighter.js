/* eslint-disable import/first */
import React, { useContext, useState, useEffect } from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  defaultStyle,
  atomOneDark,
} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useIntl } from 'gatsby-plugin-intl'
import ThemeContext from '../context/ThemeContext'
import Icons from '../images/icons/Icons'

const CodeHighlighter = ({ language, children }) => {
  const intl = useIntl()
  const { isDark } = useContext(ThemeContext)
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (isCopied === true) {
      setTimeout(() => {
        setIsCopied(false)
      }, 1500)
    }
  }, [isCopied])

  return isDark ? (
    <div className="gra-code-highlight">
      <CopyToClipboard text={children} onCopy={() => setIsCopied(true)}>
        <button
          style={{ fontSize: '1rem' }}
          className="btn btn-clear btn-copy-to-clipboard"
        >
          <Icons
            style={{ marginRight: '6px' }}
            name="copy"
            width={12}
            height={12}
            fill={isDark ? '#8c959b' : '#5f676d'}
          />
          {isCopied
            ? intl.formatMessage({ id: 'words.copied' })
            : intl.formatMessage({ id: 'words.copy' })}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter language={language} style={atomOneDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  ) : (
    <div className="gra-code-highlight">
      <CopyToClipboard text={children} onCopy={() => setIsCopied(true)}>
        <button
          style={{ fontSize: '1rem' }}
          className="btn btn-clear btn-copy-to-clipboard"
        >
          <Icons
            style={{ marginRight: '6px' }}
            name="copy"
            width={12}
            height={12}
            fill={isDark ? '#8c959b' : '#5f676d'}
          />
          {isCopied
            ? intl.formatMessage({ id: 'words.copied' })
            : intl.formatMessage({ id: 'words.copy' })}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter language={language} style={defaultStyle}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeHighlighter
