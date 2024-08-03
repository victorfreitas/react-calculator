import CalculatorType from '../constants/calculatorType'
import Operator from '../constants/operator'

const { CLEAR, NEGATE, PERCENTAGE, OPERATOR, DIGIT, DOT, EQUALS } =
  CalculatorType
const { ADD, SUBTRACT, DIVIDE, MULTIPLY, PERCENT } = Operator

const labels = [
  { label: 'AC', className: '', name: CLEAR, value: 'clear' },
  { label: '+/-', className: '', name: NEGATE, value: 'negate' },
  { label: '%', className: '', name: PERCENTAGE, value: PERCENT },
  { label: '/', className: OPERATOR, name: OPERATOR, value: DIVIDE },
  { label: '7', className: '', name: DIGIT, value: 7 },
  { label: '8', className: '', name: DIGIT, value: 8 },
  { label: '9', className: '', name: DIGIT, value: 9 },
  { label: '*', className: OPERATOR, name: OPERATOR, value: MULTIPLY },
  { label: '4', className: '', name: DIGIT, value: 4 },
  { label: '5', className: '', name: DIGIT, value: 5 },
  { label: '6', className: '', name: DIGIT, value: 6 },
  { label: '-', className: OPERATOR, name: OPERATOR, value: SUBTRACT },
  { label: '1', className: '', name: DIGIT, value: 1 },
  { label: '2', className: '', name: DIGIT, value: 2 },
  { label: '3', className: '', name: DIGIT, value: 3 },
  { label: '+', className: OPERATOR, name: OPERATOR, value: ADD },
  { label: '0', className: 'double', name: DIGIT, value: 0 },
  { label: '.', className: '', name: DOT, value: 'decimal' },
  { label: '=', className: OPERATOR, name: EQUALS, value: 'result' }
]

export default labels
