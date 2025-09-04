import React from 'react';
const Button = ({ children,style }) => {
  return (
    <button style={style}>
      {children}
    </button>
  )
}
export default Button;