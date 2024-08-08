import { test, expect } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react'

import App from '../'

test('should test the calculator division', () => {
  render(<App />)

  const displayHat = screen.getByTestId('display-calculation')
  const displayValue = screen.getByTestId('display-value')
  const clear = screen.getByText('AC', { selector: 'button' })
  const divide = screen.getByText('÷', { selector: 'button' })
  const equals = screen.getByText('=', { selector: 'button' })
  const seven = screen.getByText('7', { selector: 'button' })
  const eight = screen.getByText('8', { selector: 'button' })
  const nine = screen.getByText('9', { selector: 'button' })
  const zero = screen.queryByText('0', { selector: 'button' })

  expect(displayHat).toHaveTextContent('')
  expect(displayValue).toHaveTextContent('0')

  fireEvent.click(nine)
  fireEvent.click(eight)
  fireEvent.click(seven)
  fireEvent.click(divide)
  fireEvent.click(seven)
  fireEvent.click(zero)
  fireEvent.click(equals)

  expect(displayHat).toHaveTextContent('987 ÷ 70 =')
  expect(displayValue).toHaveTextContent(/^14.1$/)

  fireEvent.click(equals)

  expect(displayHat).toHaveTextContent('14.1 ÷ 70 =')
  expect(displayValue).toHaveTextContent(/^0.20142857142857143$/)

  fireEvent.click(equals)

  expect(displayHat).toHaveTextContent('0.20142857142857143 ÷ 70 =')
  expect(displayValue).toHaveTextContent(/^0.0028775510204081633$/)

  fireEvent.click(clear)

  expect(displayHat).toHaveTextContent('')
  expect(displayValue).toHaveTextContent(/^0$/)
})
