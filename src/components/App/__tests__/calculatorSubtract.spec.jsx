import { test, expect } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react'

import App from '../'

test('should test the calculator subtraction', () => {
  render(<App />)

  const displayHat = screen.getByTestId('display-calculation')
  const displayValue = screen.getByTestId('display-value')
  const clear = screen.getByText('AC', { selector: 'button' })
  const subtract = screen.getByText('−', { selector: 'button' })
  const equals = screen.getByText('=', { selector: 'button' })
  const two = screen.getByText('2', { selector: 'button' })
  const three = screen.getByText('3', { selector: 'button' })
  const four = screen.getByText('4', { selector: 'button' })
  const five = screen.getByText('5', { selector: 'button' })
  const six = screen.getByText('6', { selector: 'button' })

  expect(displayHat).toHaveTextContent('')
  expect(displayValue).toHaveTextContent('0')

  fireEvent.click(two)
  fireEvent.click(three)
  fireEvent.click(six)
  fireEvent.click(subtract)
  fireEvent.click(four)
  fireEvent.click(five)
  fireEvent.click(equals)

  expect(displayHat).toHaveTextContent('236 − 45 =')
  expect(displayValue).toHaveTextContent(/^191$/)

  fireEvent.click(equals)

  expect(displayHat).toHaveTextContent('191 − 45 =')
  expect(displayValue).toHaveTextContent(/^146$/)

  fireEvent.click(equals)

  expect(displayHat).toHaveTextContent('146 − 45 =')
  expect(displayValue).toHaveTextContent(/^101$/)

  fireEvent.click(clear)

  expect(displayHat).toHaveTextContent('')
  expect(displayValue).toHaveTextContent(/^0$/)
})
