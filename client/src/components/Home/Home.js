import React, { useState, useEffect } from 'react'
//import Bark from '../../assets/sounds/bark_intro.mp3'
import Card from '../Card/Card'
import Pagination from '../Paginate/Paginate'
import SearchBar from '../SearchBar/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { 
  getAllDogs,
  getTemperaments, 
  orderByName, 
  orderByTemperament } from '../../actions'
import { Link } from 'react-router-dom'
import DogPic from '../../assets/images/dog_profile.jpg'

function Home() {
  //const BARK = new Audio(Bark);

  const DISPATCH = useDispatch()
  const DOGS = useSelector(state => state.dogs)
  const TEMPERAMENTS = useSelector(state => state.temperaments);

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);

  const LAST_DOG = currentPage * dogsPerPage;
  const FIRST_DOG = LAST_DOG - dogsPerPage;
  const RENDERED_DOGS = DOGS.slice(FIRST_DOG, LAST_DOG);

  const Paginate = (pageNumber) => { setCurrentPage(pageNumber)}

  
  useEffect(() => {
    //BARK.play();
    //BARK.loop = false;
    DISPATCH(getAllDogs())
    DISPATCH(getTemperaments())
  }, [DISPATCH])
  
  const handleOrderByName = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    DISPATCH(orderByName(e.target.value));
    setCurrentPage(1);
  }

  function handleFilterByTemperament(e){
    e.preventDefault();
    DISPATCH(orderByTemperament(e.target.value));
    setCurrentPage(1);
  }

  return(
    <div>
      <h1>WELCOME TO BEFOS</h1>
      <Pagination 
        dogsPerPage={dogsPerPage} 
        allDogs={DOGS.length} 
        paginate={Paginate} />
      <br/>  
      <SearchBar />
      <br/>
      {/* Filtro por orden ascendente / descendente */}
      <div className="AZZA-Filter">
        <select onChange={e => {handleOrderByName(e)}}>
          <option value="order">Order by breed name...</option>
          <option value='az'>A-Z</option>
          <option value='za'>Z-A</option>
        </select>
      </div>
      <br/>
      {/* Filtro por temperamento */}
      <div className="Temperaments-Filter">
        <select onChange={e => {handleFilterByTemperament(e)}}>
          <option value="All">All temperaments...</option>
          {TEMPERAMENTS.map(temperament => {
            return(
              <option 
                key={temperament.id} 
                value={temperament.name}>
                {temperament.name}
              </option>
            ) 
          })}
        </select>
      </div>
      <br/>
      {/* Otro filtro */}
      {
        RENDERED_DOGS.map(dog => {
          return(
            <Link to={`/dog/${dog.id}`} key={dog.id}>
              <Card
                key={dog.id} 
                name={dog.name} 
                image={
                  dog.image?
                  dog.image.url:
                  DogPic} 
                temperament={
                  dog.temperament?
                  dog.temperament.split(', ')[0]:
                  'No record'} 
                weight={
                  dog.weight.metric?
                  dog.weight.metric:
                  'No record'}/>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Home