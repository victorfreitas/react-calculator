import React, { memo } from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Button = ({ label }) => (
  <button
    className={`btn ${label.class}`}
    onClick={(event) => {
      event.preventDefault()
      document.dispatchEvent(
        new CustomEvent('btnclick', { detail: label })
      )
    }}
  >
    {label.name}
  </button>
)

Button.propTypes = {
  label: PropTypes.shape({
    class: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
}

export default memo(Button)
