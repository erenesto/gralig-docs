import React from 'react'
import PropTypes from 'prop-types'

const DocsLayout = ({ children }) => {
  return (
    <>
      <div className="gra-content">{children}</div>
      <footer className="footer">
        © 2019, Built with{' '}
        <span role="img" aria-label="Heart">
          ❤️
        </span>
        &amp; Gralig
      </footer>
    </>
  )
}

DocsLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DocsLayout
