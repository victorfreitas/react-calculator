import React, { Component } from 'react'

import './style.css'

import Button from '../Button'
import Display from '../Display'

import { btnLabels, operations, formatNumber } from '../../helpers'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operator: null,
  values: [],
  isDisplayResult: false,
  current: 0
}

class Calculator extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.state = { ...initialState }
  }

  clearMemory() {
    this.setState({ ...initialState })
  }

  setOperation(operator) {
    let current = this.state.current

    if (this.state.isDisplayResult) {
      const value = parseFloat(this.state.displayValue)
      current = 0
      this.setState({ values: [value] })
    }

    current++
    this.setState({
      current,
      operator,
      clearDisplay: true,
      isDisplayResult: false
    })
  }

  addDigit(n) {
    if (n === '.' && this.state.displayValue.includes('.')) {
      return
    }

    const clearDisplay = (this.state.displayValue === '0' || this.state.clearDisplay)
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n

    if (n !== '.') {
      const i = this.state.current
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]

      values[i] = newValue

      this.setState({ values })
    }

    this.setState({ displayValue, clearDisplay: false })
  }

  showResult() {
    const op = this.state.operator

    if (!op || this.state.values.length < 2) {
      return
    }

    const values = [...this.state.values]
    const result = values.reduce((a, b) => operations[op](a, b))

    this.setState({
      displayValue: result,
      values: [],
      clearDisplay: true,
      isDisplayResult: true
    })
  }

  handleClick({ name, type }) {
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

      default:
        this.addDigit(name)
    }
  }

  renderButtons() {
    return (
      btnLabels.map(label => (
        <Button
          key={label.name}
          label={label}
          click={this.handleClick}
        />
      ))
    )
  }

  render() {
    return (
      <div className='calculator'>
       <Display value={formatNumber(this.state.displayValue)} />
       {this.renderButtons()}
      </div>
    )
  }
}

export default Calculator
