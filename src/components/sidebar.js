import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import explain from '../actions/toggleExplanation';
import changeSpeed from '../actions/changeSpeed';
import pause from '../actions/pause';
import cycle from '../actions/cycle';
import newPattern from '../actions/newPattern';
import changeColors from '../actions/changeColors';
import changeRuleset from '../actions/changeRuleset';
import colorChoices from '../colors';
import Swatch from './sidebar-components/swatch';
import InitialState from './sidebar-components/initial-states';
import Ruleset from './sidebar-components/ruleset';

class SidebarContainer extends Component {
  constructor () {
    super();
    this.state = {
      showExplanation: false,
      showSidebar: true,
      sidebarWidth: "220px",
      sidebarPadding: "5px",
      randomness: false,
      initialState: 'hexagon',
      currentRuleset: 'expander',
      speed: 1000
    };
    this.toggleExplanation = this.toggleExplanation.bind(this);
    this.changeSpeed = this.changeSpeed.bind(this);
    this.changeColors = this.changeColors.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.changeInitialState = this.changeInitialState.bind(this);
    this.changeRuleset = this.changeRuleset.bind(this);
    this.smallPause = this.smallPause.bind(this);
    this.switchRandomness = this.switchRandomness.bind(this);
    this.getRandomnessStyling = this.getRandomnessStyling.bind(this);
    this.getSpeedStyling = this.getSpeedStyling.bind(this);
    this.getSelectedRuleset = this.getSelectedRuleset.bind(this);
    this.getSelectedInitialState = this.getSelectedInitialState.bind(this);
  }
  toggleExplanation() {
    this.props.pause();
    this.props.explain();
    if (this.props.showExplanation) {
      this.props.explain();
      setTimeout(()=>{
        this.props.pause();
      }, this.props.speed-10);
    }

  }
  changeSpeed(newSpeed) {
    this.setState({speed: newSpeed});
    this.props.changeSpeed(newSpeed);
    this.getSpeedStyling(newSpeed);
  }
  changeColors(newColors) {
    if (this.props.showExplanation) {
      this.props.explain();
      this.props.pause();
    }

    this.props.changeColors(newColors);
    const showhideStyling = {
      ...this.state.showhideStyling,
      backgroundColor: newColors[0],
      border: `5px solid ${newColors[0]}`,
    };
    this.setState({ showhideStyling: showhideStyling });
  }
  changeRuleset(ruleset, bool = this.state.randomness) {
    this.setState({currentRuleset: ruleset});
    let newRuleset;
    if (bool) {
      if (ruleset.includes('random')) newRuleset = ruleset;
      else newRuleset = ruleset + ' random';
    }
    else {
      if (ruleset.includes('random')) newRuleset = ruleset.replace(' random', '');
      else newRuleset = ruleset;
    }
    this.props.changeRuleset(newRuleset);
    this.props.cycle(newRuleset);
  }
  switchRandomness(bool) {
    this.setState({ randomness: bool });
    this.changeRuleset(this.props.ruleset, bool);
  }
  smallPause() {
    this.props.pause();
    setTimeout(()=>{
      this.props.pause();
    }, this.props.speed-10);
  }
  toggleSidebar() {
    this.smallPause();
    const showSidebar = !this.state.showSidebar;
    const sidebarWidth = showSidebar ? "220px" : "0";
    const sidebarPadding = showSidebar ? "5px" : "0";

    const colors = this.props.colors;
    const showStyling = {
      backgroundColor: colors[0],
      transition: "0.6s",
      border: `5px solid ${colors[0]}`,
      left: "181px"
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
    this.setState({ sidebarWidth: sidebarWidth, showSidebar: showSidebar, showhideStyling: showhideStyling, sidebarPadding: sidebarPadding });
  }
  changeInitialState(initial) {
    this.setState({initialState: initial});
    this.props.newPattern(initial);
  }
  componentWillMount() {
    const colors = this.props.colors;
    const showStyling = {
      backgroundColor: colors[0],
      transition: "0.6s",
      border: `5px solid ${colors[0]}`,
      left: "181px"
    };
    this.setState({ showhideStyling: showStyling });
  }
  getRandomnessStyling() {
    const randomness = this.state.randomness;
    const colors = this.props.colors;
    const borderStyling = {backgroundColor: colors[0]};
    const selectedStyling = {backgroundColor: colors[2], color: colors[0]};
    let f = {...borderStyling};
    let t = {...borderStyling};
    switch (randomness) {
      case false:
        f = {...selectedStyling};
        break;
      case true:
        t = {...selectedStyling};
        break;
    }
    return (
      [<div className="option button" style={f} onClick={ ()=> this.switchRandomness(false) } ><p>off</p></div>,
      <div className="option button" style={t} onClick={ ()=> this.switchRandomness(true) } ><p>on</p></div>]
      )
  }
  getSpeedStyling() {
  const newSpeed = this.state.speed;
  const colors = this.props.colors;
  const borderStyling = {backgroundColor: colors[0]};
  const selectedStyling = {backgroundColor: colors[2], color: colors[0]};
  let slow = {...borderStyling};
  let medium = {...borderStyling};
  let fast = {...borderStyling};
  switch (newSpeed) {
    case 600:
      fast = {...selectedStyling};
      break;
    case 1000:
      medium = {...selectedStyling};
      break;
    case 1500:
      slow = {...selectedStyling};
      break;
  }
  return (
    [<div className="option button" style={slow} onClick={ () => this.changeSpeed(1500) }> <p>slow</p> </div>,
    <div className="option button" style={medium} onClick={ () => this.changeSpeed(1000) }> <p>medium</p> </div>,
    <div className="option button" style={fast} onClick={ () => this.changeSpeed(600) }> <p>fast</p> </div>]
    )
}
getSelectedRuleset(title) {
  if (this.state.currentRuleset === title) return true;
  else return false;
}
getSelectedInitialState(title) {
  if (this.state.initialState === title) return true;
  else return false;
}
  render() {
    const colors = this.props.colors;
    const sidebarStyling = {
      backgroundColor: colors[1],
      color: colors[3],
      width: this.state.sidebarWidth,
      paddingLeft: this.state.sidebarPadding
    };
    const arrowFill = colors[2];
    const drawPaths = {
      littleTriangle: ["m12.833339,14.833343l9.499935,0.042901l-4.405772,7.123696l-5.094163,-7.166597z"],
      // "m12.4575,23.540625 l5.714282,-10 l5.714282,10 l-11.428565,0z"
      nestedTriangle: ["m4.757528,28.443932l12.833297,-21.624943l12.833297,21.624943l-25.666593,0l-0.000001,0z", "m14.424167,22.77728l2.833326,-4.95832l2.833325,4.95832l-5.666651,0z", "m10.090847,25.44394l7.333312,-12.958299l7.333313,12.958299l-14.666625,0z"],
      hexagon: ["m10.195628,18.682051l3.160713,-6.624997l8.428568,0l3.160712,6.624997l-3.160712,6.624997l-8.428568,0l-3.160713,-6.624997z"],
      border: ["m2.77242,2.77242l29.44024,-0.01492l-0.06267,29.45516l-29.39249,0l0.01492,-29.44024z"],
      face: ["m19.76797,13.06663l0.89431,-1.79473l2.38485,0l0.89432,1.79473l-0.89432,1.79474l-2.38485,0l-0.89431,-1.79474z", "m9.93464,13.06663l0.89431,-1.79473l2.38486,0l0.89432,1.79473l-0.89432,1.79474l-2.38486,0l-0.89431,-1.79474z", "m9.25006,21.62497l15.49978,-0.00012"],
      triforce: ["m4.75753,28.38143l12.83329,-21.62494l12.8333,21.62494l-25.66659,0l0,0z", "m11.875,18.02084l11.56243,0.05338l-5.36229,8.86322l-6.20014,-8.9166z"]
    };
    // const borderStyling = {backgroundColor: colors[0], border: `1px solid ${colors[3]}`};
    // const selectedStyling = {backgroundColor: colors[2], border: `1px solid ${colors[3]}`};
    let htmlTag = document.getElementsByTagName("HTML")[0];
    htmlTag.style.backgroundColor = colors[0];
    return (
      <div className="sidebar-container">

        <div className="button" id="show-hide" style={ this.state.showhideStyling } onClick={ this.toggleSidebar }>
          <svg height="20" width="20">
            <path d="M18 2 L2 10 L18 18 Z" fill={arrowFill} />
          </svg>
        </div>

        <div className="sidebar" style={sidebarStyling}>
          <h1 className="title"> cellular <br /> automaton </h1>
            <h3 className="options initial-state">initial state</h3>
              <InitialState isSelected={this.getSelectedInitialState} colors={colors} drawPath={drawPaths.littleTriangle} title={'little triangle'} onStateClick={ this.changeInitialState }/>
              <InitialState isSelected={this.getSelectedInitialState} colors={colors} drawPath={drawPaths.nestedTriangle} title={'nested triangle'} onStateClick={ this.changeInitialState } />
              <InitialState isSelected={this.getSelectedInitialState} colors={colors} drawPath={drawPaths.hexagon} title={'hexagon'} onStateClick={ this.changeInitialState } /> <br />
              <InitialState isSelected={this.getSelectedInitialState} colors={colors} drawPath={drawPaths.border} title={'border'} onStateClick={ this.changeInitialState } />
              <InitialState isSelected={this.getSelectedInitialState} colors={colors} drawPath={drawPaths.face} title={'face'} onStateClick={ this.changeInitialState } />
              <InitialState isSelected={this.getSelectedInitialState} colors={colors} drawPath={drawPaths.triforce} title={'triforce'} onStateClick={ this.changeInitialState } />
            <h3 className="options">ruleset</h3>
              <Ruleset isSelected={this.getSelectedRuleset} colors={colors} title={"expander"} onRulesetClick={ this.changeRuleset } />
              <Ruleset isSelected={this.getSelectedRuleset} colors={colors} title={"birds"} onRulesetClick={ this.changeRuleset } /> <br />
              <Ruleset isSelected={this.getSelectedRuleset} colors={colors} title={"harmony"} onRulesetClick={ this.changeRuleset } />
              <Ruleset isSelected={this.getSelectedRuleset} colors={colors} title={"billow"} onRulesetClick={ this.changeRuleset } /> <br />
              <Ruleset isSelected={this.getSelectedRuleset} colors={colors} title={"mangler"} onRulesetClick={ this.changeRuleset } />
              <Ruleset isSelected={this.getSelectedRuleset} colors={colors} title={"swirls"} onRulesetClick={ this.changeRuleset } /> <br />
              <Ruleset isSelected={this.getSelectedRuleset} colors={colors} title={"horizons"} onRulesetClick={ this.changeRuleset } />
            <h3 className="options random">randomness</h3>
              {this.getRandomnessStyling()}
            <h3 className="options speed">speed</h3>
              {this.getSpeedStyling()}
            <h3 className="options color">color</h3>
              <Swatch colors={colorChoices.green} currentColors={colors} onColorClick={this.changeColors} />
              <Swatch colors={colorChoices.purple} currentColors={colors} onColorClick={this.changeColors} />
              <Swatch colors={colorChoices.southwest} currentColors={colors} onColorClick={this.changeColors} /> <br />
              <Swatch colors={colorChoices.brights} currentColors={colors} onColorClick={this.changeColors} />
              <Swatch colors={colorChoices.red} currentColors={colors} onColorClick={this.changeColors} />
              <Swatch colors={colorChoices.ocean} currentColors={colors} onColorClick={this.changeColors} />
            <div className="button what-is-this" onClick={ this.toggleExplanation } >
              <h2>what is this?</h2>
            </div>
        </div>
      </div>
    )
  }
}

 <h2 className="user-controls">user controls</h2>

function mapStateToProps(state) {
  const props = {
    showExplanation: state.showExplanation,
    colors: state.colors,
    ruleset: state.ruleset,
    speed: state.speed,
    paused: state.paused
  }
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    explain: explain,
    cycle: cycle,
    pause: pause,
    changeSpeed: changeSpeed,
    changeRuleset: changeRuleset,
    changeColors: changeColors,
    newPattern: newPattern
  }
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
