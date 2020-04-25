import React, { useContext, useEffect } from 'react'
import { useIntl, Link } from 'gatsby-plugin-intl'
import SEO from '../components/seo'

import 'gralig'
import '../styles/gralig-doc.scss'
import logo from '../images/gralig-logo.svg'
import ThemeContext from '../context/ThemeContext'
import { changeLocale } from 'gatsby-plugin-intl'

const IndexPage = () => {
  const { isDark } = useContext(ThemeContext)
  const intl = useIntl()

  useEffect(() => {
    const ln = localStorage.getItem('gatsby-intl-language')
    if (ln && ln !== 'en') {
      changeLocale(ln)
    }
  }, [])

  return (
    <>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: 'pages.index' })}
        siteTitle={intl.formatMessage({ id: 'title' })}
      />
      <div className={`gra-home-description ${isDark ? 'dark' : ''}`}>
        <img className="gra-home-logo" src={logo} alt="Gralig CSS Logo"></img>
        <h1 className="gra-home-title">
          {intl.formatMessage({ id: 'description' })}
        </h1>

        <div className="gra-home-footer">
          <Link to="/docs" className="btn">
            {intl.formatMessage({ id: 'words.docs' })}
          </Link>
          <a
            href="https://github.com/erenesto/gralig"
            className="btn btn-outline"
          >
            GITHUB
          </a>
          <a
            href="https://www.npmjs.com/package/gralig"
            className="btn btn-outline"
          >
            NPM
          </a>
        </div>
      </div>
    </>
  )
}

export default IndexPage
