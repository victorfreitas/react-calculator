import { describe, it, expect } from '@jest/globals'
import { act } from 'react'
import { render } from '@testing-library/react'

import useObservableCalculatorState, {
  calculator$
} from '../useObservableCalculatorState'
import initialState from '../../utils/calculatorInitialState'
import { CLICK_CALCULATOR } from '../../constants/event'

function TestComponent() {
  const state = useObservableCalculatorState()

  return <div>{JSON.stringify(state)}</div>
}

describe('should test the useObservableCalculatorState hook', () => {
  const { container } = render(<TestComponent />)

  it('#initialObservableState', () => {
    expect(container).toHaveTextContent(JSON.stringify(initialState))
  })

  it('#dispatchCalculatorObservableStateEvent', async () => {
    const callback = jest.fn()
    const subscription = calculator$.subscribe(callback)

    await act(async () => {
      document.dispatchEvent(
        new CustomEvent(CLICK_CALCULATOR, {
          detail: { type: 'add', label: '1', value: 1 }
        })
      )
    })

    expect(callback).toHaveBeenCalledWith({ type: 'add', label: '1', value: 1 })
    subscription.unsubscribe()
  })
})
