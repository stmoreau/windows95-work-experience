import React from 'react';
import Menu from './menu';
import '../styles/components/menuitem.scss';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };

    this.closeCallback = null;
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  componentWillUnmount() {
    this.closeCallback && clearTimeout(this.closeCallback);
  }

  mouseOver() {
    if(this.closeCallback) {
      clearTimeout(this.closeCallback);
      this.closeCallback = null;
    }
    if (this.props.item.onMouseOver) {
      this.setState({hover: true});
    }
  }

  mouseOut() {
    this.closeCallback = setTimeout(() => {
      this.setState({ hover: false });
    }, 50);
  }

  render() {
    const { item } = this.props;

    return (
      <li className={'menu-item' + (item.isSubmenu ? ' menu-item--submenu' : '') + (item.onMouseOver ? ' menu-item--has-arrow' : '')} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={item.onClick ? () => this.props.onClick(item.popup.title) : null}>
        <img className={'menu-item__icon' + (item.isSubmenu ? ' menu-item__icon--submenu' : '')} src={require(`../assets/os-icons/${item.image_url}`)} alt={item.title}/>
        <span className='menu-item__title'> {item.title} </span>
          {this.state.hover ?
            <Menu items={item.items} type='submenu' onClick={this.props.onClick}/> :
            null
          }
      </li>
    );
  }
}

export default MenuItem;
