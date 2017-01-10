import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import explain from '../actions/toggleExplanation';
import pause from '../actions/pause';

class Explanation extends Component {
  constructor() {
    super();
    this.hideExplaination = this.hideExplaination.bind(this);
  }
  hideExplaination() {
    this.props.pause();
    this.props.explain();

  }
  render() {
    const explanation = this.props.showExplanation ? "explanation" : "explanation hidden";
    return (
      <div className={explanation} onClick={ this.hideExplaination }>
        <h3 className="explanation-text">A cellular automaton is a system of cells that change with each iteration according to a given ruleset. Each cell has an initial state (e.g. 0 or 1) which is updated based on the states of its neighbors. Cellular automaton have been explored since their discovery in the 1940s by Stanislaw Ulam and John von Neumann during their work on the Manhattan Project and more recently by Stephen Wolfram. Originally studied as a model for self-replication, cellular automata have important implications for numerous fields of study, including computability theory, mathematics, physics, and biology.  <br /><br />

          The simplest model of a cellular automaton is a 2D collection of square cells in a row, each of which has a state of either 0/white or 1/black. In this model, each cell has two neighbors– one to its left and one to its right. The cells' states change according to a set of rules. For example, if the current cell state is 0, its left neighbor is 0, and its right neighbor's is 1, change the current cell state to 1. For this most simple model, there exist 256 possible rulesets/combinations, creating a variety of visual patterns. <br /><br />

          Our cellular automaton features a triangular grid in which each cell can have one of four states– expressed visually as four unique colors. Every cell has three adjacent neighbors which share a border. Because the grid is finite, cells on the edge appear to lack one neighbor. These edge cells are programmed to wrap around the x- and y- axis to find their neighbors on the other side, creating a torus-shaped system of cells. After calulating its next state based on its current state and the state of its three neighbors, each cell updates its color accordingly. <br /><br />

          We hope you enjoy the patterns of stability and randomness that create intricate visual displays. Be sure to play around with initial states, rulesets, colors, and adding a little randomness. Have fun! <br /><br />
          </h3>

          <div className="explanation-images">
            <div>
              <img src="./Torus.png" />
            </div>
            <div>
              <div id="cell-1">0</div>
              <div id="cell-2">1</div>
              <div id="cell-3">1</div>
              <div id="cell-3-new">0</div>
            </div>
          </div>

          <h3>If you'd like to read more about cellular automata, here are some resources: <br />
            <a href="https://en.wikipedia.org/wiki/Cellular_automaton" target="_blank">Wikipedia: Cellular Automaton</a> <br />
            <a href="http://mathworld.wolfram.com/ElementaryCellularAutomaton.html" target="_blank">Stephen Wolfram: Elementary Cellular Automataton</a> <br />
            <a href="http://natureofcode.com/book/chapter-7-cellular-automata/" target="_blank">Daniel Shiffman: The Nature of Code</a>
          </h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    showExplanation: state.showExplanation,
    colors: state.colors
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    explain: explain,
    pause: pause
  }
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Explanation);
