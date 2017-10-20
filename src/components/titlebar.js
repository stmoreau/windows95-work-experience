import React from 'react';
import '../styles/components/titlebar.scss';

const TitleBar = (props) => {
  const isSelectedProject = props.project.title === props.selectedProject ? true : false;

  return (
    <div className='titlebar'>
      <img className='titlebar__icon' src={require('../assets/os-icons/openfolder-icon.png')} alt='open folder icon' />
      <span className='titlebar__text'>{props.project.title}</span>
    </div>
  )
}

export default TitleBar;
