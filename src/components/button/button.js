import React from 'react';

import './button.scss';

const Button=({children, inverted, ...otherProps})=>{
  return(
    <button className={`${inverted ? 'inverted': ''} custom-button`} {...otherProps}>
    {children}
    </button>
  )
}

export default Button;
