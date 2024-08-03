import PropTypes from 'prop-types'

import styles from './style.module.css'

function Display({ calculation, value }) {
  return (
    <>
      <span className={styles.displayCalc} data-testid="display-calculation">
        {calculation}
      </span>
      <div className={styles.display} data-testid="display-value">
        {value}
      </div>
    </>
  )
}

Display.propTypes = {
  calculation: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default Display
