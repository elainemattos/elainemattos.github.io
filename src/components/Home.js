import React from 'react'
import { ProfileImage } from '../assets/images/Images'
import { MediaImages } from '../assets/images/Images'
const { image, description } = ProfileImage[0]

const Home = () => (
  <div className="home">
    <h1 className="home__title">Elaine Mattos</h1>
    <div className="home__topics">
      <img className="home__topics--photo" src={image} alt={description} />
      <div className="home__topics--text">
        <p>
          I am a Front End Developer living in Sorocaba, Brazil. I enjoy to
          travel, learn and listen to music as much as I can!
        </p>
        <p>
          Feel free to{' '}
          <a className="home__email" href="mailto: elainecmmattos@gmail.com">
            contact me
          </a>{' '}
          anytime :D
        </p>
        <div>
          {MediaImages.map(({ image, link, description }) => {
            return (
              <span key={description}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img className="home__images" src={image} alt={description} />
                </a>
              </span>
            )
          })}
        </div>
      </div>
    </div>
  </div>
)
export default Home
