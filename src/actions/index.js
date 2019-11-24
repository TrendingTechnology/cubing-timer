// import { createAction } from 'redux-actions';

// Action Types
//Timer
export const START_TIMER = "START_TIMER"
export const STOP_TIMER = "STOP_TIMER"
export const RESET_TIMER = "RESET_TIMER"

//Status
export const AWAIT_FOR_START = "AWAIT_FOR_START"
export const SPACE_RESET = "SPACE_RESET"
//scramble
export const STORE_SCRAMBLE = "STORE_SCRAMBLE"
export const STORE_NEW_SCRAMBLE = "STORE_NEW_SCRAMBLE"
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

//Status
export function awaitForStart(){
  return {
    type: AWAIT_FOR_START
  }
}

export function spaceReset(){
  return {
    type:SPACE_RESET
  }
}

//scramble
export function storeScramble(scramble){
  return{
    type: STORE_SCRAMBLE,
    payload:scramble
  }
}

export function storeNewScramble(scramble){
  return{
    type: STORE_NEW_SCRAMBLE,
    payload:scramble
  }
}
