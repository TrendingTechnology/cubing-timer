import{ START_TIMER, STOP_TIMER} from '../actions'

const initialState = {
  initTime: 0,
  endTime: 0,
  stopped: undefined,
}

function timer(state = [],action){
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
        stopped:true
      };
    default:
      return state;
  }
}
export default timer
