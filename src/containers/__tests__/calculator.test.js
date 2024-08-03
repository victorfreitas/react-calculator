import { describe, it, expect } from '@jest/globals'

import Calculator from '../calculator'
import calculatorInitialState from '../../utils/calculatorInitialState'
import Operator from '../../constants/operator'

const Op = {
  add: { value: Operator.ADD, label: '+' },
  subtract: { value: Operator.SUBTRACT, label: '-' },
  divide: { value: Operator.DIVIDE, label: '/' },
  multiply: { value: Operator.MULTIPLY, label: '*' }
}

describe('should test the calculator class', () => {
  describe('should test wrong calculator input', () => {
    it('#operator', () => {
      const calculator = Calculator.init(calculatorInitialState)

      expect(() =>
        calculator.operator({ value: 'wrong', label: 'w' })
      ).toThrowError()
    })
  })

  describe('should test calculus of percentage', () => {
    it('#add', () => {
      const calculator = Calculator.init(calculatorInitialState)

      calculator.digit({ value: 1 })
      calculator.digit({ value: 0 })
      calculator.digit({ value: 0 })
      calculator.operator(Op.add)
      calculator.digit({ value: 1 })
      calculator.digit({ value: 0 })
      calculator.percentage()

      expect(calculator.getResult()).toStrictEqual({
        displayValue: '10',
        calculation: '100 + 10% =',
        operator: 'add',
        operatorLabel: '+',
        lastOperand: 100,
        currentOperand: 10,
        values: [],
        waitingNewOperand: false
      })
      calculator.equals()
      expect(calculator.getResult()).toStrictEqual({
        displayValue: '110',
        calculation: '100 + 10 =',
        operator: 'add',
        operatorLabel: '+',
        lastOperand: 110,
        currentOperand: 10,
        values: [],
        waitingNewOperand: true
      })
    })

    it('#subtract', () => {
      const calculator = Calculator.init(calculatorInitialState)

      calculator.digit({ value: 1 })
      calculator.digit({ value: 0 })
      calculator.digit({ value: 0 })
      calculator.operator(Op.subtract)
      calculator.digit({ value: 1 })
      calculator.digit({ value: 0 })
      calculator.percentage()

      expect(calculator.getResult()).toStrictEqual({
        displayValue: '10',
        calculation: '100 - 10% =',
        operator: 'subtract',
        operatorLabel: '-',
        lastOperand: 100,
        currentOperand: 10,
        values: [],
        waitingNewOperand: false
      })
      calculator.equals()
      expect(calculator.getResult()).toStrictEqual({
        displayValue: '90',
        calculation: '100 - 10 =',
        operator: 'subtract',
        operatorLabel: '-',
        lastOperand: 90,
        currentOperand: 10,
        values: [],
        waitingNewOperand: true
      })
    })

    it('#multiply', () => {
      const calculator = Calculator.init(calculatorInitialState)

      calculator.digit({ value: 1 })
      calculator.digit({ value: 0 })
      calculator.digit({ value: 0 })
      calculator.operator(Op.multiply)
      calculator.digit({ value: 1 })
      calculator.digit({ value: 0 })
      calculator.percentage()

      expect(calculator.getResult()).toStrictEqual({
        displayValue: '0.1',
        calculation: '100 * 10% =',
        operator: 'multiply',
        operatorLabel: '*',
        lastOperand: 100,
        currentOperand: 0.1,
        values: [],
        waitingNewOperand: false
      })
      calculator.equals()
      expect(calculator.getResult()).toStrictEqual({
        displayValue: '10',
        calculation: '100 * 0.1 =',
        operator: 'multiply',
        operatorLabel: '*',
        lastOperand: 10,
        currentOperand: 0.1,
        values: [],
        waitingNewOperand: true
      })
    })

    it('#divide', () => {
      const calculator = Calculator.init(calculatorInitialState)

      calculator.digit({ value: 1 })
      calculator.digit({ value: 0 })
      calculator.digit({ value: 0 })
      calculator.operator(Op.divide)
      calculator.digit({ value: 1 })
      calculator.digit({ value: 0 })
      calculator.percentage()

      expect(calculator.getResult()).toStrictEqual({
        displayValue: '0.1',
        calculation: '100 / 10% =',
        operator: 'divide',
        operatorLabel: '/',
        lastOperand: 100,
        currentOperand: 0.1,
        values: [],
        waitingNewOperand: false
      })
    })
  })

  describe('should test simple calculus', () => {
    it('#add', () => {
      const calculator = Calculator.init(calculatorInitialState)

      calculator.digit({ value: 1 })
      calculator.digit({ value: 0 })
      calculator.digit({ value: 0 })
      calculator.operator(Op.add)
      calculator.digit({ value: 1 })
      calculator.digit({ value: 0 })
      calculator.equals()

      expect(calculator.getResult()).toStrictEqual({
        displayValue: '110',
        calculation: '100 + 10 =',
        operator: 'add',
        operatorLabel: '+',
        lastOperand: 110,
        currentOperand: 10,
        values: [],
        waitingNewOperand: true
      })
      calculator.equals()
      expect(calculator.getResult()).toStrictEqual({
        displayValue: '120',
        calculation: '110 + 10 =',
        operator: 'add',
        operatorLabel: '+',
        lastOperand: 120,
        currentOperand: 10,
        values: [],
        waitingNewOperand: true
      })
    })

    it('#subtract', () => {
      const calculator = Calculator.init(calculatorInitialState)

      calculator.digit({ value: 1 })
      calculator.digit({ value: 0 })
      calculator.digit({ value: 0 })
      calculator.operator(Op.subtract)
      calculator.digit({ value: 1 })
      calculator.digit({ value: 0 })
      calculator.equals()

      expect(calculator.getResult()).toStrictEqual({
        displayValue: '90',
        calculation: '100 - 10 =',
        operator: 'subtract',
        operatorLabel: '-',
        lastOperand: 90,
        currentOperand: 10,
        values: [],
        waitingNewOperand: true
      })
      calculator.equals()
      expect(calculator.getResult()).toStrictEqual({
        displayValue: '80',
        calculation: '90 - 10 =',
        operator: 'subtract',
        operatorLabel: '-',
        lastOperand: 80,
        currentOperand: 10,
        values: [],
        waitingNewOperand: true
      })
    })

    it('#multiply', () => {
      const calculator = Calculator.init(calculatorInitialState)

      calculator.digit({ value: 1 })
      calculator.digit({ value: 0 })
      calculator.digit({ value: 0 })
      calculator.operator(Op.multiply)
      calculator.digit({ value: 1 })
      calculator.digit({ value: 0 })
      calculator.equals()

      expect(calculator.getResult()).toStrictEqual({
        displayValue: '1000',
        calculation: '100 * 10 =',
        operator: 'multiply',
        operatorLabel: '*',
        lastOperand: 1000,
        currentOperand: 10,
        values: [],
        waitingNewOperand: true
      })
      calculator.equals()
      expect(calculator.getResult()).toStrictEqual({
        displayValue: '10000',
        calculation: '1000 * 10 =',
        operator: 'multiply',
        operatorLabel: '*',
        lastOperand: 10000,
        currentOperand: 10,
        values: [],
        waitingNewOperand: true
      })
    })

    it('#divide', () => {
      const calculator = Calculator.init(calculatorInitialState)

      calculator.digit({ value: 1 })
      calculator.digit({ value: 0 })
      calculator.digit({ value: 0 })
      calculator.operator(Op.divide)
      calculator.digit({ value: 1 })
      calculator.digit({ value: 0 })
      calculator.equals()

      expect(calculator.getResult()).toStrictEqual({
        displayValue: '10',
        calculation: '100 / 10 =',
        operator: 'divide',
        operatorLabel: '/',
        lastOperand: 10,
        currentOperand: 10,
        values: [],
        waitingNewOperand: true
      })
      calculator.equals()
      expect(calculator.getResult()).toStrictEqual({
        displayValue: '1',
        calculation: '10 / 10 =',
        operator: 'divide',
        operatorLabel: '/',
        lastOperand: 1,
        currentOperand: 10,
        values: [],
        waitingNewOperand: true
      })
    })
  })

  describe('should test calculus using decimal', () => {
    it('#add', () => {
      const calculator = Calculator.init(calculatorInitialState)

      calculator.dot()
      calculator.digit({ value: 2 })
      calculator.digit({ value: 5 })
      calculator.operator(Op.add)
      calculator.digit({ value: 1 })
      calculator.dot()
      calculator.digit({ value: 2 })
      calculator.digit({ value: 5 })
      calculator.equals()

      expect(calculator.getResult()).toStrictEqual({
        displayValue: '1.5',
        calculation: '0.25 + 1.25 =',
        operator: 'add',
        operatorLabel: '+',
        lastOperand: 1.5,
        currentOperand: 1.25,
        values: [],
        waitingNewOperand: true
      })
    })

    it('#subtract', () => {
      const calculator = Calculator.init(calculatorInitialState)

      calculator.digit({ value: 2 })
      calculator.digit({ value: 5 })
      calculator.operator(Op.subtract)
      calculator.dot()
      calculator.digit({ value: 2 })
      calculator.digit({ value: 5 })
      calculator.equals()

      expect(calculator.getResult()).toStrictEqual({
        displayValue: '24.75',
        calculation: '25 - 0.25 =',
        operator: 'subtract',
        operatorLabel: '-',
        lastOperand: 24.75,
        currentOperand: 0.25,
        values: [],
        waitingNewOperand: true
      })
    })
  })

  describe('should test calculator reset', () => {
    it('#reset', () => {
      const calculator = Calculator.init(calculatorInitialState)

      calculator.digit({ value: 1 })
      calculator.operator(Op.add)
      calculator.digit({ value: 1 })
      calculator.equals()

      expect(calculator.getResult()).not.toStrictEqual(calculatorInitialState)
      calculator.reset()
      expect(calculator.getResult()).toStrictEqual(calculatorInitialState)
    })
  })

  describe('should test calculator negate value', () => {
    it('#addNegate', () => {
      const calculator = Calculator.init(calculatorInitialState)

      calculator.digit({ value: 2 })
      calculator.negate()
      calculator.operator(Op.add)
      calculator.digit({ value: 1 })
      calculator.equals()

      expect(calculator.getResult()).toStrictEqual({
        displayValue: '-1',
        calculation: '-2 + 1 =',
        operator: 'add',
        operatorLabel: '+',
        lastOperand: -1,
        currentOperand: 1,
        values: [],
        waitingNewOperand: true
      })
    })

    it('#removeNegate', () => {
      const calculator = Calculator.init(calculatorInitialState)

      calculator.digit({ value: 2 })
      calculator.negate()
      calculator.negate()
      calculator.operator(Op.add)
      calculator.digit({ value: 1 })
      calculator.equals()

      expect(calculator.getResult()).toStrictEqual({
        displayValue: '3',
        calculation: '2 + 1 =',
        operator: 'add',
        operatorLabel: '+',
        lastOperand: 3,
        currentOperand: 1,
        values: [],
        waitingNewOperand: true
      })
    })
  })

  describe('should test calculator statements methods', () => {
    it('#negate', () => {
      const calculator = Calculator.init(calculatorInitialState)

      calculator.negate()

      expect(calculator.getResult()).toStrictEqual(calculatorInitialState)
    })

    it('#percentage', () => {
      const calculator = Calculator.init(calculatorInitialState)

      calculator.percentage()
      expect(calculator.getResult()).toStrictEqual(calculatorInitialState)

      calculator.digit({ value: 10 })
      calculator.percentage()
      expect(calculator.getResult()).toStrictEqual({
        ...calculatorInitialState,
        displayValue: '0.1',
        calculation: '10% =',
        currentOperand: 0.1
      })
    })

    it('#operator', () => {
      const calculator = Calculator.init(calculatorInitialState)

      calculator.operator(Op.add)
      expect(calculator.getResult()).toStrictEqual(calculatorInitialState)

      calculator.digit({ value: 1 })
      calculator.operator(Op.add)
      calculator.digit({ value: 1 })
      calculator.operator(Op.add)

      expect(calculator.getResult()).toStrictEqual({
        ...calculatorInitialState,
        displayValue: '2',
        calculation: '1 + 1 =',
        lastOperand: 2,
        currentOperand: 1,
        operator: 'add',
        operatorLabel: '+',
        waitingNewOperand: true
      })

      calculator.operator(Op.add)
      expect(calculator.getResult()).toStrictEqual({
        ...calculatorInitialState,
        displayValue: '2',
        calculation: '1 + 1 =',
        lastOperand: 2,
        currentOperand: 1,
        operator: 'add',
        operatorLabel: '+',
        waitingNewOperand: true
      })
    })

    it('#digit', () => {
      const calculator = Calculator.init(calculatorInitialState)

      calculator.digit({ value: 0 })
      calculator.digit({ value: 0 })
      calculator.digit({ value: 0 })
      expect(calculator.getResult()).toStrictEqual({
        ...calculatorInitialState,
        displayValue: '0'
      })
    })

    it('#dot', () => {
      const calculator = Calculator.init(calculatorInitialState)

      calculator.dot()
      calculator.digit({ value: 1 })

      expect(calculator.getResult()).toStrictEqual({
        ...calculatorInitialState,
        displayValue: '0.1',
        currentOperand: 0.1,
        values: [0, '.', 1]
      })

      calculator.dot()
      expect(calculator.getResult()).toStrictEqual({
        ...calculatorInitialState,
        displayValue: '0.1',
        currentOperand: 0.1,
        values: [0, '.', 1]
      })

      calculator.operator(Op.subtract)
      calculator.digit({ value: 1 })
      calculator.equals()
      expect(calculator.getResult()).toStrictEqual({
        ...calculatorInitialState,
        displayValue: '-0.9',
        calculation: '0.1 - 1 =',
        currentOperand: 1,
        lastOperand: -0.9,
        operator: 'subtract',
        operatorLabel: '-',
        waitingNewOperand: true,
        values: []
      })

      calculator.dot()
      expect(calculator.getResult()).toStrictEqual({
        ...calculatorInitialState,
        displayValue: '0.',
        calculation: '0.1 - 1 =',
        currentOperand: 0,
        lastOperand: -0.9,
        operator: 'subtract',
        operatorLabel: '-',
        waitingNewOperand: false,
        values: [0, '.']
      })
    })

    it('#equals', () => {
      const calculator = Calculator.init(calculatorInitialState)

      calculator.equals()
      expect(calculator.getResult()).toStrictEqual(calculatorInitialState)
    })
  })
})
