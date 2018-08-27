import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Button = ({ click, label }) => (
  <button
    className={`btn ${label.class}`}
    onClick={() => click && click(label)}
  >
    {label.name}
  </button>
)

Button.propTypes = {
  click: PropTypes.func.isRequired,
  label: PropTypes.shape({
    class: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default Button
