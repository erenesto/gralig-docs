import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'gatsby-plugin-intl'

const DocsLayout = ({ children }) => {
  const intl = useIntl()

  const renderFooter = () => {
    if (intl.locale === 'tr') {
      return (
        <footer className="footer">
          <span role="img" aria-label="Kulaklık">
            🎧
          </span>
          <span role="img" aria-label="Kahve">
            ☕️
          </span>
          <span role="img" aria-label="Kalp">
            ❤️
          </span>
          &amp; Gralig ile yapıldı. © 2019
        </footer>
      )
    } else {
      return (
        <footer className="footer">
          © 2019, Built with &nbsp;
          <span role="img" aria-label="Headphone">
            🎧
          </span>
          <span role="img" aria-label="Coffee">
            ☕️
          </span>
          <span role="img" aria-label="Heart">
            ❤️
          </span>
          &amp; Gralig.
        </footer>
      )
    }
  }

  return (
    <>
      <div className="gra-content">{children}</div>
      {renderFooter()}
    </>
  )
}

DocsLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DocsLayout
