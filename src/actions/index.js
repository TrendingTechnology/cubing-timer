// import { createAction } from 'redux-actions';

// Action Types
//Timer
export const START_TIMER = "START_TIMER"
export const STOP_TIMER = "STOP_TIMER"
export const RESET_TIMER = "RESET_TIMER"

//scramble
export const STORE_SCRAMBLE = "STORE_SCRAMBLE"
// Action Creators
//Timer
export function  startTimer(){
  return {
    type: START_TIMER,
    time: new Date().getTime()
  }
}
export function  stopTimer(){
  return {
    type: STOP_TIMER,
    time: new Date().getTime()
  }
}

export function  resetTimer(){
  return {
    type: RESET_TIMER,
  }
}
//scramble
export function storeScramble(scramble){
  return{
    type: STORE_SCRAMBLE,
    scramble:scramble
  }
}
