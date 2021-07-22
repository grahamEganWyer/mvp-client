const capitalise = (str) => str[0].toUpperCase() + str.substring(1);

const roundTwoPlaces = (num) => Math.round(num * 100) / 100;

const roundNearest = (num) => Math.round(num);

const millisToMinutesAndSeconds = (millis) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export {
  capitalise,
  roundTwoPlaces,
  roundNearest,
  millisToMinutesAndSeconds,
};
