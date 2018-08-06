import React, { Fragment } from 'react'
import { render } from 'react-dom'

import './assets/css/style.css'

import App from './components/App'

render(
  <Fragment>
    <h1>Calculator</h1>
    <App />
  </Fragment>,
  document.getElementById('root')
)
