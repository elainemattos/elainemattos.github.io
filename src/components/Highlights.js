import React, { useState, useEffect } from 'react'
import { getData } from '../utils/fetch'

export const Highlights = ({ userName, apiKey }) => {
  const [lastfmData, updateLastfmData] = useState({})

  useEffect(() => {
    let urlString = `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${userName}&api_key=${apiKey}&limit=3&period=7day&format=json`

    getData(urlString).then(data => updateLastfmData(data))
  }, [userName, apiKey])

  const artists = lastfmData
    ? lastfmData.topartists
    : lastfmData.topartists.artists

  return !artists ? (
    ''
  ) : (
    <div className="lastfm-display">
      Here's my weekly highlights from the last 7 days :)
      <ul className="display-song highlights">
        {artists &&
          artists.artist.map(band => {
            return <li key={band.name}> {band.name}</li>
          })}
      </ul>
    </div>
  )
}
