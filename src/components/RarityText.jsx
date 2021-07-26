import React from 'react';

export const RarityText = ({ item }) => {
  const { encounter } = item;
  const { name } = encounter;

  const encounterImg = {
    'High King Maulgar': 'https://assets.rpglogs.com/img/warcraft/bosses/649-icon.jpg',
    'Gruul the Dragonkiller': 'https://assets.rpglogs.com/img/warcraft/bosses/650-icon.jpg',
    Magtheridon: 'https://assets.rpglogs.com/img/warcraft/bosses/651-icon.jpg',
  };

  return (
    <div className="encounter-badge-img">
      <img src={encounterImg[name]} alt={name} width="56" height="56" />
    </div>
  );
};