import { Subject, filter } from 'rxjs'

import CalculatorType from '../constants/calculatorType'

const calculatorSet = new Set(Object.values(CalculatorType))

export const calculatorSubject = new Subject()

/**
 * @type {import('rxjs').Observable<{ value: string, label: string, type: string }>}
 */
export const calculator$ = calculatorSubject
  .asObservable()
  .pipe(filter(Boolean))
  .pipe(filter(detail => calculatorSet.has(detail.type)))
