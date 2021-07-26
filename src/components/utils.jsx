/* eslint-disable */
const capitalise = (str) => str[0].toUpperCase() + str.substring(1);

const roundTwoPlaces = (num) => Math.round(num * 100) / 100;

const roundNearest = (num) => Math.round(num);

const millisToMinutesAndSeconds = (millis) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const copperToGold = (price) => {
   let copper = price % 100;
   price = (price - copper)/100;
   let silver = price % 100;
   let gold = (price - silver)/100;
   return `${gold}g ${silver}s ${copper}c`
}

const rarityTextColor = (rarity) => {
  const rarityColors = {
    common: 'white',
    uncommon: 'green',
    rare: 'blue',
    epic: 'purple',
    legendary: 'gold',
  }
  return rarityColors.rarity
}

export {
  capitalise,
  roundTwoPlaces,
  roundNearest,
  millisToMinutesAndSeconds,
  copperToGold,
  rarityTextColor,
};
