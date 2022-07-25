import React, { useState, useEffect } from 'react'
//import Bark from '../../assets/sounds/bark_intro.mp3'
import Card from '../Card/Card'
import Pagination from '../Paginate/Paginate'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { 
  getAllDogs,
  getTemperaments, 
  orderByName, 
  orderByTemperament,
  filterDogsByCreated } from '../../actions'
import { Link } from 'react-router-dom'
import DogPic from '../../assets/images/dog_profile.jpg'
import Bella from '../../assets/images/bella_home.png'
import './Home.css'

function Home() {
  //const BARK = new Audio(Bark);

  const DISPATCH = useDispatch()
  const DOGS = useSelector(state => state.dogs)
  const TEMPERAMENTS = useSelector(state => state.temperaments);

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
    DISPATCH(getTemperaments())
  }, [DISPATCH])
  
  const handleOrderByName = (e) => {
    e.preventDefault();
    DISPATCH(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Order: ${e.target.value}`);
  }

  function handleFilterByTemperament(e){
    e.preventDefault();
    DISPATCH(orderByTemperament(e.target.value));
    setCurrentPage(1);
  }

   function handleFilterByCreated(e){
    DISPATCH(filterDogsByCreated(e.target.value));
    setCurrentPage(1);
  }

  return(
    <div>
      <NavBar />
      <div className="Header">
        <div className="left-header">
          <h1>WELCOME TO BEFOS!</h1>
          <p> Befos is a website that allows you to find your perfect dog based on the breed information.</p>
          <p> To start you can click on the search icon and then write the name of a dog breed or use<br/> 
          the filters or pagination(page numbers) below to search in our database.</p>
          <div className="searchbar-container">
            <SearchBar />
          </div>
        </div>
        <div className="right-header">
          <img src={Bella} alt="Bella" />
        </div>
      </div>
      <div className="Pagination">
        <Pagination 
          dogsPerPage={dogsPerPage} 
          allDogs={DOGS.length} 
          paginate={Paginate} />
      </div>
      <br/>
      <br/>
      <div className="Filters-container">
        <button className="btn-refresh">
          Refresh
        </button>
        <div className="AZZA-Filter">
          <label>Filter by name: </label>
          <select onChange={e => {handleOrderByName(e)}}>
            <option value='az'>A-Z</option>
            <option value='za'>Z-A</option>
          </select>
        </div>
        <div className="Temperaments-Filter">
        <label>Filter by temperament: </label>
          <select onChange={e => {handleFilterByTemperament(e)}}>
            <option value="All">All temperaments</option>
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
        <div className="Created-Filter">
        <label>Filter by created: </label>
          <select onChange={e => handleFilterByCreated(e)}>
            <option value='All'>All dogs</option>
            <option value='created'>Created in database</option>
            <option value='api'>Existent (from API)</option>
          </select>
        </div>
      </div>
      <div className="Cards-Container">
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
    </div>
  )
}

export default Home