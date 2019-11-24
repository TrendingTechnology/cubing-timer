import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';

import timer from './timer';
import scramble from './scramble'
import status from './status'

export default combineReducers({
  timer,
  scramble,
  status
});
