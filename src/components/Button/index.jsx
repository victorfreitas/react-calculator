import React from 'react'

import './style.css'

export default props => (
  <button
    className={`btn ${props.label.class}`}
    onClick={() => props.click && props.click(props.label)}
  >
    {props.label.name}
  </button>
)
