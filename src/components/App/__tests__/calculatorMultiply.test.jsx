import { test, expect } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react'

import App from '../'

test('should test the calculator multiplication', () => {
  render(<App />)

  const displayHat = screen.getByTestId('display-calculation')
  const displayValue = screen.getByTestId('display-value')
  const clear = screen.getByText('AC', { selector: 'button' })
  const multiply = screen.getByText('*', { selector: 'button' })
  const equals = screen.getByText('=', { selector: 'button' })
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
  fireEvent.click(multiply)
  fireEvent.click(two)
  fireEvent.click(zero)
  fireEvent.click(equals)

  expect(displayHat).toHaveTextContent('798 * 20 =')
  expect(displayValue).toHaveTextContent(/^15960$/)

  fireEvent.click(equals)

  expect(displayHat).toHaveTextContent('15960 * 20 =')
  expect(displayValue).toHaveTextContent(/^319200$/)

  fireEvent.click(equals)

  expect(displayHat).toHaveTextContent('319200 * 20 =')
  expect(displayValue).toHaveTextContent(/^6384000$/)

  fireEvent.click(clear)

  expect(displayHat).toHaveTextContent('')
  expect(displayValue).toHaveTextContent(/^0$/)
})
