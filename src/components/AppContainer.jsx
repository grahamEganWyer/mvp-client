
import React, { useState } from 'react'
import axios from 'axios'
import { AllStars } from './AllStars'
import { Encounters } from './Encounters'
import { roundTwoPlaces, capitalise } from './Functions'

import { EncounterBadge } from './EncounterBadge'

export const AppContainer = () => {

  const [characterPerformance, setCharacterPerformance ] = useState({})
  const [name, setName] = useState("")
  const [serverSlug, setServerSlug ] = useState("")
  const [serverRegion, setServerRegion ] = useState("")

  const handleSearch = () => {
    axios
      .get('/api/warcraftlogs-client', {
        params: {
          name: name,
          serverSlug: serverSlug,
          serverRegion: serverRegion
         }
        })
      .then(res => setCharacterPerformance(res.data))
  }

  return (
    <>
        <header>
          <h1>MVP</h1>
          
          <section>
            <form onSubmit={handleSearch}>
                <input type="text" id="name" placeholder="Character Name" value={name} onChange={e => setName(e.target.value)}/>
                <input type="text" id="serverSlug" placeholder="Server Name" value={serverSlug} onChange={e => setServerSlug(e.target.value)}/>
                <input type="text" id="serverRegion" placeholder="Server Region" value={serverRegion} onChange={e => setServerRegion(e.target.value)}/>
                <button onClick={handleSearch}>Search</button>
            </form>
          </section>
        </header>
  
        {console.log(characterPerformance)}
        {!!Object.keys(characterPerformance).length && (

          <section className="content-wrapper">

            <section className="character-overview">
              <div className="character-badge">
                <div className="character-name">{name ? capitalise(name) : "Character"}</div>
                <div className="server-name">{serverSlug ? capitalise(serverSlug) : "Server"} ({serverRegion ? serverRegion : "Region"})</div>
              </div>
              <div className="charcter-avg-overview">
                <h4>Best Parse Average: <span>{roundTwoPlaces(characterPerformance.bestPerformanceAverage)}</span></h4>
                <h4>Average Parse: <span>{roundTwoPlaces(characterPerformance.medianPerformanceAverage)}</span></h4>
              </div>
            </section>

            <section className="spec-section">
              <div className="spec-section-header">
                <h1>Rankings By Spec</h1>
              </div>

              <div className="spec-section-body">
                {characterPerformance.allStars.map(item =>
                  <AllStars key={JSON.stringify(item)} item={item}/>)
                }
              </div>
            </section>
            
            <section className="encounters-section">
              <div className="encounters-section-header">   
                <h1>Ranking by Encounters</h1>
              </div>
              <div className="encounters-section-body">
                {characterPerformance.rankings.map(item =>
                  <Encounters key={JSON.stringify(item)} item={item}/>)
                }
              </div>

            </section>  
          </section>
        )}
    </>
  )
}