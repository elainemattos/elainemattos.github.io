import React from 'react'
import { ProfileImage } from '../assets/images/Images'
import { Highlights } from './Highlights'

const { image, description } = ProfileImage[0]

const About = () => (
  <div className="about wrapper fade">
    <h1 className="about__title">About me</h1>
    <div className="about__topics">
      <img className="about__topics--image" src={image} alt={description} />
      <div className="about__topics--text">
        <p>
          I am a Front End Developer living in Sorocaba, Brazil. I enjoy to
          travel, learn and listen to music as much as I can :D
        </p>
        <p>I am an auto declared lastfm evangelist!</p>
        <Highlights
          userName={'elainemattoss'}
          apiKey={process.env.REACT_APP_API_KEY}
        />
      </div>
    </div>
  </div>
)
export default About
