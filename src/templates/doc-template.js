import React from 'react'
import { graphql } from 'gatsby'
import { IntlContextConsumer } from 'gatsby-plugin-intl'
import Document from '../components/document'

export const query = graphql`
  fragment FileFields on File {
    fields {
      page {
        path
        type
        lang
        layout
        versions {
          lang
          title
          markdown
          mdtype
          section
        }
      }
    }
  }

  query($relativePath: String!) {
    current: file(relativePath: { eq: $relativePath }) {
      ...FileFields
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

export default function Template({ data, location }) {
  return (
    <IntlContextConsumer>
      {({ language: currentLanguage }) => (
        <Document
          siteUrl={data.site.siteMetadata.siteUrl}
          currentLanguage={currentLanguage}
          current={data.current.fields.page}
          location={location}
        />
      )}
    </IntlContextConsumer>
  )
}
