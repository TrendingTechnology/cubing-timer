import{ START_TIMER, STOP_TIMER,RESET_TIMER} from '../actions'

const initialState = {
  initTime: null,
  endTime: null,
  stopped: true,
}

function timer(state = initialState, action){
  switch(action.type){
    case START_TIMER:
      return {
        ...state,
        initTime: action.time,
        stopped:false,
        endTime: undefined
      };
    case STOP_TIMER:
      return {
        ...state,
        endTime: action.time,
      };
    case RESET_TIMER:
      return {
        ...state,
        stopped: true,
      };
    default:
      return state;
  }
}
export default timer
