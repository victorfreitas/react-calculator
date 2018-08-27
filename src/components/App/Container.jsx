import React from 'react'

import Display from '../Display'
import Buttons from '../Buttons'

import { formatNumber } from '../../helpers'

const Container = ({ value, click }) => (
  <div className="calculator">
    <Display value={formatNumber(value)} />
    <Buttons click={click} />
  </div>
)

export default Container
