import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import explain from '../actions/toggleExplanation';
import changeSpeed from '../actions/changeSpeed';
import pause from '../actions/pause';
import changeColors from '../actions/changeColors';
import colorChoices from '../colors';

class Sidebar extends Component {
  constructor () {
    super();
    this.state = { showExplanation: false };
    this.toggleExplanation = this.toggleExplanation.bind(this);
    this.changeSpeed = this.changeSpeed.bind(this);
    this.changeColors = this.changeColors.bind(this);
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
  render() {
    const colors = this.props.colors;
    const sidebarStyling = {
      backgroundColor: colors[0],
      color: colors[3]
    }
    let htmlTag = document.getElementsByTagName("HTML")[0];
    htmlTag.style.backgroundColor = colors[0];
    return (
      <div className="sidebar" style={sidebarStyling}>
        <div className="button" id="show-hide">hide sidebar</div>
        <h1 className="title"> cellular <br /> automaton </h1>
        <div className="what-is-this button" onClick={this.toggleExplanation}>
          <h3>what is this?</h3>
        </div>
        <h2 className="user-controls">controls</h2>
          <h3 className="options color">color</h3>
            <div className="option button green"
              onClick={()=>{this.changeColors(colorChoices.green)}}>
              <div>
                <div className="color-sample" id="green0"></div>
                <div className="color-sample" id="green1"></div>
              </div>
              <div>
                <div className="color-sample" id="green2"></div>
                <div className="color-sample" id="green3"></div>
              </div>
            </div>
            <div className="option button purple"
              onClick={()=>{this.changeColors(colorChoices.purple)}}>
               <div>
                <div className="color-sample" id="purple0"></div>
                <div className="color-sample" id="purple1"></div>
              </div>
              <div>
                <div className="color-sample" id="purple2"></div>
                <div className="color-sample" id="purple3"></div>
              </div>

            </div>
            <div className="option button southwest"
              onClick={()=>{this.changeColors(colorChoices.southwest)}}>
              <div>
                <div className="color-sample" id="southwest0"></div>
                <div className="color-sample" id="southwest1"></div>
              </div>
              <div>
                <div className="color-sample" id="southwest2"></div>
                <div className="color-sample" id="southwest3"></div>
              </div>
            </div>

          <h3 className="options speed">speed</h3>
            <div className="option button">
              <div onClick={ () => this.changeSpeed(1500) }>slow</div>
              <div onClick={ () => this.changeSpeed(1000) }>medium</div>
              <div onClick={ () => this.changeSpeed(600) }>fast</div>
            </div>
          <h3 className="options initial-state">initial state</h3>
            <div className="option button">*</div>
            <div className="option button">V</div>
            <div className="option button">/</div>
            <div className="option button">|</div>
            <div className="option button">o</div>
            <div className="option button">$</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
