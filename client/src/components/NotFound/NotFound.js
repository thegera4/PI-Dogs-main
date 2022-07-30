import React from 'react'
import { Link } from 'react-router-dom'
import BackIcon from '../../assets/icons/back-home.png'
import './NotFound.css'
import DogOne from '../../assets/images/404.png'
import DogTwo from '../../assets/images/404-2.jfif'
import NavBar from '../NavBar/NavBar'

function NotFound({errMsg}) {

  const imgArrays = [DogOne, DogTwo];
  const randomImg = imgArrays[Math.floor(Math.random() * imgArrays.length)];

  return (
    <div>
        <NavBar createDogPage="none"/>
        <div className="not-found">
          <h1>Error: {errMsg}</h1>
          <img src={randomImg} alt="DogNotFound"/>
          <div className="back-home">
            <Link to="/home">
              <img src={BackIcon} alt="back-home" className="back-home" />
              <p>Go back home</p>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default NotFound