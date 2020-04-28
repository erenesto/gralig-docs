/* eslint-disable react-hooks/exhaustive-deps*/
import { useState, useEffect } from 'react'
import { useIntl } from 'gatsby-plugin-intl'

export const useBeforeFirstRender = cb => {
  const [hasRendered, setHasRendered] = useState(false)
  useEffect(() => setHasRendered(true), [hasRendered])
  if (!hasRendered) {
    cb()
  }
}

export const useScrollIntoView = () => {
  const [activeLink, setActiveLink] = useState(null)

  useEffect(() => {
    if (activeLink) {
      activeLink.scrollIntoView({
        block: 'nearest',
      })
    }
  }, [activeLink])

  return { activeLink, setActiveLink }
}

export const useNavLinks = () => {
  const intl = useIntl()
  const [sidenavLinks, setSidenavLinks] = useState({})

  useEffect(() => {
    setSidenavLinks({
      group1: [
        {
          goTo: '',
          name: intl.formatMessage({ id: 'sidenavLinks.docs.name' }),
        },
      ],
      group2: [
        {
          goTo: 'colors',
          name: intl.formatMessage({ id: 'sidenavLinks.colors.name' }),
        },
        {
          goTo: 'grid',
          name: intl.formatMessage({ id: 'sidenavLinks.grid.name' }),
        },
        {
          goTo: 'dark-mode',
          name: intl.formatMessage({ id: 'sidenavLinks.dark.name' }),
        },
        {
          goTo: 'variables',
          name: intl.formatMessage({ id: 'sidenavLinks.vars.name' }),
        },
        {
          goTo: 'responsive',
          name: intl.formatMessage({ id: 'sidenavLinks.responsive.name' }),
        },
        {
          goTo: 'utils',
          name: intl.formatMessage({ id: 'sidenavLinks.utils.name' }),
        },
      ],
      group3: [
        {
          goTo: 'typography',
          name: intl.formatMessage({ id: 'sidenavLinks.typography.name' }),
        },
        {
          goTo: 'button',
          name: intl.formatMessage({ id: 'sidenavLinks.button.name' }),
        },
        {
          goTo: 'form',
          name: intl.formatMessage({ id: 'sidenavLinks.form.name' }),
        },
        {
          goTo: 'custom-inputs',
          name: intl.formatMessage({ id: 'sidenavLinks.custom-inputs.name' }),
        },
        {
          goTo: 'checkbox',
          name: intl.formatMessage({ id: 'sidenavLinks.checkbox.name' }),
        },
        {
          goTo: 'radio',
          name: intl.formatMessage({ id: 'sidenavLinks.radio.name' }),
        },
        {
          goTo: 'switch',
          name: intl.formatMessage({ id: 'sidenavLinks.switch.name' }),
        },
        {
          goTo: 'nav',
          name: intl.formatMessage({ id: 'sidenavLinks.nav.name' }),
        },
        {
          goTo: 'navbar',
          name: intl.formatMessage({ id: 'sidenavLinks.navbar.name' }),
        },
        {
          goTo: 'footer',
          name: intl.formatMessage({ id: 'sidenavLinks.footer.name' }),
        },
        {
          goTo: 'breadcrumb',
          name: intl.formatMessage({ id: 'sidenavLinks.breadcrumb.name' }),
        },
        {
          goTo: 'card',
          name: intl.formatMessage({ id: 'sidenavLinks.card.name' }),
        },
        {
          goTo: 'alert',
          name: intl.formatMessage({ id: 'sidenavLinks.alert.name' }),
        },
        {
          goTo: 'list',
          name: intl.formatMessage({ id: 'sidenavLinks.list.name' }),
        },
        {
          goTo: 'table',
          name: intl.formatMessage({ id: 'sidenavLinks.table.name' }),
        },
        {
          goTo: 'dropdown',
          name: intl.formatMessage({ id: 'sidenavLinks.dropdown.name' }),
        },
        {
          goTo: 'progress',
          name: intl.formatMessage({ id: 'sidenavLinks.progress.name' }),
        },
        {
          goTo: 'loading',
          name: intl.formatMessage({ id: 'sidenavLinks.loading.name' }),
        },
        {
          goTo: 'modal',
          name: intl.formatMessage({ id: 'sidenavLinks.modal.name' }),
        },
      ],
    })
  }, [intl.locale])

  return { sidenavLinks, setSidenavLinks }
}
