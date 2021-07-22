import React from 'react';

export const SpecBadge = ({ item }) => {
  const {
    spec,
  } = item;

  const specImg = {
    Warden: 'https://assets.rpglogs.com/img/warcraft/icons/Druid-Warden.jpg',
    Guardian: 'https://assets.rpglogs.com/img/warcraft/icons/Druid-Guardian.jpg',
    Feral: 'https://assets.rpglogs.com/img/warcraft/icons/Druid-Feral.jpg',
    Restoration: 'https://assets.rpglogs.com/img/warcraft/icons/Druid-Restoration.jpg',
    Balance: 'https://assets.rpglogs.com/img/warcraft/icons/Druid-Balance.jpg',
    Beastmastery: 'https://assets.rpglogs.com/img/warcraft/icons/Hunter-BeastMastery.jpg',
    Marksmanship: 'https://assets.rpglogs.com/img/warcraft/icons/Hunter-Marksmanship.jpg',
    Survival: 'https://assets.rpglogs.com/img/warcraft/icons/Hunter-Survival.jpg',
    Arcane: 'https://assets.rpglogs.com/img/warcraft/icons/Mage-Arcane.jpg',
    Fire: 'https://assets.rpglogs.com/img/warcraft/icons/Mage-Fire.jpg',
    Frost: 'https://assets.rpglogs.com/img/warcraft/icons/Mage-Frost.jpg',
    Protection: 'https://assets.rpglogs.com/img/warcraft/icons/Paladin-Protection.jpg',
    Retribution: 'https://assets.rpglogs.com/img/warcraft/icons/Paladin-Retribution.jpg',
    Discipline: 'https://assets.rpglogs.com/img/warcraft/icons/Priest-Discipline.jpg',
    Holy: 'https://assets.rpglogs.com/img/warcraft/icons/Priest-Holy.jpg',
    Shadow: 'https://assets.rpglogs.com/img/warcraft/icons/Priest-Shadow.jpg',
    Healing: 'https://assets.rpglogs.com/img/warcraft/icons/Priest-Healing.jpg',
    Assassination: 'https://assets.rpglogs.com/img/warcraft/icons/Rogue-Assassination.jpg',
    Combat: 'https://assets.rpglogs.com/img/warcraft/icons/Rogue-Combat.jpg',
    Subtlety: 'https://assets.rpglogs.com/img/warcraft/icons/Rogue-Subtlety.jpg',
    Elemental: 'https://assets.rpglogs.com/img/warcraft/icons/Shaman-Elemental.jpg',
    Enhancement: 'https://assets.rpglogs.com/img/warcraft/icons/Shaman-Enhancement.jpg',
    Affliction: 'https://assets.rpglogs.com/img/warcraft/icons/Warlock-Affliction.jpg',
    Demonology: 'https://assets.rpglogs.com/img/warcraft/icons/Warlock-Demonology.jpg',
    Destruction: 'https://assets.rpglogs.com/img/warcraft/icons/Warlock-Destruction.jpg',
    Arms: 'https://assets.rpglogs.com/img/warcraft/icons/Warrior-Arms.jpg',
    Fury: 'https://assets.rpglogs.com/img/warcraft/icons/Warrior-Fury.jpg',
    Champion: 'https://assets.rpglogs.com/img/warcraft/icons/Warrior-Champion.jpg',
    Melee: 'https://assets.rpglogs.com/img/warcraft/icons/Warrior-Melee.jpg',
  };

  return (
    <div className="spec-badge-img">
      <img src={specImg[spec]} alt={spec} />
    </div>
  );
};
