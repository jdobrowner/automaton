import { combineReducers } from 'redux';
import cycle from './cycle';
import explain from './showExplanation';
import changeSpeed from './speed';
import pause from './pause';

const rootReducer = combineReducers({
  pattern: cycle,
  showExplanation: explain,
  speed: changeSpeed,
  paused: pause
});

export default rootReducer;
