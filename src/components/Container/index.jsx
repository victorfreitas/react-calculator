import React, { Fragment, memo } from 'react'
import PropTypes from 'prop-types'

import { formatNumber } from '../../helpers'
import Display from '../Display'
import Buttons from '../Buttons'

const Container = ({ hat, value }) => (
  <Fragment>
    <Display
      value={formatNumber(value)}
      hat={hat}
    />
    <Buttons />
  </Fragment>
)

Container.defaultProps = {
  hat: '',
}

Container.propTypes = {
  hat: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
}

export default memo(Container)
