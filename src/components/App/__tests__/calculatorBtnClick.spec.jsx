import { test, expect } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react'

import App from '../'
import labels from '../../../utils/labels'
import { calculatorSubject } from '../../../observables/calculatorObservable'

test('should test the calculator buttons click', () => {
  render(<App />)

  const calculatorSubjectSpy = jest.spyOn(calculatorSubject, 'next')

  labels.forEach(({ value, label, name }, i) => {
    const button = screen.queryByText(label, { selector: 'button' })

    expect(button).toBeInTheDocument()

    fireEvent.click(button)

    expect(calculatorSubjectSpy).toHaveBeenCalledTimes(i + 1)
    expect(calculatorSubjectSpy).toHaveBeenCalledWith({
      type: name,
      value,
      label
    })
  })

  calculatorSubjectSpy.mockReset()
})
