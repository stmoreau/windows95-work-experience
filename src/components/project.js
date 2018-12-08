import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProjectActions from '../actions';
import '../styles/components/project.css';

class Project extends React.Component {
  render() {
    const item = this.props;

    return (
      <div className="project">
        <div className="project__inner-wrapper">
          <div className="project__image-wrapper">
            <img className="project__image" alt={this.props.title} src={require(`../assets/${this.props.image}`)} />
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
                Company website
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
