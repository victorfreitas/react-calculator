import CalculatorType from '../constants/calculatorType'
import Operator from '../constants/operator'

const { CLEAR, NEGATE, PERCENTAGE, OPERATOR, DIGIT, DECIMAL, EQUALS } =
  CalculatorType
const { ADD, SUBTRACT, DIVIDE, MULTIPLY, PERCENT } = Operator

const labels = [
  { label: 'AC', className: 'operator-control', name: CLEAR, value: CLEAR },
  { label: '±', className: 'operator-control', name: NEGATE, value: NEGATE },
  {
    label: '%',
    className: 'operator-control',
    name: PERCENTAGE,
    value: PERCENT
  },
  { label: '÷', className: 'operator', name: OPERATOR, value: DIVIDE },
  { label: '7', className: 'digit', name: DIGIT, value: 7 },
  { label: '8', className: 'digit', name: DIGIT, value: 8 },
  { label: '9', className: 'digit', name: DIGIT, value: 9 },
  { label: '×', className: 'operator', name: OPERATOR, value: MULTIPLY },
  { label: '4', className: 'digit', name: DIGIT, value: 4 },
  { label: '5', className: 'digit', name: DIGIT, value: 5 },
  { label: '6', className: 'digit', name: DIGIT, value: 6 },
  { label: '−', className: 'operator', name: OPERATOR, value: SUBTRACT },
  { label: '1', className: 'digit', name: DIGIT, value: 1 },
  { label: '2', className: 'digit', name: DIGIT, value: 2 },
  { label: '3', className: 'digit', name: DIGIT, value: 3 },
  { label: '+', className: 'operator', name: OPERATOR, value: ADD },
  { label: '0', className: 'double', name: DIGIT, value: 0 },
  { label: '.', className: 'digit', name: DECIMAL, value: DECIMAL },
  { label: '=', className: 'operator', name: EQUALS, value: EQUALS }
]

export default labels
