import { expect, jest, test } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react'

import Button from '../'
import { CLICK_CALCULATOR } from '../../../constants/event'
import { targetElement } from '../../../hooks/useObservableCalculatorState'

test('should test a single button', () => {
  render(<Button name="clear" className="double" value="clear" label="AC" />)

  const button = screen.getByTestId('button')
  const dispatchEventSpy = jest.spyOn(document, 'dispatchEvent')

  fireEvent.click(button)

  expect(button).toBeInTheDocument()
  expect(button.tagName).toBe('BUTTON')
  expect(button).toHaveClass('btn double', { exact: true })
  expect(button).toHaveAttribute('type', 'button')
  expect(button).toHaveTextContent('AC')
  expect(dispatchEventSpy).toHaveBeenCalledTimes(1)
  expect(dispatchEventSpy).toHaveBeenCalledWith(
    expect.objectContaining({
      type: CLICK_CALCULATOR,
      detail: { type: 'clear', value: 'clear', label: 'AC' }
    })
  )
})
