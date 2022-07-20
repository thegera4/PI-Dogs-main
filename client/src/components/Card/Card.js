import React from 'react'
//import test from '../../assets/images/landingBG.png'
import './Card.css'

function Card({ name, temperament, weight, image }) {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="content">
        <div className="right-top-container">
          <h3>{name}</h3>
        </div>
        <div className="right-bottom-container">
          <div className="titles">
            <p>Temperamento: </p>
            <p>Peso: </p>
          </div>
          <div className="values">
            <p>{temperament}</p>
            <p>{weight}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card