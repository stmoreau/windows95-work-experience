import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProjectActions from '../actions';
import CloseButton from './closebutton';
import '../styles/components/project.scss';

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.renderLandscapeLayout = this.renderLandscapeLayout.bind(this);
    this.renderPortraitLayout = this.renderPortraitLayout.bind(this);
  }

  renderLandscapeLayout() {
    return this.props.image_urls.map((url, index) => {
      return <img key={index} className="project__image" alt={this.props.title} src={require(`../assets/${url}`)} />;
    });
  }

  renderPortraitLayout() {
    return (
      <div>
        <div className="project__image-inner-wrapper">
          <img
            className="project__image project__image--portrait"
            alt={this.props.title}
            src={require(`../assets/${this.props.image_urls[0]}`)}
          />
          <img
            className="project__image project__image--portrait"
            alt={this.props.title}
            src={require(`../assets/${this.props.image_urls[1]}`)}
          />
        </div>
        <img className="project__image" alt={this.props.title} src={require(`../assets/${this.props.image_urls[2]}`)} />
      </div>
    );
  }

  render() {
    const item = this.props;

    return (
      <div className="project">
        <div className="project__inner-wrapper">
          <div className="project__image-wrapper">
            {item.hasPortraitImages ? this.renderPortraitLayout() : this.renderLandscapeLayout()}
          </div>
          <div className="project__dates">{item.dates}</div>
          <div className="project__info-wrapper">
            <p className="project__info">
              <span className="project__info-title">Job title:</span> {item.jobTitle}
            </p>
            <p className="project__info">
              <span className="project__info-title">Type:</span> {item.type}
            </p>
            <div className="project__info">
              <span className="project__info-title project__info-title--has-margin">Description:</span>
              {item.description.map((description, index) => {
                return (
                  <p className="project__info-item" key={index}>
                    {description}
                  </p>
                );
              })}
            </div>
            <p className="project__info">
              <span className="project__info-title">Tech stack:</span> {item.tech_stack}
            </p>
            {item.company_url ? (
              <a className="project__link" href={item.company_url} target="_blank">
                Company site
              </a>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ProjectActions, dispatch)
});

export default connect(null, mapDispatchToProps)(Project);
