import React, { memo } from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Title = ({ text }) => (
  <h1 className="title">
    {text}
  </h1>
)

Title.defaultProps = {
  text: 'Calculator',
}

Title.propTypes = {
  text: PropTypes.string,
}

export default memo(Title)
