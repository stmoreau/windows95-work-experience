import React from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProjectActions from '../actions';
import Popup from './popup';
import Project from './project';
import WindowTitle from './windowtitle';
import '../styles/components/window.scss';

class Window extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      activeDrags: 0,
      availableWidth: 1000,
      availableHeight: 1000,
      width: 540,
      height: 420
    };

    this.onDrag = this.onDrag.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    this.renderFixedSize = this.renderFixedSize.bind(this);
    this.renderResizable = this.renderResizable.bind(this);
    this.setAvailableSpace = this.setAvailableSpace.bind(this);
    this.checkWindowWidth = this.checkWindowWidth.bind(this);
  }

  componentDidMount() {
    this.checkWindowWidth();
    window.addEventListener('resize', this.checkWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkWindowWidth);
  }

  checkWindowWidth() {
    let hasResizedToMobile;
    if (window.innerWidth > 540) {
      this.setState({ isDesktop: true });
    } else {
      this.setState({ isDesktop: false });
    }

    hasResizedToMobile = this.previousDesktopState && (this.previousDesktopState !== this.state.isDesktop) && !this.state.isDesktop;

    if (hasResizedToMobile && this.props.item.title !== this.props.selectedProject) {
      this.props.closeExtraProjects();
    }

    this.previousDesktopState = this.state.isDesktop;

    if (this.openWindow) {
      this.setAvailableSpace('resize');
    } 
  }

  setAvailableSpace(eventType) {
    //set max width constraint to be windowwidth - left offset position of window
    const availableWidth = window.innerWidth - this.openWindow.getBoundingClientRect().left;
    const availableHeight = window.innerHeight - this.openWindow.getBoundingClientRect().top - 30;
   
    this.setState({
      availableWidth: availableWidth,
      availableHeight: availableHeight
    });

    if (eventType !== 'drag' && availableWidth < this.state.width) {
      this.setState({width: availableWidth});
    }
  }

  onDrag() {
    this.setAvailableSpace('drag');
  }

  onResize(event, {size}){
    this.checkWindowWidth();
    this.setState({width: size.width, height: size.height});
  }

  onStart() {
    this.setState({activeDrags: ++this.state.activeDrags});
  }

  onStop() {
    this.setState({activeDrags: --this.state.activeDrags});
  }

  renderDraggable() {
    const { item } = this.props;
    const dragHandlers = {onDrag: this.onDrag, onStart: this.onStart, onStop: this.onStop};

    return (
      <Draggable onMouseDown={() => this.props.onMouseDown(this.props.item.title)} bounds=".app__inner-wrapper" handle='.handle' {...dragHandlers}>
        {this.props.isProject ?
          this.renderResizable() :
          this.renderFixedSize()
        }
      </Draggable>
    );
  }

  renderFixedSize() {
    const { item, zIndex } = this.props;

    return (
      <div style={{zIndex: zIndex}} className={'window' + (this.props.isProject ? ' window--project' : ' window--popup')} ref={(window) => { this.openWindow = window;}}>
        <WindowTitle {...item} onClick={() => this.props.onCloseClick(item.title)} />
        {this.props.isProject ?
            <Project {...item} /> :
            <Popup {...item} onClick={() => this.props.onCloseClick(item.title)} selectedProject={this.props.selectedProject}/>
          }
      </div>
    );
  }

  renderResizable() {
    const { item, zIndex } = this.props;

    return (
      <Resizable height={this.state.height} width={this.state.width} lockAspectRatio={true} minConstraints={[500, 389]} maxConstraints={[this.state.availableWidth, this.state.availableHeight]} onResize={this.onResize}>
        <div style={{zIndex: zIndex, width: this.state.width + 'px', 'maxWidth': this.state.availableWidth + 'px', 'maxHeight': this.state.availableHeight + 'px'}} className='window window--project' ref={(window) => { this.openWindow = window;}}>
          <WindowTitle {...item} onClick={() => this.props.onCloseClick(item.title)} />
          <Project {...item} />
        </div>
      </Resizable>
    );
  }

  render() {
    return (
      this.state.isDesktop ?
        this.renderDraggable() :
        this.renderFixedSize()
    )
  }
}

// export default Window;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ProjectActions, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(Window);

