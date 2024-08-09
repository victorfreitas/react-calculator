import { test, expect } from '@jest/globals'

import { calculatorSubject, calculator$ } from '../calculatorObservable'

test('should validate calculator observable subscriber', () => {
  const value = { value: '1', label: '1', type: 'digit' }
  const observer = jest.fn()
  const calculatorSpy = jest.spyOn(calculator$, 'subscribe')
  const calculatorSubjectSpy = jest.spyOn(calculatorSubject, 'next')
  const subscribe = calculator$.subscribe(observer)

  calculatorSubject.next(value)
  expect(calculatorSpy).toHaveBeenCalledWith(observer)
  expect(calculatorSubjectSpy).toHaveBeenCalledWith(value)
  expect(observer).toHaveBeenCalledWith(value)
  subscribe.unsubscribe()
})
