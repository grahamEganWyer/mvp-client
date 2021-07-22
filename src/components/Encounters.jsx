import React from 'react'
import { SpecBadge } from './SpecBadge'
import { EncounterBadge } from './EncounterBadge'
import { roundTwoPlaces, millisToMinutesAndSeconds, roundNearest } from './Functions'

// item.item
export const Encounters = ({ item }) => {

  const {
    encounter,
    bestSpec,
    bestAmount, 
    rankPercent,
    medianPercent,
    lockedIn,
    totalKills,
    fastestKill,
    allStars
  } = item

  const { id, name } = encounter

  const { 
    points, 
    possiblePoints, 
    rank,
    serverRank,
    total
  } = allStars

  // Math.round(medianPercent * 100) / 100

  return (
    <>
      <div className="encounter-data-wrapper">

        <div className="encounter-badge">
          <div>{<EncounterBadge key={JSON.stringify(item)} item={item}/>}</div>
          <div className="encounter-name">{name}</div>
        </div>

        <div className="encounter-best-percentile">
        <div>{<SpecBadge key={JSON.stringify(item)} item={item}/>}</div>
          <div>Rank: {roundTwoPlaces(rankPercent)}</div>
        </div>

        <div className="encounter-stats">
          <div>Dps/Hps: {roundNearest(bestAmount)}</div>
          <div>Fastest: {millisToMinutesAndSeconds(fastestKill)}</div>
          <div>Average Parse: {roundTwoPlaces(medianPercent)}</div>
          <div>Kills: {totalKills}</div>
        </div>

        <div className="encounter-rankings">
          <div>Points: {points}</div>
          <div>World Rank: {rank}</div>
          <div>Server Rank: {serverRank}</div>
        </div>

      </div>
    </>
  )

}