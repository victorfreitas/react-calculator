import { useEffect, useReducer } from 'react'

import reducer from '../reducers/calculatorReducer'
import initialState from '../utils/calculatorInitialState'
import { calculator$ } from '../observables/calculatorObservable'

function useObservableCalculatorState() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const subscription = calculator$.subscribe(dispatch)

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return state
}

export default useObservableCalculatorState
