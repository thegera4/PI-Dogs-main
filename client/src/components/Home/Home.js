import React, { useState, useEffect } from 'react'
import Bark from '../../assets/sounds/bark_intro.mp3'
import Card from '../Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDogs } from '../../actions'
import { Link } from 'react-router-dom'

function Home() {
  const BARK = new Audio(Bark);
  const DISPATCH = useDispatch()
  const DOGS = useSelector(state => state.dogs)
  
  /* Codigo para crear el array con solo el primer temperamento
  const TEMPERAMENTS = DOGS.map((dog) => dog.temperament)
  let FIRST_TEMPERAMENTS=[];
  for(let i = 0; i < TEMPERAMENTS.length; i++){
    FIRST_TEMPERAMENTS = TEMPERAMENTS[i]?.split(', ')[0]
  }
*/
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);
  const [, setOrder] = useState('');

  const LAST_DOG = currentPage * dogsPerPage;
  const FIRST_DOG = LAST_DOG - dogsPerPage;
  const RENDERED_DOGS = DOGS.slice(FIRST_DOG, LAST_DOG);

  const Paginate = (pageNumber) => { setCurrentPage(pageNumber)}
  
  useEffect(() => {
    //BARK.play();
    //BARK.loop = false;
    DISPATCH(getAllDogs())
  }, [DISPATCH])

  return (
    <div>
      <h1>WELCOME TO BEFOS</h1>
    {
      RENDERED_DOGS.map((dog, index) => {
        return(
          <Card
            key={dog.id} 
            name={dog.name} 
            image={dog.image.url} 
            temperament={dog.temperament.split(', ')[0]} 
            weight={dog.weight.metric}/>
        )
    })
    }
    </div>
  )
}

export default Home