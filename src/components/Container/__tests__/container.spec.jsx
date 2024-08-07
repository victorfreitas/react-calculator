import { describe, it, expect } from '@jest/globals'
import { fireEvent, render, screen } from '@testing-library/react'

import Container from '../'
import labels from '../../../utils/labels'
import { CLICK_CALCULATOR } from '../../../constants/event'

describe('should test the container of display and buttons', () => {
  it('should test the container', () => {
    const { container } = render(<Container />)

    expect(container).toBeInTheDocument()
    expect(container).toBeInstanceOf(HTMLDivElement)
  })

  it('should test display component', () => {
    render(<Container />)

    const displayHat = screen.getByTestId('display-calculation')
    const displayValue = screen.getByTestId('display-value')

    expect(displayHat).toBeInTheDocument()
    expect(displayHat.tagName).toBe('SPAN')
    expect(displayHat).toHaveClass('displayCalc', { exact: true })
    expect(displayHat).toHaveTextContent('')
    expect(displayValue).toBeInTheDocument()
    expect(displayValue.tagName).toBe('DIV')
    expect(displayValue).toHaveClass('display', { exact: true })
    expect(displayValue).toHaveTextContent('0')
  })

  it('should test the buttons', () => {
    render(<Container />)

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
})
