import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProjectActions from '../actions';
import Appinfo from './appinfo';
import StartBar from './startbar';
import Folder from './folder';
import Menu from './menu';
import Window from './window';
import '../styles/components/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: null,
      selectedWindow: null,
      showMenu: false,
      startButtonActive: false
    };

    this.closeExtraProjects = this.closeExtraProjects.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
  }

  // make sure the window just opened has the top z-index.
  componentWillReceiveProps(nextProps) {
    const selectedProject = nextProps.projects.filter(project => project.isSelected === true)[0];
    const selectedPopup = nextProps.popups.filter(popup => popup.isSelected === true)[0];
    let selectedTitle;

    if (selectedPopup && selectedPopup.title !== this.state.selectedWindow && this.selectedPopup !== selectedPopup) {
      selectedTitle = selectedPopup.title;
    } else if (selectedProject && selectedProject.title !== this.state.selectedWindow) {
      selectedTitle = selectedProject.title;
      this.setState({
        selectedProject: selectedTitle
      });
    }

    this.setState({
      selectedWindow: selectedTitle
    });

    this.selectedPopup = selectedPopup;
    this.selectedProject = selectedProject;
  }

  // Close all projects except the selected one when reszing down to mobile
  closeExtraProjects() {
    const openProjects = this.props.projects.filter(project => project.isOpen === true);
    openProjects.map(project => {
      if (project.title !== this.state.selectedProject) {
        this.props.actions.closeProject(project.title);
      }
    });
  }

  handleMouseDown(windowTitle) {
    this.setState({
      selectedWindow: windowTitle
    });
  }

  handleStartClick() {
    // toggle states on button click
    this.setState({
      showMenu: !this.state.showMenu,
      startButtonActive: !this.state.startButtonActive
    });
  }

  render() {
    const { actions, menuItems, popups, projects } = this.props;
    const openPopups = popups.filter(popup => popup.isOpen === true);
    const openProjects = projects.filter(project => project.isOpen === true);

    return (
      <div className="app">
        <div className="app__inner-wrapper">
          <Appinfo/>
          <div className="app__folders">
            {projects.map((project, index) => {
              return <Folder key={index} project={project} onClick={actions.openProject} />;
            })}
          </div>

          <div>
            {openProjects.map((project, index) => {
              const zIndex = project.title === this.state.selectedWindow ? 10 : 1;
              return (
                <Window
                  key={index}
                  item={project}
                  zIndex={zIndex}
                  isProject={true}
                  onMouseDown={this.handleMouseDown}
                  onCloseClick={actions.closeProject}
                  closeExtraProjects={this.closeExtraProjects}
                />
              );
            })}
            {openPopups.map((popup, index) => {
              const zIndex = popup.title === this.state.selectedWindow ? 10 : 1;
              return (
                <Window
                  key={index}
                  item={popup}
                  zIndex={zIndex}
                  isProject={false}
                  onMouseDown={this.handleMouseDown}
                  onCloseClick={actions.closePopup}
                  closeExtraProjects={this.closeExtraProjects}
                />
              );
            })}
          </div>
        </div>
        {this.state.showMenu ? (
          <Menu onClick={actions.openPopup} items={menuItems} onPageClick={this.handleStartClick} />
        ) : null}
        <StartBar onClick={this.handleStartClick} active={this.state.startButtonActive} openProjects={openProjects} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  menuItems: state.menuItems,
  popups: state.popups,
  projects: state.projects
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ProjectActions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
