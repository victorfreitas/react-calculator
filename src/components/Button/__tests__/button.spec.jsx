import { expect, jest, test } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react'

import Button from '../'
import { calculatorSubject } from '../../../observables/calculatorObservable'

test('should test a single button', () => {
  render(<Button name="clear" className="double" value="clear" label="AC" />)

  const button = screen.getByTestId('button')
  const calculatorSubjectSpy = jest.spyOn(calculatorSubject, 'next')

  fireEvent.click(button)

  expect(button).toBeInTheDocument()
  expect(button.tagName).toBe('BUTTON')
  expect(button).toHaveClass('btn double', { exact: true })
  expect(button).toHaveAttribute('type', 'button')
  expect(button).toHaveTextContent('AC')
  expect(calculatorSubjectSpy).toHaveBeenCalledTimes(1)
  expect(calculatorSubjectSpy).toHaveBeenCalledWith({
    type: 'clear',
    value: 'clear',
    label: 'AC'
  })
})
