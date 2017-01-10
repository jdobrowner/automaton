import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import pause from '../actions/pause';
import explain from '../actions/toggleExplanation';
import GridContainer from './grid-container';
import SidebarContainer from './sidebar';
import Explanation from './explanation';

class App extends Component {
  constructor() {
    super();
    this.hideExplaination = this.hideExplaination.bind(this);
  }
  hideExplaination() {
    if (this.props.showExplanation) {
      this.props.explain();
      this.props.pause();
    }
  }
  render() {
    return (
      <div className="app" onClick={ this.hideExplaination }>
        <SidebarContainer />
        <GridContainer />
        <Explanation />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const props = {
    showExplanation: state.showExplanation
  }
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    pause: pause,
    explain: explain
  }
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
