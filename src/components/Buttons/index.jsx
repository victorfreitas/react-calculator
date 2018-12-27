import React, { memo } from 'react'

import labels from '../../helpers/labels'
import Button from '../Button'

const Buttons = () => (
  labels.map(label => (
    <Button
      key={label.name}
      label={label}
    />
  ))
)

export default memo(Buttons)
