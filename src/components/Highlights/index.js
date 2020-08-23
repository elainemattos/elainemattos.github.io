import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getData } from '../../utils/api'

const Bands = styled.ul`
  font-family: 'Karla', sans-serif;
  line-height: 1.4;
  list-style-type: none;
  font-weight: bold;
  /* margin-top: 10px; */
`

export const Highlights = ({ userName, apiKey }) => {
  const [lastfmData, updateLastfmData] = useState({})

  useEffect(() => {
    let urlString = `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${userName}&api_key=${apiKey}&limit=5&period=7day&format=json`

    getData(urlString).then(data => updateLastfmData(data))
  }, [userName, apiKey])

  const artists = lastfmData
    ? lastfmData.topartists
    : lastfmData.topartists.artists

  return !artists ? (
    ''
  ) : (
    <div>
      <Bands>
        {artists &&
          artists.artist.map(band => {
            return <li key={band.name}> {band.name}</li>
          })}
      </Bands>
    </div>
  )
}
