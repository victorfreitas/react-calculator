import { test, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'

import Title from '../'

test('should test the display elements', () => {
  render(<Title />)

  const title = screen.getByTestId('title')

  expect(title).toBeInTheDocument()
  expect(title.tagName).toBe('H1')
  expect(title).toHaveClass('title', { exact: true })
  expect(title).toHaveTextContent('Calculator')
})
