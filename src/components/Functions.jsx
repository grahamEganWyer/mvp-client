const capitalise = (str) => {
  return str[0].toUpperCase() + str.substring(1)
}

const roundTwoPlaces = (num) => {
  return Math.round(num * 100) / 100
}

const roundNearest = (num) => {
  return Math.round(num)
}

const millisToMinutesAndSeconds = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

export {
  capitalise,
  roundTwoPlaces,
  roundNearest,
  millisToMinutesAndSeconds
}