import { test, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'

import Display from '../'

test('should test the display elements', () => {
  const { container } = render(<Display />)
  const displayHat = screen.getByTestId('display-calculation')
  const displayValue = screen.getByTestId('display-value')

  expect(container).toBeInTheDocument()
  expect(container).toBeInstanceOf(HTMLDivElement)
  expect(displayHat).toBeInTheDocument()
  expect(displayHat.tagName).toBe('SPAN')
  expect(displayHat).toHaveClass('displayCalc', { exact: true })
  expect(displayHat).toHaveTextContent('')
  expect(displayValue).toBeInTheDocument()
  expect(displayValue.tagName).toBe('DIV')
  expect(displayValue).toHaveClass('display', { exact: true })
  expect(displayValue).toHaveTextContent('0')
})
