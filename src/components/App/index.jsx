import styles from './style.module.css'
import Title from '../Title'
import Container from '../Container'

function App() {
  return (
    <div className={styles.calculator} data-testid="app">
      <Title />
      <Container />
    </div>
  )
}

export default App
