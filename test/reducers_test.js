import { expect } from './test_helper';
import { CYCLE, EXPLAIN, PAUSE, SPEED, COLORS, PATTERN, RULESET } from '../src/actions/types';
import changeColors from '../src/reducers/changeColors';
import changeRuleset from '../src/reducers/changeRuleset';
import cycle from '../src/reducers/cycle';
import patternSwitch from '../src/reducers/patternSwitch';
import pause from '../src/reducers/pause';
import showExplanation from '../src/reducers/showExplanation';
import speed from '../src/reducers/speed';

import colors from '../src/colors';

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
