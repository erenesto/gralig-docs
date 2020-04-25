import React, { useMemo } from 'react'
import SEO from '../components/seo'
import { getResolvedVersionForLanguage } from '../utils/node'
import Markdown from '../components/markdown'
import DocsLayout from './docs-layout'

function Document({ currentLanguage, current, location }) {
  const { lang: fallbackLang, versions } = current

  const fields = useMemo(
    () =>
      getResolvedVersionForLanguage(versions, currentLanguage, fallbackLang),
    [versions, currentLanguage, fallbackLang]
  )
  return (
    <DocsLayout location={location} layout={current.layout}>
      <SEO title={fields.title} />
      <section className={`gra-section-${fields.section}`}>
        <h1 className="gra-doc-h1">{fields.title}</h1>
        <Markdown
          markdown={fields.markdown}
          mdtype={fields.mdtype}
          section={fields.section}
        />
      </section>
    </DocsLayout>
  )
}

export default Document
