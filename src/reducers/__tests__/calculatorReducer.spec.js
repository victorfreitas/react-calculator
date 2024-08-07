import { test, expect } from '@jest/globals'

import reducer from '../calculatorReducer'
import initialState from '../../utils/calculatorInitialState'
import CalculatorType from '../../constants/calculatorType'
import Operator from '../../constants/operator'

const { CLEAR, PERCENTAGE, DIGIT, OPERATOR, DOT, EQUALS, NEGATE } =
  CalculatorType
const { ADD, SUBTRACT, DIVIDE, MULTIPLY, PERCENT } = Operator
const actions = [
  { type: DIGIT, value: 1, label: 1, display: '1' },

  { type: CLEAR, value: 'clear', label: 'AC', display: '0' },
  { type: PERCENTAGE, value: PERCENT, label: '%', display: '0' },
  { type: OPERATOR, value: ADD, label: '+', display: '0' },

  { type: DOT, value: 'decimal', label: '.', display: '0.' },
  { type: DIGIT, value: 2, label: '2', display: '0.2' },
  { type: EQUALS, value: 'result', label: '=', display: '0.2' },

  { type: CLEAR, value: 'clear', label: 'AC', display: '0' },

  { type: DIGIT, value: 1, label: '1', display: '1' },
  { type: DIGIT, value: 0, label: '0', display: '10' },
  { type: DIGIT, value: 0, label: '0', display: '100' },
  { type: DIGIT, value: 0, label: '0', display: '1000' },
  { type: OPERATOR, value: ADD, label: '+', display: '1000' },
  { type: DIGIT, value: 1, label: '1', display: '1' },
  { type: DIGIT, value: 0, label: '0', display: '10' },
  { type: PERCENTAGE, value: PERCENT, label: '%', display: '100' },
  { type: EQUALS, value: 'result', label: '=', display: '1100' },

  { type: CLEAR, value: 'clear', label: 'AC', display: '0' },

  { type: DIGIT, value: 1, label: '1', display: '1' },
  { type: DIGIT, value: 0, label: '0', display: '10' },
  { type: DIGIT, value: 0, label: '0', display: '100' },
  { type: DIGIT, value: 0, label: '0', display: '1000' },
  { type: OPERATOR, value: SUBTRACT, label: '-', display: '1000' },
  { type: DIGIT, value: 1, label: '1', display: '1' },
  { type: DIGIT, value: 0, label: '0', display: '10' },
  { type: PERCENTAGE, value: PERCENT, label: '%', display: '100' },
  { type: EQUALS, value: 'result', label: '=', display: '900' },

  { type: CLEAR, value: 'clear', label: 'AC', display: '0' },

  { type: DIGIT, value: 1, label: '1', display: '1' },
  { type: DIGIT, value: 0, label: '0', display: '10' },
  { type: DIGIT, value: 0, label: '0', display: '100' },
  { type: OPERATOR, value: MULTIPLY, label: '*', display: '100' },
  { type: DIGIT, value: 1, label: '1', display: '1' },
  { type: DIGIT, value: 0, label: '0', display: '10' },
  { type: PERCENTAGE, value: PERCENT, label: '%', display: '0.1' },
  { type: EQUALS, value: 'result', label: '=', display: '10' },

  { type: CLEAR, value: 'clear', label: 'AC', display: '0' },

  { type: DIGIT, value: 1, label: '1', display: '1' },
  { type: DIGIT, value: 0, label: '0', display: '10' },
  { type: DIGIT, value: 0, label: '0', display: '100' },
  { type: OPERATOR, value: DIVIDE, label: '/', display: '100' },
  { type: DIGIT, value: 1, label: '1', display: '1' },
  { type: DIGIT, value: 0, label: '0', display: '10' },
  { type: PERCENTAGE, value: PERCENT, label: '%', display: '0.1' },
  { type: EQUALS, value: 'result', label: '=', display: '1000' },

  { type: NEGATE, value: 'negate', label: '+/-', display: '-1000' }
]

test('Should test the calculator reducer state', () => {
  let state = { ...initialState }

  for (const { display, ...action } of actions) {
    state = reducer(state, action)

    expect(state).toHaveProperty('displayValue', display)
  }

  expect(() => reducer(state, { type: 'wrong', value: '' })).toThrowError(
    new Error('Unknown action: wrong')
  )
})
