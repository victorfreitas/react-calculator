import React, { memo } from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Display = ({ value }) => (
  <div className="display">
    {value}
  </div>
)

Display.propTypes = {
  value: PropTypes.string.isRequired,
}

export default memo(Display)
