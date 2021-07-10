import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import { onSpecificKeyPress } from '../utils/helpers'

const GraModal = ({ show, modalToggle }) => {
  const { locale } = useIntl()

  return (
    <div
      className={`gra-modal-wrapper ${show ? 'open' : ''}`}
      id="gra-doc-modal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modal_title"
    >
      <span
        className="gra-modal-overlay"
        onKeyDown={modalToggle}
        onClick={modalToggle}
        data-dismiss="modal"
        role="button"
        tabIndex={-1}
      ></span>
      <div className="gra-modal">
        <div className="gra-modal-header">
          <h5 className="gra-modal-title" id="modal_title">
            {locale === 'tr' ? 'Açılır Pencere Başlığı' : 'Modal Title'}
          </h5>
        </div>
        <div className="gra-modal-body">
          Mollit ullamco incididunt consequat consequat consectetur. Ut
          excepteur ipsum cillum eiusmod commodo sint occaecat esse et velit.
          Elit velit ad commodo ea sit nostrud qui. Qui proident duis veniam
          quis aliquip exercitation adipisicing laboris ex.
        </div>
        <div className="gra-modal-footer">
          <div className="gra-modal-actions">
            <button
              className="gra-btn gra-btn-clear"
              onClick={modalToggle}
              onKeyDown={e => onSpecificKeyPress(e, 'Enter', modalToggle)}
              data-dismiss="modal"
            >
              {locale === 'tr' ? 'Kapat' : 'Close'}
            </button>
            <button className="gra-btn">
              {locale === 'tr' ? 'Onayla' : 'Accept'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GraModal
