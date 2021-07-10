import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'gatsby-plugin-intl'

const DocsLayout = ({ children }) => {
  const intl = useIntl()

  const renderFooter = () => {
    if (intl.locale === 'tr') {
      return (
        <footer className="gra-footer">
          <span role="img" aria-label="Kulaklık">
            🎧&nbsp;
          </span>
          <span role="img" aria-label="Kahve">
            ☕️&nbsp;
          </span>
          <span role="img" aria-label="Kalp">
            ❤️
          </span>
          &nbsp;&amp; Gralig ile yapıldı. © 2019 -
          <a href="https://github.com/erenesto" target="_blank">
            Eren Guldas
          </a>
        </footer>
      )
    } else {
      return (
        <footer className="gra-footer">
          Built with &nbsp;
          <span role="img" aria-label="Headphone">
            🎧&nbsp;
          </span>
          <span role="img" aria-label="Coffee">
            ☕️&nbsp;
          </span>
          <span role="img" aria-label="Heart">
            ❤️
          </span>
          &nbsp;&amp; Gralig. © 2019 by
          <a href="https://github.com/erenesto" target="_blank">
            Eren Guldas
          </a>
        </footer>
      )
    }
  }

  return (
    <>
      <div className="gra-doc-content">{children}</div>
      {renderFooter()}
    </>
  )
}

DocsLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DocsLayout
