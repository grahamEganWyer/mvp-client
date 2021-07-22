import React from 'react'
import { SpecBadge } from './SpecBadge'
import { roundTwoPlaces } from './Functions'

// item.item
export const AllStars = ({ item }) => {

  const {
    partition,
    spec,
    points,
    possiblePoints,
    rank,
    regionRank,
    serverRank,
    rankPercent,
    total
  } = item

  return (
    <div className="spec-data-wrapper">
      <div className="spec-badge">
        <div>{<SpecBadge key={JSON.stringify(item)} item={item}/>}</div>
        <div>{points}</div>
      </div>
      <div className="spec-stats">
        <div className="rank-header">
          <div>Rank: {rank}</div>
        </div>
        <div className="rank-data">
          <div>Region: {regionRank}</div>
          <div>Server: {serverRank}</div>
          <div>Percentile: {roundTwoPlaces(rankPercent)}</div>
        </div>
      </div>
    </div>
  )

}