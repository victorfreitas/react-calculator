import { test, expect } from '@jest/globals'
import { userEvent } from '@testing-library/user-event'

import { keyboard$ } from '../keyboardObservable'

test('should validate keyboard observable subscriber', async () => {
  const observer = jest.fn()
  const keyboardSpy = jest.spyOn(keyboard$, 'subscribe')
  const subscribe = keyboard$.subscribe(observer)

  await userEvent.keyboard('2')

  expect(keyboardSpy).toHaveBeenCalledWith(observer)
  expect(observer).toHaveBeenCalledWith('2')
  subscribe.unsubscribe()
})
