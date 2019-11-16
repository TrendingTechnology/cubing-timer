import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';

import timer from './timer';
import scramble from './scramble'

export default combineReducers({
  timer,
  scramble,
});
