import { combineReducers } from 'redux';
import cycle from './cycle';
import explain from './showExplanation';
import speed from './speed';
import pause from './pause';
import colors from './changeColors';
import patternSwitch from './patternSwitch';

const rootReducer = combineReducers({
  pattern: cycle,
  patternSwitch: patternSwitch,
  showExplanation: explain,
  speed: speed,
  paused: pause,
  colors: colors
});

export default rootReducer;
