import React, { Component } from 'react'
import './LandingPage.css'
import BoneButton from '../BoneButton/BoneButton'

export class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <h1 className="title">
          Descubre el mundo de tus mejores amigos!
        </h1>
        <BoneButton className="bone"/>
      </div>
    )
  }
}

export default LandingPage