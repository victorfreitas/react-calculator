import { test, expect } from '@jest/globals'

import Operator from '../operator'

test('should valid calculator operator enum', () => {
  expect(Operator).toStrictEqual({
    ADD: 'add',
    SUBTRACT: 'subtract',
    DIVIDE: 'divide',
    MULTIPLY: 'multiply',
    PERCENT: 'percent',
    PERCENT_DECIMAL: 'percentToDecimal'
  })
})
