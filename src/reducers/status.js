import{
  START_TIMER,
  STOP_TIMER,
  RESET_TIMER,
  AWAIT_FOR_START,
  SPACE_RESET
} from '../actions'

const initialState = {
  awaiting:false,
  stopped:true,
  focus:false,
  spaceStatus:true,
}

function status(state = initialState,action){
  switch(action.type){
    case AWAIT_FOR_START:
      return {
        ...state,
        awaiting: true,
        focus:true,
        spaceStatus:false
      };
    case START_TIMER:
      return {
        ...state,
        stopped:false,
        awaiting: false,
      };
    case RESET_TIMER:
      return {
        ...state,
        stopped: true,
      };
    case STOP_TIMER:
      return{
        ...state,
        focus:false,
      };
    case SPACE_RESET:
      return{
        ...state,
        spaceStatus:true,
      }
    default:
      return state;
  }
}
export default status
