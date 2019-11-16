import {Store, set , get} from 'idb-keyval';
import store from '../store';
import {scramble} from './scrambleGenerator'
const sessions = new Store('Solves','Sessions');

export function getElaspedTime(start,end){
  var elaspedTime = end - start
  return msConvert(elaspedTime)
}

export function msConvert(unConvertTime) {
  var time = new Date(unConvertTime);
  var ms = time.getMilliseconds(), sec = time.getSeconds(), min = time.getMinutes(), hr = time.getHours();

  var timeString = sec + "." + ms;
  if(hr !== 10){
    timeString = hr-10 + ":" + min + ":";
  }else if(min !== 0){
    timeString = min + ":"
  }
  return timeString
}

export function storingSolve(){
  var time = store.getState().timer.endTime-store.getState().timer.initTime
  var newRecord = [[[0,time],"Comments",scramble,Date.now()]]
  get('Sessions_01',sessions).then(val => {
    var joined = (val)?val.concat(newRecord):newRecord;
    set('Sessions_01',joined,sessions);
  });
}
export function getSolves(){
  return get('Sessions_01',sessions)
}
