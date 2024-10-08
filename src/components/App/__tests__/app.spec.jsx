import { test, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'

import App from '../'

test('should test the application render', () => {
  render(<App />)

  const app = screen.getByTestId('app')
  const displayHat = screen.getByTestId('display-calculation')
  const displayValue = screen.getByTestId('display-value')
  const title = screen.getByTestId('title')
  const clear = screen.getByText('AC')
  const percentage = screen.getByText('%')
  const divide = screen.getByText('÷')
  const multiply = screen.getByText('×')
  const subtract = screen.getByText('−')
  const add = screen.getByText('+')
  const equals = screen.getByText('=')
  const decimal = screen.getByText('.')
  const one = screen.getByText('1')
  const two = screen.getByText('2')
  const three = screen.getByText('3')
  const four = screen.getByText('4')
  const five = screen.getByText('5')
  const six = screen.getByText('6')
  const seven = screen.getByText('7')
  const eight = screen.getByText('8')
  const nine = screen.getByText('9')
  const zero = screen.queryByText('0', { selector: 'button' })

  expect(app).toBeInTheDocument()
  expect(displayHat).toBeInTheDocument()
  expect(displayValue).toBeInTheDocument()
  expect(title).toBeInTheDocument()
  expect(clear).toBeInTheDocument()
  expect(percentage).toBeInTheDocument()
  expect(divide).toBeInTheDocument()
  expect(multiply).toBeInTheDocument()
  expect(subtract).toBeInTheDocument()
  expect(add).toBeInTheDocument()
  expect(equals).toBeInTheDocument()
  expect(decimal).toBeInTheDocument()
  expect(one).toBeInTheDocument()
  expect(two).toBeInTheDocument()
  expect(three).toBeInTheDocument()
  expect(four).toBeInTheDocument()
  expect(five).toBeInTheDocument()
  expect(six).toBeInTheDocument()
  expect(seven).toBeInTheDocument()
  expect(eight).toBeInTheDocument()
  expect(nine).toBeInTheDocument()
  expect(zero).toBeInTheDocument()
})
