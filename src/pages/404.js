import React, { useEffect, useContext } from 'react'
import { useIntl, Link } from 'gatsby-plugin-intl'
import ThemeContext from '../context/ThemeContext'
import { changeLocale } from 'gatsby-plugin-intl'

import SEO from '../components/seo'
import Header from '../components/header'

const NotFoundPage = () => {
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
      <SEO title={intl.formatMessage({ id: 'pages.404' })} lang={intl.locale} />
      <div className={`${isDark ? 'dark' : ''} gra-doc-wrapper`}>
        <Header />
        <div className="gra-doc-main">
          <main>
            <div className="gra-doc-content u-center-text">
              <h1>{intl.formatMessage({ id: '404.pagenotfound' })}</h1>
              <p>{intl.formatMessage({ id: '404.emptyroute' })}</p>
              <Link to="/docs" className="btn btn-outline">
                {intl.formatMessage({ id: '404.gotodocs' })}
              </Link>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
