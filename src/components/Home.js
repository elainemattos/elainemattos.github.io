import React from 'react'
import { LastSong } from '../components/LastSong'
import Info from '../utils/Info'

const Home = () => (
  <div className="home wrapper fade">
    <h1 className="home__title">Elaine Mattos</h1>
    <ul className="home__text">
      {Info.map(item => (
        <li key={item}>{item}</li>
      ))}
      <li>
        <span role="img" aria-label="computer">
          💻
        </span>
        Working @
        <a
          href="https://www.oquinto.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quinto
        </a>
        !
      </li>
    </ul>
    <LastSong
      userName={'elainemattoss'}
      apiKey={process.env.REACT_APP_API_KEY}
    />
  </div>
)
export default Home
