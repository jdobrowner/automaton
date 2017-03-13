import { expect } from './test_helper';
import { CYCLE, EXPLAIN, PAUSE, SPEED, COLORS, PATTERN, RULESET } from '../src/actions/types';
import changeColors from '../src/actions/changeColors';
import changeRuleset from '../src/actions/changeRuleset';
import changeSpeed from '../src/actions/changeSpeed';
import cycle from '../src/actions/cycle';
import newPattern from '../src/actions/newPattern';
import pause from '../src/actions/pause';
import toggleExplanation from '../src/actions/toggleExplanation';


describe('Change Colors Action', () => {
  const action = { type: COLORS, colors: ['a', 'b', 'c', 'd'] };
  it('creates the colors action object', () => {
    expect(changeColors(['a', 'b', 'c', 'd'])).to.eql(action);
  });
});

describe('Change Ruleset Action', () => {
  const action = { type: RULESET, ruleset: 'birds' };
  it('creates the ruleset action object', () => {
    expect(changeRuleset('birds')).to.eql(action);
  });
});

describe('Change Speed Action', () => {
  const action = { type: SPEED, speed: 600 };
  it('creates the speed action object', () => {
    expect(changeSpeed(600)).to.eql(action);
  });
});

describe('Cycle Action', () => {
  const action = { type: CYCLE, ruleset: 'birds' };
  it('creates the cycle action object', () => {
    expect(cycle('birds')).to.eql(action);
  });
});

describe('New Pattern Action', () => {
  const action = { type: PATTERN, pattern: [1,2,3,4] };
  it('creates the newPattern action object', () => {
    expect(newPattern([1,2,3,4])).to.eql(action);
  });
});

describe('Pause Action', () => {
  const action = { type: PAUSE };
  it('creates the pause action object', () => {
    expect(pause()).to.eql(action);
  });
});

describe('Toggle Explanation Action', () => {
  const action = { type: EXPLAIN };
  it('creates the toggle explanation action object', () => {
    expect(toggleExplanation()).to.eql(action);
  });
});
