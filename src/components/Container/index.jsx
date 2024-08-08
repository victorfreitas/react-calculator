import { memo } from 'react'

import Display from '../Display'
import Buttons from '../Buttons'

function Container() {
  return (
    <>
      <Display />
      <Buttons />
    </>
  )
}

export default memo(Container)
