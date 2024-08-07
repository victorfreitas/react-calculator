import { test, expect } from '@jest/globals'
import { screen } from '@testing-library/react'
import { act } from 'react'

beforeAll(() => {
  const root = document.createElement('div')

  root.setAttribute('id', 'root')
  document.body.appendChild(root)
})

afterAll(() => {
  document.body.innerHTML = ''
})

test('renders App without crashing', async () => {
  await act(() => import('../index.jsx'))

  expect(screen.getByTestId('app')).toBeInTheDocument()
  expect(screen.getByTestId('display-value')).toBeInTheDocument()
})
