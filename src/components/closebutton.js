import React from 'react';
import '../styles/components/closebutton.scss';

const CloseButton = (props) => {
  return (
    <button className='closebutton' onClick={props.onClick}> X </button>
  )
}

export default CloseButton;
