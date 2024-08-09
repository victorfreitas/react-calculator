import { describe, it, expect } from '@jest/globals'
import { render } from '@testing-library/react'

import {
  calculatorSubject,
  calculator$
} from '../../observables/calculatorObservable'
import useObservableCalculatorState from '../useObservableCalculatorState'
import initialState from '../../utils/calculatorInitialState'

function TestComponent() {
  const state = useObservableCalculatorState()

  return <div>{JSON.stringify(state)}</div>
}

describe('should test the useObservableCalculatorState hook', () => {
  const { container } = render(<TestComponent />)

  it('#initialObservableState', () => {
    expect(container).toHaveTextContent(JSON.stringify(initialState))
  })

  it('#dispatchCalculatorObservableStateEvent', () => {
    const callback = jest.fn()
    const subscription = calculator$.subscribe(callback)

    calculatorSubject.next({ type: 'digit', label: '1', value: 1 })

    expect(callback).toHaveBeenCalledWith({
      type: 'digit',
      label: '1',
      value: 1
    })
    subscription.unsubscribe()
  })
})
