import { combineReducers } from 'redux';
import cycle from './cycleReducer';
import explain from './showExplanation';

const rootReducer = combineReducers({
  pattern: cycle,
  showExplanation: explain
});

export default rootReducer;
