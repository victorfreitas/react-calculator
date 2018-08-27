import React from 'react'

import Button from '../Button'

import { btnLabels as labels } from '../../helpers'

const Buttons = ({ click }) =>
  labels.map(label => <Button key={label.name} label={label} click={click} />)

export default Buttons
