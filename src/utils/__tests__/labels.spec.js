import { test, expect } from '@jest/globals'

import labels from '../labels'

test('should test the labels', () => {
  expect(labels).toStrictEqual([
    {
      label: 'AC',
      className: 'operator-control',
      name: 'clear',
      value: 'clear'
    },
    {
      label: '±',
      className: 'operator-control',
      name: 'negate',
      value: 'negate'
    },
    {
      label: '%',
      className: 'operator-control',
      name: 'percentage',
      value: 'percent'
    },
    { label: '÷', className: 'operator', name: 'operator', value: 'divide' },
    { label: '7', className: 'digit', name: 'digit', value: 7 },
    { label: '8', className: 'digit', name: 'digit', value: 8 },
    { label: '9', className: 'digit', name: 'digit', value: 9 },
    { label: '×', className: 'operator', name: 'operator', value: 'multiply' },
    { label: '4', className: 'digit', name: 'digit', value: 4 },
    { label: '5', className: 'digit', name: 'digit', value: 5 },
    { label: '6', className: 'digit', name: 'digit', value: 6 },
    { label: '−', className: 'operator', name: 'operator', value: 'subtract' },
    { label: '1', className: 'digit', name: 'digit', value: 1 },
    { label: '2', className: 'digit', name: 'digit', value: 2 },
    { label: '3', className: 'digit', name: 'digit', value: 3 },
    { label: '+', className: 'operator', name: 'operator', value: 'add' },
    { label: '0', className: 'double', name: 'digit', value: 0 },
    { label: '.', className: 'digit', name: 'decimal', value: 'decimal' },
    { label: '=', className: 'operator', name: 'equals', value: 'equals' }
  ])
})
