import { combineReducers } from 'redux';
import cycle from './cycleReducer';

const rootReducer = combineReducers({
  pattern: cycle
});

export default rootReducer;
