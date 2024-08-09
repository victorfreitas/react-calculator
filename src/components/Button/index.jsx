import PropTypes from 'prop-types'
import { memo } from 'react'

import styles from './style.module.css'
import { calculatorSubject } from '../../observables/calculatorObservable'

function Button({ className, value, label, name, testId = 'button' }) {
  const handlerClick = event => {
    event.preventDefault()
    calculatorSubject.next({ value, label, type: name })
  }

  return (
    <button
      id={`btn-${value}`}
      type="button"
      className={`${styles.btn} ${styles[className]}`}
      data-testid={testId}
      data-class={styles.btnActive}
      onClick={handlerClick}
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

export default memo(Button)
