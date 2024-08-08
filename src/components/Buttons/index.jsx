import { memo } from 'react'

import labels from '../../utils/labels'
import Button from '../Button'

function Buttons() {
  return labels.map(props => <Button key={props.label} {...props} />)
}

export default memo(Buttons)
