import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import explain from '../actions/toggleExplanation';

class Sidebar extends Component {
  constructor () {
    super();
    this.state = { showExplanation: false };
    this.toggleExplanation = this.toggleExplanation.bind(this);
  }
  toggleExplanation() {
    const showExplanation = !this.props.showExplanation;
    console.log(showExplanation);
    this.props.explain();
  }
  render() {
    return (
      <div className="sidebar">
        <div className="button" id="show-hide">hide sidebar</div>
        <h1 className="title"> cellular <br /> automaton </h1>
        <div className="what-is-this button" onClick={this.toggleExplanation}>
          <h3>what is this?</h3>
        </div>
        <h2 className="user-controls">controls</h2>
          <h3 className="options color">color</h3>
            <div className="option button green">
              <div>
                <div className="color-sample" id="green0"></div>
                <div className="color-sample" id="green1"></div>
              </div>
              <div>  
                <div className="color-sample" id="green2"></div>
                <div className="color-sample" id="green3"></div>
              </div>
            </div>
            <div className="option button purple">
               <div>
                <div className="color-sample" id="purple0"></div>
                <div className="color-sample" id="purple1"></div>
              </div>
              <div>  
                <div className="color-sample" id="purple2"></div>
                <div className="color-sample" id="purple3"></div>
              </div>
            </div>  
            <div className="option button southwest">
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
            <div className="option button">slow medium fast</div>
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
  return { showExplanation: state.showExplanation };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ explain: explain }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
