import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import explain from '../actions/toggleExplanation';
import pause from '../actions/pause';

class Explanation extends Component {
  constructor() {
    super();
    this.hideExplanation = this.hideExplanation.bind(this);
    this.swapExplanationColors = this.swapExplanationColors.bind(this);
  }
  hideExplanation() {
    this.props.pause();
    this.props.explain();
  }
  swapExplanationColors(newColors) {
    let colors = [ ...newColors ];
    // brights
      if (colors[0] === "#353940") {
        colors[3] = "#353940";
        colors[1] = "#DFE0D4";
      }
    // ocean
      if (colors[1] === "#334558") {
        colors[3] = "#334558";
        colors[1] = "#F0F5F9";
      }
    // red
      if (colors[1] === "#671a31") {
        colors[3] = "#671a31";
        colors[1] = "#fbd4d0";
      }
    this.setState({ colors: colors });
  }
  componentWillReceiveProps(nextProps) {
    this.swapExplanationColors(nextProps.colors);
  }
  componentWillMount() {
    this.swapExplanationColors(this.props.colors);
  }
  render() {
    const colors = this.state.colors;
    const explanation = this.props.showExplanation ? "explanation" : "explanation hidden";
    const closeStyling = {backgroundColor: colors[0], border: `5px solid ${colors[0]}`};
    return (
      <div className={explanation} onClick={ this.hideExplanation } style={{backgroundColor: colors[1]}}>
        <div className="button close-explanation" style={closeStyling} onClick={ this.hideExplanation } >
          <svg height="20" width="20">
            <path d="M2 2 L18 18 M2 18 L18 2" stroke={colors[2]} strokeWidth="4"/>
          </ svg>
        </ div>
        <p style={{color: colors[3]}}><span>A cellular automaton is a system of cells</span> that changes with each iteration according to a given ruleset. Each cell has an initial state (e.g. 0 or 1) which is updated based on the states of its neighbors. Cellular automata have been explored since their discovery in the 1940s by Stanislaw Ulam and John von Neumann during their work on the Manhattan Project and more recently by Stephen Wolfram. Originally studied as a model for self-replication, cellular automata have important implications for numerous fields of study, including computability theory, mathematics, physics, and biology.  <br /><br /><br />

          <span>The simplest model of a cellular automaton is a 1D collection</span> of square cells in a row, each of which has a state of either 0 (white) or 1 (black). In this <a style={{color: colors[3]}} target="blank" href="http://mathworld.wolfram.com/ElementaryCellularAutomaton.html">model</a>, each cell has two neighbors– one to its left and one to its right. The cells' states change according to a set of rules. For example, if the current cell state is 0, its left neighbor's state is 0, and its right neighbor's state is 1, change the current cell state to 1. For this most simple model, there exist 256 possible rulesets/combinations, creating a variety of visual patterns. <br /><br /><br />

          <span>Our cellular automaton features a triangular grid</span> in which each cell can have one of four states– expressed visually by color. Every cell has three adjacent neighbors which share a border. Because the grid is finite, cells on the edge appear to lack a neighbor. To solve this issue, edge cells are programmed to wrap around the x- and y- axis to find their neighbors on the other side, creating a <a style={{color: colors[3]}} target="blank" href="https://www.google.com/search?q=torus&espv=2&biw=2024&bih=982&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjWm_3awbjRAhXorFQKHfvXB6QQ_AUIBigB">torus-shaped</a> system of cells. After calulating its next state based on its current state and the state of its three neighbors, each cell updates its color accordingly. <br /><br /><br />

          If you'd like to read more about cellular automata, here are some resources: <br />
            <a style={{color: colors[3]}} target="blank" href="https://en.wikipedia.org/wiki/Cellular_automaton">Wikipedia: Cellular Automaton</a> <br />
            <a style={{color: colors[3]}} target="blank" href="http://natureofcode.com/book/chapter-7-cellular-automata/">Daniel Shiffman: The Nature of Code</a> <br /><br /><br />

            We hope you enjoy the intricate patterns created by stability and randomness. Be sure to play around with different initial states, rulesets, colors, and adding a little randomness. Have fun!
          </p>
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
