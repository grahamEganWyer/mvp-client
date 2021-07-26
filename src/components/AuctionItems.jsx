import React from 'react';
import { copperToGold, rarityTextColor } from './utils';

export const AuctionItems = ({ items }) => (

  <div className="auction-item-wrapper">
    {items.map(
      (item) => (
        <div className="auction-item">
          <div>{item.name}</div>
          <div>
            <img src={item.icon} alt={item.name} width="56" height="56" />
          </div>
          <div>
            Sell Price:
            {' '}
            {copperToGold(item.sellPrice)}
          </div>
          <div>
            {item.itemLevel}
          </div>
          <div style={{ color: rarityTextColor({item.tag}) }}>
            {item.tags}
          </div>
          <div>
            Market Price:
            {' '}
            {copperToGold(item.stats.current.marketValue)}
          </div>
        </div>
      ),
    )}
  </div>
);
