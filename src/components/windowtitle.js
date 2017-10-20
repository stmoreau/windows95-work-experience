import React from 'react';
import CloseButton from './closebutton';
import '../styles/components/windowtitle.css';

const WindowTitle = (props) => {
  return (
    <div className='window-title handle'>
      <h1 className='window-title__heading'>
        {props.title}
      </h1>
      <CloseButton onClick={() => props.onClick(props.title)} />
    </div>
  )
}

export default WindowTitle;
