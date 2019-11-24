import{ STORE_SCRAMBLE,STORE_NEW_SCRAMBLE } from '../actions'

const initialState = {
  previousScramble:null,
  preGeneratedScramble:null
}

function scramble(state = initialState,action){
  switch(action.type){
  case STORE_SCRAMBLE:
    return {
      ...state,
      previousScramble: action.payload,
      preGeneratedScramble: action.payload
    };
  case STORE_NEW_SCRAMBLE:
    return {
      ...state,
      previousScramble:state.preGeneratedScramble,
      preGeneratedScramble: action.payload
    };
  default:
    return state;
  }
}
export default scramble
