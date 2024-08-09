import { useEffect } from 'react'

import { keyboard$ } from '../../observables/keyboardObservable'
import { keyboardObserver } from '../../observers/keyboardObserver'
import styles from './style.module.css'
import Title from '../Title'
import Container from '../Container'

function App() {
  useEffect(() => {
    const subscription = keyboard$.subscribe(keyboardObserver)

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <div className={styles.calculator} data-testid="app">
      <Title />
      <Container />
    </div>
  )
}

export default App
