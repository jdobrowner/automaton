import { combineReducers } from 'redux';
import cycleReducer from './cycleReducer';

const rootReducer = combineReducers({
  grid: cycleReducer
});

export default rootReducer;
