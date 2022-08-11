import React, { Component } from 'react'
import './LandingPage.css'
import BoneButton from '../BoneButton/BoneButton'
import Logo from '../../assets/images/Befos_logo_nb.png'
import Bella from '../../assets/images/bella.jpeg'

export class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <div className="left">
          <img src={Logo} alt="Befos logo" />
        </div>
        <div className="right">
          <img src={Bella} alt="Bella Estrellita"/>
          <h1 data-testid="page-title">Welcome to Befos!</h1>
          <p data-testid="page-description">
          Here you'll find information about dog 
          breeds.
          Enjoy!
          </p>
          <BoneButton className="bone"/>
        </div>
      </div>
    )
  }
}

export default LandingPage