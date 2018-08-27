import React from 'react'

import './style.css'

const Button = ({ click, label }) => (
  <button
    className={`btn ${label.class}`}
    onClick={() => click && click(label)}
  >
    {label.name}
  </button>
)

export default Button
