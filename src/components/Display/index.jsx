import React, { Fragment, memo } from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Display = ({ hat, value }) => (
  <Fragment>
    <span className="display-calc">
      {hat}
    </span>
    <div className="display">
      {value}
    </div>
  </Fragment>
)

Display.propTypes = {
  hat: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default memo(Display)
