import { combineReducers } from 'redux';
import cycle from './cycle';
import explain from './showExplanation';
import speed from './speed';
import pause from './pause';
import colors from './changeColors';
import patternSwitch from './patternSwitch';
import ruleset from './changeRuleset';

const rootReducer = combineReducers({
  pattern: cycle,
  patternSwitch: patternSwitch,
  showExplanation: explain,
  speed: speed,
  paused: pause,
  colors: colors,
  ruleset: ruleset
});

export default rootReducer;
