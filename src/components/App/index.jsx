import React, { Component } from 'react'

import './style.css'

import initialState from './initialState'
import { operations } from '../../helpers'
import Title from '../Title'
import Container from '../Container'

class App extends Component {
  state = { ...initialState }

  componentDidMount() {
    document.addEventListener('btnclick', this.handleClick)
  }

  clearMemory() {
    this.setState({ ...initialState })
  }

  calc = (a, b) => {
    const { operator } = this.state

    return operations[operator](a, b)
  }

  setOperation(op) {
    let {
      current,
      operator,
      isDisplayResult,
      displayValue,
    } = this.state

    if (operator && op !== operator) {
      this.setState({ operator: op })
      this.showResult(op)
      return
    }

    if (isDisplayResult) {
      const value = parseFloat(displayValue)
      current = 0

      this.setState({ values: [value] })
    }

    current++

    this.setState({
      current,
      operator: op,
      clearDisplay: true,
      isDisplayResult: false,
    })
  }

  addDigit(n) {
    const {
      current,
      displayValue,
      clearDisplay,
      values,
    } = this.state

    if (n === '.' && displayValue.includes('.')) {
      return
    }

    const clear = displayValue === '0' || clearDisplay
    const value = `${clear ? '' : displayValue}${n}`

    if (n !== '.') {
      const cloneValues = [...values]
      cloneValues[current] = parseFloat(value)

      this.setState({ values: cloneValues.filter(v => !isNaN(v)) })
    }

    this.setState({
      displayValue: value,
      clearDisplay: false,
    })
  }

  showResult(op) {
    const { operator, values } = this.state

    if (!operator || values.length < 2) {
      return
    }

    const result = [...values].reduce(this.calc)

    this.setState({
      current: 1,
      displayValue: result,
      values: [result],
      clearDisplay: true,
      isDisplayResult: true,
      hat: `${values.join(` ${op || operator} `)} =`,
    })
  }

  calcPercentage() {
    const { operator, values: [amount, perc] } = this.state

    if (!operator) {
      return
    }

    this.setState({
      hat: `${amount} ${operator} ${perc}% =`,
      displayValue: this.calc(amount, (amount / 100) * perc),
    })
  }

  handleClick = ({ detail: { type, name } }) => {
    switch (type) {
      case 'clear':
        this.clearMemory()
        break

      case 'operation':
        this.setOperation(name)
        break

      case 'result':
        this.showResult()
        break

      case 'perc':
        this.calcPercentage()
        break

      default:
        this.addDigit(name)
    }
  }

  render() {
    const { displayValue, hat } = this.state

    return (
      <div className="calculator">
        <Title />
        <Container
          hat={hat}
          value={displayValue}
        />
      </div>
    )
  }
}

export default App
