export function getElaspedTime(start,end){
  var elaspedTime = end - start
  console.log(elaspedTime)
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
