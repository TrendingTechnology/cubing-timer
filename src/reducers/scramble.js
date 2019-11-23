import{ STORE_SCRAMBLE } from '../actions'

const initialState = {
  scramble:null
}

function scramble(state = initialState,action){
  switch(action.type){
  case STORE_SCRAMBLE:
    return {
      ...state,
      scramble: action.scramble
    };
  default:
    return state;
  }
}
export default scramble
