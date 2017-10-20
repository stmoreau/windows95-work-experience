import React from 'react';
import { connect } from 'react-redux';
import CloseButton from './closebutton';
import '../styles/components/popup.scss';

class Popup extends React.Component {
  constructor(props) {
    super(props);

    this.renderContact = this.renderContact.bind(this);
    this.renderStandardPopup = this.renderStandardPopup.bind(this);
  }

  renderContact() {
    return (
      <div>
        <img
          className="popup__icon popup__icon--contact"
          src={require(`../assets/os-icons/${this.props.image_url}`)}
          alt={this.props.title}
        />
        <div className="popup__inner-wrapper popup__inner-wrapper--contact">
          <div className="popup__text" />
          {this.props.links.map((link, index) => {
            return (
              <a key={index} className="popup__link" href={link.url} target="_blank">
                {link.text}
              </a>
            );
          })}
        </div>
      </div>
    );
  }

  renderStandardPopup() {
    return (
      <div>
        <img
          className={'popup__icon' + (this.props.isContact ? ' popup__icon--contact' : '')}
          src={require(`../assets/os-icons/${this.props.image_url}`)}
          alt={this.props.title}
        />
        <div className="popup__inner-wrapper">
          <div className="popup__text">
            <p>{this.props.message[0]}</p>
            {this.props.message[1] ? <p>{this.props.message[1]}</p> : null}
          </div>
          <button className="popup__button" onClick={this.props.onClick}>
            {this.props.button_text}
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={'popup__outer-wrapper' + (this.props.isContact ? ' popup__outer-wrapper--contact' : '')}>
        {this.props.isContact ? this.renderContact() : null}
        {!this.props.isContact ? this.renderStandardPopup() : null}
      </div>
    );
  }
}

export default Popup;
