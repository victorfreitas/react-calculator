import CalculatorType from '../constants/calculatorType'
import Calculator from '../containers/calculator'

const { CLEAR, NEGATE, PERCENTAGE, OPERATOR, DIGIT, DOT, EQUALS } =
  CalculatorType

function calculatorReducer(state, action) {
  switch (action.type) {
    case CLEAR:
      return Calculator.init(state).reset()

    case NEGATE:
      return Calculator.init(state).negate()

    case PERCENTAGE:
      return Calculator.init(state).percentage()

    case DOT:
      return Calculator.init(state).dot()

    case DIGIT:
      return Calculator.init(state).digit(action)

    case OPERATOR:
      return Calculator.init(state).operator(action)

    case EQUALS:
      return Calculator.init(state).equals()

    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export default calculatorReducer
