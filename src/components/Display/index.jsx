import { memo } from 'react'

import styles from './style.module.css'
import useObservableCalculatorState from '../../hooks/useObservableCalculatorState'

function Display() {
  const state = useObservableCalculatorState()

  return (
    <>
      <span className={styles.displayCalc} data-testid="display-calculation">
        {state.calculation}
      </span>
      <div className={styles.display} data-testid="display-value">
        {state.displayValue}
      </div>
    </>
  )
}

export default memo(Display)
