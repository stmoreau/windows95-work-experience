import React from 'react';
import Clock from './clock';
import TitleBar from './titlebar';
import '../styles/components/startbar.scss';

class StartBar extends React.Component {
  constructor(props) {
    super(props);

    this.renderTitleBar = this.renderTitleBar.bind(this);
  }

  renderTitleBar() {
    return (
      this.props.openProjects.map((project, index) => {
        return <TitleBar key={index} project={project} />
      })
    );
  }

  render() {
    return (
      <div className='startbar'>
        <button className={'startbar__button' + (this.props.active ? ' startbar__button--active' : '')} onClick={() => this.props.onClick()}>
          <img className='startbar__button-icon' src={require('../assets/os-icons/favicon-16x16.png')} alt='start icon' />
          <span className='startbar__button-text'> Start </span>
        </button>
        {this.props.openProjects ?
          this.renderTitleBar() :
          null
        }
        <Clock />
      </div>
    )
  }
}

export default StartBar;
