import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import explain from '../actions/toggleExplanation';
import changeSpeed from '../actions/changeSpeed';
import pause from '../actions/pause';
import changeColors from '../actions/changeColors';
import colorChoices from '../colors';
import Swatch from './sidebar-components/swatch';
import InitialState from './sidebar-components/initial-states';

class SidebarContainer extends Component {
  constructor () {
    super();
    this.state = { showExplanation: false, showSidebar: true };
    this.toggleExplanation = this.toggleExplanation.bind(this);
    this.changeSpeed = this.changeSpeed.bind(this);
    this.changeColors = this.changeColors.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  toggleExplanation() {
    this.props.pause();
    this.props.explain();
  }
  changeSpeed(newSpeed) {
    this.props.changeSpeed(newSpeed);
  }
  changeColors(newColors) {
    this.props.changeColors(newColors);
    let htmlTag = document.getElementsByTagName("HTML")[0];
    htmlTag.style.backgroundColor = newColors[0];
  }
  toggleSidebar() {
    console.log('entered toggle');
    const colors = this.props.colors;
    let sidebarStylingWidth = {
        backgroundColor: colors[0],
        color: colors[3],
        height: "100%"
      }
    if (this.state.showSidebar) {
      this.setState({showSidebar: !this.state.showSidebar});
      sidebarStylingWidth.width = "0";
    }
    else {
      this.setState({showSidebar: true});
      sidebarStylingWidth.width = "200px";
    }
    return sidebarStylingWidth;
  }
  render() {
    const colors = this.props.colors;
    const sidebarStyling = {
      backgroundColor: colors[0],
      color: colors[3]
    }
    let htmlTag = document.getElementsByTagName("HTML")[0];
    htmlTag.style.backgroundColor = colors[0];
    return (
      <div className="sidebar-container">
        <div className="button" id="show-hide" style={sidebarStyling} onClick={ this.toggleSidebar }>hide</div>
        <div className="sidebar" style={this.toggleSideBar}>
          <h1 className="title"> cellular <br /> automaton </h1>
          <div className="what-is-this button" onClick={this.toggleExplanation}>
            <h3>what is this?</h3>
          </div>
          <h2 className="user-controls">controls</h2>
            <h3 className="options color">color</h3>
              <Swatch colors={colorChoices.green} onClick={()=>{props.changeColors(colorChoices.green)}} />
              <Swatch colors={colorChoices.purple} onClick={()=>{props.changeColors(colorChoices.purple)}} />
              <Swatch colors={colorChoices.southwest} onClick={()=>{props.changeColors(colorChoices.southwest)}} />
            <h3 className="options speed">speed</h3>
              <div className="option button" onClick={ () => this.changeSpeed(1500) }> > </div>
              <div className="option button" onClick={ () => this.changeSpeed(1000) }> >> </div>
              <div className="option button" onClick={ () => this.changeSpeed(600) }> >>> </div>
            <h3 className="options initial-state">initial state</h3>
              <InitialState initial={'little triangle'} />
              <InitialState initial={'big triangle'} />
              <InitialState initial={'hexagon'} />
              <InitialState initial={'border'} />
              <InitialState initial={'face'} />
              <InitialState initial={'triforce'} />
              <InitialState initial={'other'} />
        </div>
      </div>  
    )
  }
}

function mapStateToProps(state) {
  const props = {
    showExplanation: state.showExplanation,
    colors: state.colors
  }
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    explain: explain,
    changeSpeed: changeSpeed,
    pause: pause,
    changeColors: changeColors
  }
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
