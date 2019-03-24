import React from 'react'

const Button = ({ text, handleClick }) => (
  <button type="button" className="ui primary button" onClick={handleClick}>
    {text}
  </button>
)

export default Button
