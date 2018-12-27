import React, { Fragment, memo } from 'react'
import PropTypes from 'prop-types'

import { formatNumber } from '../../helpers'
import Display from '../Display'
import Buttons from '../Buttons'

const Container = ({ value }) => (
  <Fragment>
    <Display value={formatNumber(value)} />
    <Buttons />
  </Fragment>
)

Container.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
}

export default memo(Container)
