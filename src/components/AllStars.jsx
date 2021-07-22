import React from 'react';
import { SpecBadge } from './SpecBadge';
import { roundTwoPlaces } from './utils';

// item.item
export const AllStars = ({ item }) => {
  const {
    points,
    rank,
    regionRank,
    serverRank,
    rankPercent,
  } = item;

  return (
    <div className="spec-data-wrapper">
      <div className="spec-badge">
        <div><SpecBadge key={JSON.stringify(item)} item={item} /></div>
        <div>{points}</div>
      </div>
      <div className="spec-stats">
        <div className="rank-header">
          <div>
            Rank:
            {' '}
            {rank}
          </div>
        </div>
        <div className="rank-data">
          <div>
            Region:
            {' '}
            {regionRank}
          </div>
          <div>
            Server:
            {' '}
            {serverRank}
          </div>
          <div>
            Percentile:
            {' '}
            {roundTwoPlaces(rankPercent)}
          </div>
        </div>
      </div>
    </div>
  );
};
