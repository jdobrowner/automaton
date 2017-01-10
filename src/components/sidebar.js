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
    this.state = { showExplanation: false, showSidebar: true, sidebarWidth: "220px", sidebarPadding: "40px 10px", };
    this.toggleExplanation = this.toggleExplanation.bind(this);
    this.changeSpeed = this.changeSpeed.bind(this);
    this.changeColors = this.changeColors.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.changeInitialState = this.changeInitialState.bind(this);
    this.changeRuleset = this.changeRuleset.bind(this);
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
    setTimeout(()=>{ this.props.pause(); }, 1000);

    this.props.changeColors(newColors);

    const showhideStyling = {
      ...this.state.showhideStyling,
      backgroundColor: newColors[0],
      border: `5px solid ${newColors[0]}`,
    };
    this.setState({ showhideStyling: showhideStyling });
  }
  changeRuleset(ruleset) {
    this.props.pause();
    setTimeout(()=>{ this.props.pause(); }, 1000);

    this.props.changeRuleset(ruleset);
    this.props.cycle(ruleset);
  }
  toggleSidebar() {
    this.props.pause();
    setTimeout(()=>{ this.props.pause(); }, 800);

    const showSidebar = !this.state.showSidebar;
    const sidebarWidth = showSidebar ? "220px" : "0";
    const sidebarPadding = showSidebar ? "40px 10px" : "0";

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
      left: "181px"
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
              <Swatch colors={colorChoices.southwest} onColorClick={this.changeColors} /> <br />
              <Swatch colors={colorChoices.brights} onColorClick={this.changeColors} />
              <Swatch colors={colorChoices.red} onColorClick={this.changeColors} />
              <Swatch colors={colorChoices.ocean} onColorClick={this.changeColors} />
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
            <h3 className="options">ruleset</h3>
              <Ruleset title={"expander"} onRulesetClick={ this.changeRuleset } />
              <Ruleset title={"cloner"} onRulesetClick={ this.changeRuleset } />
              <Ruleset title={"floater"} onRulesetClick={ this.changeRuleset } />
              <Ruleset title={"mangler"} onRulesetClick={ this.changeRuleset } />
              <Ruleset title={"mangler high R"} onRulesetClick={ this.changeRuleset } />
              <Ruleset title={"expander medium R"} onRulesetClick={ this.changeRuleset } />
              <Ruleset title={"birds"} onRulesetClick={ this.changeRuleset } />
              <Ruleset title={"horizons mediun R"} onRulesetClick={ this.changeRuleset } />
              <Ruleset title={"birds v2"} onRulesetClick={ this.changeRuleset } />
              <Ruleset title={"rain"} onRulesetClick={ this.changeRuleset } />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const props = {
    showExplanation: state.showExplanation,
    colors: state.colors,
    ruleset: state.ruleset
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
