import { test, expect } from '@jest/globals'

import CalculatorType from '../calculatorType'

test('should valid calculator type enum', () => {
  expect(CalculatorType).toStrictEqual({
    CLEAR: 'clear',
    NEGATE: 'negate',
    PERCENTAGE: 'percentage',
    DIGIT: 'digit',
    OPERATOR: 'operator',
    DOT: 'dot',
    EQUALS: 'equals'
  })
})
