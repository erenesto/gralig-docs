/* eslint-disable react-hooks/exhaustive-deps */

import React, { useContext, useEffect } from 'react'
import { useIntl, Link } from 'gatsby-plugin-intl'
import SEO from '../components/seo'

import logo from '../images/gralig-logo.svg'
import ThemeContext from '../context/ThemeContext'
import { navigate } from 'gatsby-plugin-intl'

const IndexPage = ({ path }) => {
  const { isDark } = useContext(ThemeContext)
  const intl = useIntl()
  const { locale } = intl

  useEffect(() => {
    const ln = localStorage.getItem('gatsby-intl-language')

    if (locale !== ln || ln !== path) {
      localStorage.setItem('gatsby-intl-language', intl.locale)
    }

    //some fixes for intl navigation

    if (
      ln &&
      ln !== undefined &&
      ln === 'tr' &&
      path !== '/tr' &&
      path !== '/en'
    ) {
      navigate('tr')
    }
  }, [locale, path])

  return (
    <>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: 'pages.index' })}
        siteTitle={intl.formatMessage({ id: 'title' })}
        page={'home'}
        description={intl.formatMessage({ id: 'summary' })}
      />
      <div className={`gra-doc-home-description ${isDark ? 'dark' : ''}`}>
        <img
          className="gra-doc-home-logo"
          src={logo}
          alt="Gralig CSS Logo"
        ></img>
        <h1 className="gra-doc-home-title">
          {intl.formatMessage({ id: 'description' })}
        </h1>

        <div className="gra-doc-home-footer">
          <Link to="/docs" className="gra-btn">
            {intl.formatMessage({ id: 'words.docs' })}
          </Link>
          <a
            href="https://github.com/erenesto/gralig"
            className="gra-btn gra-btn-outline"
          >
            GITHUB
          </a>
          <a
            href="https://www.npmjs.com/package/gralig"
            className="gra-btn gra-btn-outline"
          >
            NPM
          </a>
        </div>
      </div>
    </>
  )
}

export default IndexPage
