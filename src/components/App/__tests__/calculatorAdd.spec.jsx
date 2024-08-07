import { test, expect } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react'

import App from '../'
import labels from '../../../utils/labels'

test('should test the calculator addition', () => {
  render(<App />)

  const buttons = screen.getAllByTestId('button')
  const displayHat = screen.getByTestId('display-calculation')
  const displayValue = screen.getByTestId('display-value')
  const title = screen.getByTestId('title')
  const clear = screen.getByText('AC', { selector: 'button' })
  const add = screen.getByText('+', { selector: 'button' })
  const equals = screen.getByText('=', { selector: 'button' })
  const dot = screen.getByText('.', { selector: 'button' })
  const one = screen.getByText('1', { selector: 'button' })
  const two = screen.getByText('2', { selector: 'button' })
  const zero = screen.queryByText('0', { selector: 'button' })

  expect(buttons).toHaveLength(labels.length)
  expect(displayHat).toHaveTextContent('')
  expect(displayValue).toHaveTextContent('0')
  expect(title).toHaveTextContent('Calculator')

  fireEvent.click(one)
  fireEvent.click(zero)
  fireEvent.click(zero)
  fireEvent.click(add)
  fireEvent.click(one)
  fireEvent.click(zero)
  fireEvent.click(equals)

  expect(displayHat).toHaveTextContent('100 + 10 =')
  expect(displayValue).toHaveTextContent(/^110$/)

  fireEvent.click(equals)

  expect(displayHat).toHaveTextContent('110 + 10 =')
  expect(displayValue).toHaveTextContent(/^120$/)

  fireEvent.click(equals)

  expect(displayHat).toHaveTextContent('120 + 10 =')
  expect(displayValue).toHaveTextContent(/^130$/)

  fireEvent.click(clear)

  expect(displayHat).toHaveTextContent('')
  expect(displayValue).toHaveTextContent(/^0$/)

  fireEvent.click(dot)
  fireEvent.click(two)
  fireEvent.click(one)
  fireEvent.click(two)

  expect(displayHat).toHaveTextContent('')
  expect(displayValue).toHaveTextContent(/^0\.212$/)

  fireEvent.click(add)
  fireEvent.click(one)
  fireEvent.click(two)
  fireEvent.click(zero)

  expect(displayHat).toHaveTextContent('')
  expect(displayValue).toHaveTextContent(/^120$/)

  fireEvent.click(equals)

  expect(displayHat).toHaveTextContent('0.212 + 120 =')
  expect(displayValue).toHaveTextContent(/^120.212$/)

  fireEvent.click(clear)

  expect(displayHat).toHaveTextContent('')
  expect(displayValue).toHaveTextContent(/^0$/)

  fireEvent.click(dot)
  fireEvent.click(dot) // wrong click, bypass action.
  fireEvent.click(two)
  fireEvent.click(one)

  expect(displayHat).toHaveTextContent('')
  expect(displayValue).toHaveTextContent(/^0\.21$/)

  fireEvent.click(dot) // wrong click, bypass action.

  expect(displayHat).toHaveTextContent('')
  expect(displayValue).toHaveTextContent(/^0\.21$/)

  fireEvent.click(add)

  expect(displayHat).toHaveTextContent('')
  expect(displayValue).toHaveTextContent(/^0\.21$/)

  fireEvent.click(dot)

  expect(displayHat).toHaveTextContent('')
  expect(displayValue).toHaveTextContent(/^0\.$/)

  fireEvent.click(one)
  fireEvent.click(two)

  expect(displayHat).toHaveTextContent('')
  expect(displayValue).toHaveTextContent(/^0\.12$/)

  fireEvent.click(equals)

  expect(displayHat).toHaveTextContent('0.21 + 0.12 =')
  expect(displayValue).toHaveTextContent(/^0\.32999999999999996$/)
})
