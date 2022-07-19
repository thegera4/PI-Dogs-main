import React, { useState, useEffect } from 'react'
import Bark from '../../assets/sounds/bark_intro.mp3'

function Home() {
  const BARK = new Audio(Bark);
  
  
  useEffect(() => {
    BARK.play();
    BARK.loop = false;
  })

  return (
    <div>Aqui va el Home</div>
  )
}

export default Home