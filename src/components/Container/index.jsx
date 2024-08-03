import { useContext } from 'react'

import Display from '../Display'
import Buttons from '../Buttons'
import CalculatorContext from '../../apis/calculatorContext'

function Container() {
  const calculator = useContext(CalculatorContext)

  return (
    <>
      <Display
        value={calculator.displayValue}
        calculation={calculator.calculation}
      />
      <Buttons />
    </>
  )
}

export default Container
