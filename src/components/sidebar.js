import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import explain from '../actions/toggleExplanation';
import changeSpeed from '../actions/changeSpeed';
import pause from '../actions/pause';
import newPattern from '../actions/newPattern';
import changeColors from '../actions/changeColors';
import colorChoices from '../colors';
import Swatch from './sidebar-components/swatch';
import InitialState from './sidebar-components/initial-states';

class SidebarContainer extends Component {
  constructor () {
    super();
    this.state = { showExplanation: false, showSidebar: true, sidebarWidth: "220px", sidebarPadding: "40px 10px", };
    this.toggleExplanation = this.toggleExplanation.bind(this);
    this.changeSpeed = this.changeSpeed.bind(this);
    this.changeColors = this.changeColors.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.changeInitialState = this.changeInitialState.bind(this);
  }
  toggleExplanation() {
    this.props.pause();
    this.props.explain();
  }
  changeSpeed(newSpeed) {
    this.props.changeSpeed(newSpeed);
  }
  changeColors(newColors) {
    this.props.pause();
    this.props.changeColors(newColors);
    setTimeout(()=>{ this.props.pause(); }, 1000);

    const showhideStyling = {
      ...this.state.showhideStyling,
      backgroundColor: newColors[0],
      border: `5px solid ${newColors[0]}`,
    };
    this.setState({ showhideStyling: showhideStyling });
  }
  toggleSidebar() {
    const showSidebar = !this.state.showSidebar;
    const sidebarWidth = showSidebar ? "220px" : "0";
    const sidebarPadding = showSidebar ? "40px 10px" : "0";

    const colors = this.props.colors;
    const showStyling = {
      backgroundColor: colors[0],
      transition: "0.6s",
      border: `5px solid ${colors[0]}`,
      left: "186px"
    };
    const hideStyling = {
      backgroundColor: colors[0],
      border: `5px solid ${colors[0]}`,
      "msTransform": "rotate(180deg)",
      "WebkitTransform": "rotate(180deg)",
      "transform": "rotate(180deg)",
      transition: "0.6s"
    };
    const showhideStyling = showSidebar ? showStyling : hideStyling;
    this.setState({ sidebarWidth: sidebarWidth, showSidebar: showSidebar, sidebarPadding: sidebarPadding, showhideStyling: showhideStyling });
  }
  changeInitialState(initial) {
    this.props.pause();
    this.props.newPattern(initial);
    setTimeout(()=>{ this.props.pause(); }, 600);
  }
  componentWillMount() {
    const colors = this.props.colors;
    const showStyling = {
      backgroundColor: colors[0],
      transition: "0.6s",
      border: `5px solid ${colors[0]}`,
      left: "186px"
    };
    this.setState({ showhideStyling: showStyling });
  }
  render() {
    const colors = this.props.colors;
    const sidebarStyling = {
      backgroundColor: colors[1],
      color: colors[3],
      width: this.state.sidebarWidth,
      padding: this.state.sidebarPadding
    };
    const arrowFill = colors[2];
    let htmlTag = document.getElementsByTagName("HTML")[0];
    htmlTag.style.backgroundColor = colors[0];
    return (
      <div className="sidebar-container">
        <div className="button" id="show-hide" style={this.state.showhideStyling} onClick={ this.toggleSidebar }>
          <svg height="20" width="20">
            <path d="M18 2 L2 10 L18 18 Z" fill={arrowFill} />
          </svg>
        </div>
        <div className="sidebar" style={sidebarStyling}>
          <h1 className="title"> cellular <br /> automaton </h1>
          <div className="what-is-this button" onClick={this.toggleExplanation}>
            <h3>what is this?</h3>
          </div>
          <h2 className="user-controls">controls</h2>
            <h3 className="options color">color</h3>
              <Swatch colors={colorChoices.green} onColorClick={this.changeColors} />
              <Swatch colors={colorChoices.purple} onColorClick={this.changeColors} />
              <Swatch colors={colorChoices.southwest} onColorClick={this.changeColors} />
            <h3 className="options speed">speed</h3>
              <div className="option button" onClick={ () => this.changeSpeed(1500) }> > </div>
              <div className="option button" onClick={ () => this.changeSpeed(1000) }> >> </div>
              <div className="option button" onClick={ () => this.changeSpeed(600) }> >>> </div>
            <h3 className="options initial-state">initial state</h3>
              <InitialState title={'little triangle'} onStateClick={ this.changeInitialState }/>
              <InitialState title={'big triangle'} onStateClick={ this.changeInitialState } />
              <InitialState title={'nested triangle'} onStateClick={ this.changeInitialState } />
              <InitialState title={'hexagon'} onStateClick={ this.changeInitialState } />
              <InitialState title={'border'} onStateClick={ this.changeInitialState } />
              <InitialState title={'face'} onStateClick={ this.changeInitialState } />
              <InitialState title={'triforce'} onStateClick={ this.changeInitialState } />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const props = {
    showExplanation: state.showExplanation,
    colors: state.colors,
  }
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    explain: explain,
    changeSpeed: changeSpeed,
    pause: pause,
    changeColors: changeColors,
    newPattern: newPattern
  }
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
