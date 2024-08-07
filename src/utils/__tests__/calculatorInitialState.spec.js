import { test, expect } from '@jest/globals'

import calculatorInitialState from '../calculatorInitialState'

test('should test the initial state', () => {
  expect(calculatorInitialState).toStrictEqual({
    displayValue: '0',
    calculation: '',
    operator: null,
    operatorLabel: null,
    lastOperand: null,
    currentOperand: null,
    waitingNewOperand: false,
    values: []
  })
})
