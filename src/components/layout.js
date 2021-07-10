import React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from './header'
import SideNav from './sidenav'
import ThemeContext from '../context/ThemeContext'
import HomeLayout from './home-layout'

export const query = graphql`
  {
    allFile {
      nodes {
        fields {
          page {
            layout
          }
        }
      }
    }
  }
`

const Layout = ({ data, children, location }) => {
  const { isDark } = useContext(ThemeContext)
  const renderLayout = () => {
    if (data === undefined || data.allSitePage) {
      return <HomeLayout>{children}</HomeLayout>
    } else if (data.current && data.current.fields.page.layout === 'docs') {
      return (
        <div className={`${isDark ? 'dark' : ''} gra-doc-wrapper`}>
          <Header />
          <div className="gra-doc-main">
            <SideNav path={location.pathname} />
            <main className="gra-doc-content-wrapper">{children}</main>
          </div>
        </div>
      )
    }
  }

  return renderLayout()
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
