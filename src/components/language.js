import React, { useState, useEffect } from 'react'
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl'
import { onSpecificKeyPress } from '../utils/helpers'

const languageName = {
  en: 'EN',
  tr: 'TR',
}

const Language = () => {
  const [language, setLanguage] = useState('')
  const onLangChange = (e, lang) => {
    if (e.keyCode !== undefined) {
      onSpecificKeyPress(e, 'Enter', changeLocale, lang)
    } else {
      changeLocale(lang)
    }
  }

  useEffect(() => {
    const ln = localStorage.getItem('gatsby-intl-language')

    setLanguage(ln)
    if (ln && ln !== language && ln !== 'en') {
      changeLocale(ln)
    }


  }, [language])

  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => (
        <div className="gra-lang">
          {languages.map(lang => (
            <span
              className={`nav-link gra-menu-icon-wrapper ${
                currentLocale === lang ? 'gra-lang-active' : ''
                }`}
              key={lang}
              role="button"
              tabIndex={0}
              onKeyPress={e => onLangChange(e, lang)}
              onClick={e => onLangChange(e, lang)}
              aria-label={`${lang} Button`}
            >
              {languageName[lang]}
            </span>
          ))}
        </div>
      )}
    </IntlContextConsumer>
  )
}

export default Language
