// import { createAction } from 'redux-actions';

// Action Types
//Timer
export const START_TIMER = "START_TIMER"
export const STOP_TIMER = "STOP_TIMER"

// Action Creators

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
