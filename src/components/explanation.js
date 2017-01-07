import React, { Component } from 'react';
import { connect } from 'react-redux';

class Explanation extends Component {
  constructor() {
    super();
    // this.showExplanation = this.showExplanation.bind(this);
  }
  // showExplanation() {
  //   if (this.props.showExplanation) {
  //     return (
  //       <div className="explanation">
  //         <h2>A cellular automaton is a system of cells that ... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
  //       </div>
  //     )
  //   }
  // }
  render() {
    const explanation = this.props.showExplanation ? "explanation" : "explanation hidden";
    return (
      <div className={explanation}>
        <h2>A cellular automaton is a system of cells that ... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { showExplanation: state.showExplanation };
}

export default connect(mapStateToProps)(Explanation);
