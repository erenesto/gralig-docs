import React from 'react'

import SEO from '../components/seo'
import DocsLayout from '../components/docs-layout'
import HomeLayout from '../components/home-layout'

const NotFoundPage = () => (
  <HomeLayout>
    <SEO title="404: Page Not found" />
    <h1>PAGE NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </HomeLayout>
)

export default NotFoundPage
