import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

import { btnLabels } from '../../helpers'

const Buttons = ({ click }) => (
  btnLabels.map(label => (
    <Button key={label.name} label={label} click={click} />
  ))
)

Buttons.propTypes = {
  click: PropTypes.func.isRequired,
}

export default Buttons
