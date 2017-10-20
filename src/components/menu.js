import React from 'react';
import MenuItem from './menuitem';
import '../styles/components/menu.scss';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.onPageClick = this.onPageClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mousedown', this.onPageClick);
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.onPageClick);
  }

  onPageClick(e) {
    const isStartButton = (e.target.className.indexOf('startbar__button') > -1 ||
      e.target.parentNode.className.indexOf('startbar__button') > -1 );
    if (e.target !== this.menu && !this.menu.contains(e.target) && !isStartButton && this.props.onPageClick) {
      this.props.onPageClick();
    }
  }

  render() {
    const { items } = this.props;

    return (
      <ul className={'menu' + (this.props.type ? ' menu--submenu' : ' menu--main')} style={{zIndex: 10}} ref={(menu) => { this.menu = menu;}}>

        {items.map((item, index) => {
          return <MenuItem key={index} item={item} onClick={this.props.onClick} />
        })}
        
      </ul>
    );
  }
}

export default Menu;
