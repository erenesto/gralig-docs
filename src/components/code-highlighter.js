/* eslint-disable import/first */
import React, { useContext, useState, useEffect } from 'react'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useIntl } from 'gatsby-plugin-intl'
import ThemeContext from '../context/ThemeContext'
import Icons from '../images/icons/Icons'
import { PrismLight as Highlighter } from 'react-syntax-highlighter'

import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss'

import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism'
import okaidia from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia'

Highlighter.registerLanguage('bash', bash)
Highlighter.registerLanguage('scss', scss)

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
    <div className="gra-doc-code-highlight">
      <CopyToClipboard text={children} onCopy={() => setIsCopied(true)}>
        <button
          style={{ fontSize: '1rem' }}
          className="gra-btn gra-btn-clear gra-doc-btn-copy-to-clipboard"
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
      <Highlighter language={language} style={okaidia}>
        {children}
      </Highlighter>
    </div>
  ) : (
    <div className="gra-doc-code-highlight">
      <CopyToClipboard text={children} onCopy={() => setIsCopied(true)}>
        <button
          style={{ fontSize: '1rem' }}
          className="gra-btn gra-btn-clear gra-doc-btn-copy-to-clipboard"
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
      <Highlighter language={language} style={prism}>
        {children}
      </Highlighter>
    </div>
  )
}

export default CodeHighlighter
