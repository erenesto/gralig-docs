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

const Layout = ({ children, data }) => {
  const { isDark } = useContext(ThemeContext)

  const renderLayout = () => {
    if (data && data.current.fields.page.layout === 'docs') {
      return (
        <div className={`${isDark ? 'dark' : ''} gra-wrapper`}>
          <Header />
          <div className="gra-main">
            <SideNav />
            <main className="gra-content-wrapper">{children}</main>
          </div>
        </div>
      )
    }
    return <HomeLayout>{children}</HomeLayout>
  }

  return renderLayout()
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
