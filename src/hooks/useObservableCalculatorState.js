import { useEffect, useReducer } from 'react'
import { fromEvent, map } from 'rxjs'

import { CLICK_CALCULATOR } from '../constants/event'
import reducer from '../reducers/calculatorReducer'
import initialState from '../utils/calculatorInitialState'

export const calculator$ = fromEvent(document, CLICK_CALCULATOR).pipe(
  map(event => event.detail)
)

function useObservableCalculatorState() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const subscription = calculator$.subscribe(dispatch)

    return () => subscription.unsubscribe()
  }, [])

  return state
}

export default useObservableCalculatorState
