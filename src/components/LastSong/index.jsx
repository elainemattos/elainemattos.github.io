import React, { useState, useEffect } from 'react'
import { getData } from '../../utils/api'
import { GradientText, StyledParagraph } from '../shared'

export const LastSong = ({ userName, apiKey }) => {
  const [lastfmData, updateLastfmData] = useState({})

  useEffect(() => {
    let urlString = `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${userName}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`
    getData(urlString).then(data => updateLastfmData(data))
  }, [userName, apiKey])

  const track = lastfmData
    ? lastfmData.recenttracks
    : lastfmData.recenttracks.track

  const getSong = () => {
    const { track } = lastfmData.recenttracks
    const artist = track[0].artist['#text']
    const song = track[0].name
    return `${song} by ${artist}`
  }

  const displaySong = track ? getSong() : ''

  return !track ? (
    ''
  ) : (
    <StyledParagraph>
      The last song I heard was:{' '}
      <GradientText>
        <a
          href={`https://www.youtube.com/results?search_query=${displaySong}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {displaySong}
        </a>
      </GradientText>
    </StyledParagraph>
  )
}
