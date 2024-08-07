import { test, expect } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react'

import App from '../'

test('should test the calculator percentage', () => {
  render(<App />)

  const displayHat = screen.getByTestId('display-calculation')
  const displayValue = screen.getByTestId('display-value')
  const clear = screen.getByText('AC', { selector: 'button' })
  const percentage = screen.getByText('%', { selector: 'button' })
  const add = screen.getByText('+', { selector: 'button' })
  const equals = screen.getByText('=', { selector: 'button' })
  const one = screen.getByText('1', { selector: 'button' })
  const two = screen.getByText('2', { selector: 'button' })
  const seven = screen.getByText('7', { selector: 'button' })
  const eight = screen.getByText('8', { selector: 'button' })
  const nine = screen.getByText('9', { selector: 'button' })
  const zero = screen.queryByText('0', { selector: 'button' })

  expect(displayHat).toHaveTextContent('')
  expect(displayValue).toHaveTextContent('0')

  fireEvent.click(seven)
  fireEvent.click(nine)
  fireEvent.click(eight)
  fireEvent.click(add)
  fireEvent.click(one)
  fireEvent.click(zero)
  fireEvent.click(two)
  fireEvent.click(percentage)

  expect(displayHat).toHaveTextContent('798 + 102% =')
  expect(displayValue).toHaveTextContent(/^813.96$/)

  fireEvent.click(equals)

  expect(displayHat).toHaveTextContent('798 + 813.96 =')
  expect(displayValue).toHaveTextContent(/^1611.96$/)

  fireEvent.click(equals)

  expect(displayHat).toHaveTextContent('1611.96 + 813.96 =')
  expect(displayValue).toHaveTextContent(/^2425.92$/)

  fireEvent.click(equals)

  expect(displayHat).toHaveTextContent('2425.92 + 813.96 =')
  expect(displayValue).toHaveTextContent(/^3239.88$/)

  fireEvent.click(clear)

  expect(displayHat).toHaveTextContent('')
  expect(displayValue).toHaveTextContent(/^0$/)
})
