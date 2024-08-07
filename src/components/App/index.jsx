import { memo, useEffect, useReducer } from 'react'

import styles from './style.module.css'
import Title from '../Title'
import Container from '../Container'
import CalculatorContext from '../../apis/calculatorContext'
import calculatorInitialState from '../../utils/calculatorInitialState'
import calculatorReducer from '../../reducers/calculatorReducer'
import { CLICK_CALCULATOR } from '../../constants/event'

function App() {
  const [state, dispatch] = useReducer(
    calculatorReducer,
    calculatorInitialState
  )

  useEffect(() => {
    const handle = event => dispatch(event.detail)

    document.addEventListener(CLICK_CALCULATOR, handle)

    return () => {
      document.removeEventListener(CLICK_CALCULATOR, handle)
    }
  }, [dispatch])

  return (
    <CalculatorContext.Provider value={state}>
      <div className={styles.calculator} data-testid="app">
        <Title />
        <Container />
      </div>
    </CalculatorContext.Provider>
  )
}

export default memo(App)
