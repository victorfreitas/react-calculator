import PropTypes from 'prop-types'

import styles from './style.module.css'
import { CLICK_CALCULATOR } from '../../constants/event'

function Button({ className, value, label, name, testId = 'button' }) {
  const customEvent = new CustomEvent(CLICK_CALCULATOR, {
    detail: { value, label, type: name }
  })

  return (
    <button
      type="button"
      className={`${styles.btn} ${styles[className] || ''}`}
      data-testid={testId}
      onClick={event => {
        event.preventDefault()
        document.dispatchEvent(customEvent)
      }}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  testId: PropTypes.string
}

export default Button
