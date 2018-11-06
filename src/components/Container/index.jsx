import React from 'react'
import PropTypes from 'prop-types'

import Display from '../Display'
import Buttons from '../Buttons'

import { formatNumber } from '../../helpers'

const Container = ({ value, click }) => (
  <div className="calculator">
    <Display value={formatNumber(value)} />
    <Buttons click={click} />
  </div>
)

Container.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  click: PropTypes.func.isRequired,
}

export default Container
