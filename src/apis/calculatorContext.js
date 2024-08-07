import { createContext } from 'react'

import initialState from '../utils/calculatorInitialState'

const CalculatorContext = createContext(initialState)

export default CalculatorContext
