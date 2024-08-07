import { expect, jest, test } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react'

import Buttons from '../'
import labels from '../../../utils/labels'
import { CLICK_CALCULATOR } from '../../../constants/event'

test('should test all the buttons', () => {
  render(<Buttons />)

  const buttons = screen.getAllByTestId('button')
  const dispatchEventSpy = jest.spyOn(document, 'dispatchEvent')

  expect(buttons).toHaveLength(labels.length)

  labels.forEach(({ value, label, name, className }, i) => {
    const button = buttons.at(i)

    fireEvent.click(button)
    expect(button).toBeInTheDocument()
    expect(button.tagName).toBe('BUTTON')
    expect(button).toHaveClass(`btn ${className}`, { exact: true })
    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveTextContent(label)
    expect(dispatchEventSpy).toHaveBeenCalledTimes(1)
    expect(dispatchEventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: CLICK_CALCULATOR,
        detail: { type: name, value, label }
      })
    )
    dispatchEventSpy.mockReset()
  })
})
