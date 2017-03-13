import { expect } from './test_helper';
import { CYCLE, EXPLAIN, PAUSE, SPEED, COLORS, PATTERN, RULESET } from '../src/actions/types';
import changeColors from '../src/reducers/changeColors';
import changeRuleset from '../src/reducers/changeRuleset';
import cycle from '../src/reducers/cycle';
import pause from '../src/reducers/pause';
import showExplanation from '../src/reducers/showExplanation';
import speed from '../src/reducers/speed';

// for the changeColors reducer
import colors from '../src/colors';

// for the cycle reducer
import initialStates from '../src/reducers/initialStates/index';
import automate from '../src/reducers/rulesets/automate';
import rules from '../src/reducers/rulesets/rules';


describe('Colors Reducer', () => {
  const action = { type: COLORS, colors: colors.ocean };
  it('sets the default color theme to southwest', () => {
    expect(changeColors(undefined, {})).to.eql(colors.southwest);
  });
  it('changes the color theme', () => {
    expect(changeColors(colors.southwest, action)).to.eql(colors.ocean);
  });
});


describe('Ruleset Reducer', () => {
  const action = { type: RULESET, ruleset: 'harmony' };
  it('sets the default ruleset to "expander"', () => {
    expect(changeRuleset(undefined, {})).to.eql('expander');
  });
  it('changes the ruleset', () => {
    expect(changeRuleset('expander', action)).to.eql('harmony');
  });
});


describe('Cycle Reducer', () => {
  const cycleAction = { type: CYCLE, ruleset: 'harmony' };
  const patternAction = { type: PATTERN, pattern: 'little triangle' };
  const rulesetAction = { type: RULESET, ruleset: 'harmony' };
  it('sets the default pattern to be a hexagon', () => {
    expect(cycle(undefined, {})).to.eql(initialStates.hexagon());
  });
  it('cycles with the correct ruleset and pattern', () => {
    expect(cycle(initialStates.oneTriangle(), cycleAction))
      .to.eql(automate(initialStates.oneTriangle(), rules.harmony));
  });
  it('updates the pattern', () => {
    expect(cycle(initialStates.hexagon(), patternAction)).to.eql(initialStates.oneTriangle());
  });
  it('uses the correct ruleset', () => {
    expect(cycle(initialStates.oneTriangle(), rulesetAction))
      .to.eql(automate(initialStates.oneTriangle(), rules.harmony));
  });
});


describe('Show Explaination Reducer', () => {
  const action = { type: EXPLAIN };

  it('sets the default show explanation state to false', () => {
    expect(showExplanation(undefined, {})).to.eql(false);
  });

  it('switches the explanation state from false to true', () => {
    expect(showExplanation(false, action)).to.eql(true);
  });

  it('switches the explanation state from true to false', () => {
    expect(showExplanation(true, action)).to.eql(false);
  });
});


describe('Pause Reducer', () => {
  const action = { type: PAUSE };

  it('sets the default pause state to false', () => {
    expect(pause(undefined, {})).to.eql(false);
  });

  it('switches the pause state from false to true', () => {
    expect(pause(false, action)).to.eql(true);
  });

  it('switches the pause state from true to false', () => {
    expect(pause(true, action)).to.eql(false);
  });
});


describe('Speed Reducer', () => {
  const action = { type: SPEED, speed: 600 };

  it('sets the default speed state to 1000', () => {
    expect(speed(undefined, {})).to.eql(1000);
  });

  it('changes the speed state', () => {
    expect(speed(1000, action)).to.eql(600);
  });
});
