import React, { useState, useEffect } from 'react'
import Bark from '../../assets/sounds/bark_intro.mp3'
import Card from '../Card/Card'

function Home() {
  const BARK = new Audio(Bark);
  
  
  useEffect(() => {
    //BARK.play();
    //BARK.loop = false;
  })

  return (
    <div>
      <Card name="" image="" temperament="" weight=""/>
    </div>
  )
}

export default Home