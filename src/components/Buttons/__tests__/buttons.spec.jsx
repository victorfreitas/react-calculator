import { expect, jest, test } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react'

import Buttons from '../'
import labels from '../../../utils/labels'
import { calculatorSubject } from '../../../observables/calculatorObservable'

test('should test all the buttons', () => {
  render(<Buttons />)

  const buttons = screen.getAllByTestId('button')
  const calculatorSubjectSpy = jest.spyOn(calculatorSubject, 'next')

  expect(buttons).toHaveLength(labels.length)

  labels.forEach(({ value, label, name, className }, i) => {
    const button = buttons.at(i)

    fireEvent.click(button)
    expect(button).toBeInTheDocument()
    expect(button.tagName).toBe('BUTTON')
    expect(button).toHaveClass(`btn ${className}`, { exact: true })
    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveTextContent(label)
    expect(calculatorSubjectSpy).toHaveBeenCalledTimes(1)
    expect(calculatorSubjectSpy).toHaveBeenCalledWith({
      type: name,
      value,
      label
    })
    calculatorSubjectSpy.mockReset()
  })
})
