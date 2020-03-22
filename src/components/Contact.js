import React from 'react'
import { MediaImages } from '../assets/images/Images'

const Contact = () => (
  <div className="contact wrapper fade">
    <h1 className="contact__title">I am @</h1>
    <div>
      {MediaImages.map(({ image, link, description }) => {
        return (
          <span key={description}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img className="contact__images" src={image} alt={description} />
            </a>
          </span>
        )
      })}
    </div>
    <a className="contact__email" href="mailto: elainecmmattos@gmail.com">
      Or send me an e-mail!
    </a>
  </div>
)
export default Contact
