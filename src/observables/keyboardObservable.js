import { filter, fromEvent, map } from 'rxjs'

import CalculatorType from '../constants/calculatorType'
import Operator from '../constants/operator'

const { CLEAR, NEGATE, DECIMAL, EQUALS } = CalculatorType
const { ADD, SUBTRACT, MULTIPLY, DIVIDE, PERCENT } = Operator

const keyMap = new Map([
  ['escape', CLEAR],
  ['backspace', CLEAR],
  ['clear', CLEAR],
  ['alt-', NEGATE],
  ['enter', EQUALS],
  ['=', EQUALS],
  ['+', ADD],
  ['-', SUBTRACT],
  ['*', MULTIPLY],
  ['/', DIVIDE],
  ['%', PERCENT],
  ['.', DECIMAL],
  ['0', '0'],
  ['1', '1'],
  ['2', '2'],
  ['3', '3'],
  ['4', '4'],
  ['5', '5'],
  ['6', '6'],
  ['7', '7'],
  ['8', '8'],
  ['9', '9']
])

export const keyboard$ = fromEvent(document, 'keydown')
  .pipe(map(({ altKey, key }) => (altKey ? `alt${key}` : key.toLowerCase())))
  .pipe(filter(key => keyMap.has(key)))
  .pipe(map(key => keyMap.get(key)))
