import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import './assets/css/style.css'
import App from './components/App'
import reportWebVitals from './reportWebVitals'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

reportWebVitals()
