import React from "react";
import './ToggleButton.scss'


export const ToggleButton: React.FC = props => {


  return <button className='toggleButton' >
    {props.children}
  </button>
}