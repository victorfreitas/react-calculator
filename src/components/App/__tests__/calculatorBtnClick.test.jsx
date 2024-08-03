import { test, expect } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react'

import App from '../'
import labels from '../../../utils/labels'
import { CLICK_CALCULATOR } from '../../../constants/event'

test('should test the calculator buttons click', () => {
  render(<App />)

  const dispatchEventSpy = jest.spyOn(document, 'dispatchEvent')

  labels.forEach(({ value, label, name }, i) => {
    const button = screen.queryByText(label, { selector: 'button' })

    expect(button).toBeInTheDocument()

    fireEvent.click(button)

    expect(dispatchEventSpy).toHaveBeenCalledTimes(i + 1)
    expect(dispatchEventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: CLICK_CALCULATOR,
        detail: { type: name, value, label }
      })
    )
  })

  dispatchEventSpy.mockReset()
})
