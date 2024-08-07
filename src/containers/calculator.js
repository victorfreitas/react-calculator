import { calculation } from '../utils/parser'
import initialState from '../utils/calculatorInitialState'
import Operator from '../constants/operator'

const percentDecimalOperator = new Set(['multiply', 'divide'])

class Calculator {
  /**
   * @type {Map<string, string | Array<string | number> | number | null>}
   */
  #state

  constructor(state) {
    this.#initializeState(state)
  }

  static init(state) {
    return new Calculator(state)
  }

  #initializeState(state) {
    this.#state = new Map(Object.entries(state))
  }

  #clear() {
    this.#state.clear()
  }

  #getCalculationTextPercent() {
    if (!this.has('lastOperand')) {
      return `${this.get('currentOperand')}% =`
    }

    const lastOperand = this.get('lastOperand')
    const operatorLabel = this.get('operatorLabel')
    const currentOperand = this.get('currentOperand')

    return `${lastOperand} ${operatorLabel} ${currentOperand}% =`
  }

  #getPercentageValue() {
    const operator = this.get('operator')

    if (percentDecimalOperator.has(operator) || !this.has('lastOperand')) {
      return calculation.percentToDecimal(this.get('currentOperand'))
    }

    return calculation.percent(
      this.get('lastOperand'),
      this.get('currentOperand')
    )
  }

  get(key) {
    return this.#state.get(key)
  }

  set(key, value) {
    this.#state.set(key, value)

    return this
  }

  has(key) {
    return this.#state.has(key) && this.#state.get(key) !== null
  }

  hasValues() {
    return this.get('values').length > 0
  }

  getResult() {
    return Object.fromEntries(this.#state)
  }

  reset() {
    this.#clear()
    this.#initializeState(initialState)

    return this.getResult()
  }

  negate() {
    if (this.get('displayValue') === '0') {
      return this.getResult()
    }

    const value = Number(this.get('displayValue')) * -1

    this.set('values', [value])
      .set('currentOperand', value)
      .set('displayValue', String(value))

    return this.getResult()
  }

  percentage() {
    if (!this.has('currentOperand')) {
      return this.getResult()
    }

    const value = this.#getPercentageValue()
    const calculationText = this.#getCalculationTextPercent()

    this.set('values', [])
      .set('currentOperand', value)
      .set('displayValue', String(value))
      .set('calculation', calculationText)

    return this.getResult()
  }

  operator({ value, label }) {
    if (!calculation[value]) {
      const oneOf = Object.values(Operator).join(', ')

      throw new Error(`Unknown operator, operator must be one of: (${oneOf})`)
    }

    const hasCurrentOperand = this.has('currentOperand')
    const waitingNewOperand = this.get('waitingNewOperand')
    const operator = this.get('operator')

    if (!hasCurrentOperand || (waitingNewOperand && operator)) {
      if (this.get('displayValue') !== '0') {
        this.set('operator', value)
          .set('operatorLabel', label)
          .set('waitingNewOperand', true)
      }

      return this.getResult()
    }

    if (operator) {
      this.equals()
      this.set('operator', value)
        .set('operatorLabel', label)
        .set('waitingNewOperand', true)

      return this.getResult()
    }

    const displayValue = this.get('values').join('')

    this.set('values', [])
      .set('lastOperand', Number(displayValue))
      .set('operator', value)
      .set('operatorLabel', label)
      .set('displayValue', displayValue)

    return this.getResult()
  }

  digit({ value }) {
    if (value === 0 && this.get('displayValue') === '0') {
      return this.getResult()
    }

    const values = [...this.get('values'), value]
    const displayValue = values.join('')

    this.set('values', values)
      .set('displayValue', displayValue)
      .set('waitingNewOperand', false)
      .set('currentOperand', Number(displayValue))

    return this.getResult()
  }

  dot() {
    if (!this.get('displayValue').includes('.')) {
      const displayValue = this.get('displayValue')
      const hasOperand = displayValue !== '0' && this.hasValues()
      const value = hasOperand ? `${displayValue}.` : '0.'
      const currentOperand = Number(value)

      this.set('currentOperand', currentOperand)
        .set('waitingNewOperand', false)
        .set('displayValue', value)
        .set('values', [currentOperand, '.'])

      return this.getResult()
    }

    if (this.hasValues()) {
      return this.getResult()
    }

    this.set('values', [0, '.'])
      .set('displayValue', '0.')
      .set('waitingNewOperand', false)
      .set('currentOperand', 0)

    return this.getResult()
  }

  equals() {
    const operator = this.get('operator')
    const lastOperand = this.get('lastOperand')
    const currentOperand = this.get('currentOperand')

    if (!calculation[operator] || !(lastOperand && currentOperand)) {
      return this.getResult()
    }

    const operatorLabel = this.get('operatorLabel')
    const value = calculation[operator](lastOperand, currentOperand)

    this.set('displayValue', String(value))
      .set('lastOperand', value)
      .set('waitingNewOperand', true)
      .set('values', [])
      .set('calculation', `${lastOperand} ${operatorLabel} ${currentOperand} =`)

    return this.getResult()
  }
}

export default Calculator
