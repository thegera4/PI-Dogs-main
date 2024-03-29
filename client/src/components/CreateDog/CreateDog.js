import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { getTemperaments, postDog, clearError } from '../../actions/index'
import './CreateDog.css'
import { selectHeight, selectWeight, selectLifespan,
         containsSpecialChars, containsNumbers } from './utils'
import BackIcon from '../../assets/icons/back-home.png';
import NavBar from '../NavBar/NavBar';

function CreateDog() {
  const DISPATCH = useDispatch();
  const HISTORY = useHistory();
  const TEMPERAMENTS = useSelector(state => state.temperaments);
  const AZ_TEMPERAMENTS = 
        TEMPERAMENTS.sort((a, b) => a.name.localeCompare(b.name));
  const FINAL_TEMPERAMENTS = 
        AZ_TEMPERAMENTS.filter(temp => temp.name.trim() !== 'undefined');
  const [input, setInput] = useState({
    name: '',
    hmin: '0',
    hmax: '9',
    height: '',
    wmin: '0',
    wmax: '1',
    weight: '',
    lsmin: '0',
    lsmax: '4',
    lifespan: '',
    temperament: [],
    image: '',
  });
  const [errors, setErrors] = useState({});
  let height = Number(input.hmax) - Number(input.hmin);
  let weight = Number(input.wmax) - Number(input.wmin);
  let lifespan = Number(input.lsmax) - Number(input.lsmin);
  let dogName = input.name;
  const tempArr = []; 

  useEffect(() => {
    DISPATCH(clearError());
    DISPATCH(getTemperaments())
  }, [DISPATCH]);
  useEffect(() => {
    if(dogName === '' || dogName === undefined || dogName === null || 
       containsSpecialChars(dogName) || containsNumbers(dogName)) {
      setErrors({...errors, dogName: 'You must enter a valid name for the breed! Only letters are allowed.'})
    } else {
      const newErrors = {...errors};
      delete newErrors.dogName;
      setErrors(newErrors);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dogName]);
  useEffect(() => {
    if(height <= 0){
    setErrors({...errors, height: 'Height range must be greater than 0'})
    } else {
      const newErrors = {...errors};
      delete newErrors.height;
      setErrors(newErrors);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [height]);
  useEffect(() => {
    if(weight <= 0){
    setErrors({...errors, weight: 'Weight range must be greater than 0'})
    } else {
      const newErrors = {...errors};
      delete newErrors.weight;
      setErrors(newErrors);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weight]);
  useEffect(() => {
    if(lifespan <= 0){
    setErrors({...errors, lifespan: 'lifespan range must be greater than 0'})
    } else {
      const newErrors = {...errors};
      delete newErrors.lifespan;
      setErrors(newErrors);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lifespan]);

  const handleChange = (e) => {
    setInput({...input,[e.target.name]: e.target.value});
  }
  const handleMinHeight = (e) => {
    setInput({...input,hmin: e.target.value});
  }
  const handleMaxHeight = (e) => {
    setInput({...input,hmax: e.target.value});
  }
  const handleMinWeight = (e) => {
    setInput({...input,wmin: e.target.value});
  }
  const handleMaxWeight = (e) => {
    setInput({...input,wmax: e.target.value});
  }
  const handleMinLifespan = (e) => {
    setInput({...input,lsmin: e.target.value});
  }
  const handleMaxLifespan = (e) => {
    setInput({...input,lsmax: e.target.value});
  }
  function handleSubmit(e) {
    e.preventDefault()
    input.height = input.hmin + ' - ' + input.hmax;
    input.weight = input.wmin + ' - ' + input.wmax;
    input.lifespan = input.lsmin + ' - ' + input.lsmax;
    DISPATCH(postDog(input))
    alert("Success! You dog breed was created!")
      setInput({
      name: '',
      hmin: '0',
      hmax: '9',
      height: '',
      wmin: '0',
      wmax: '1',
      weight: '',
      lsmin: '0',
      lsmax: '4',
      lifespan: '',
      temperament: [],
      image: '',
    })
    HISTORY.push('/home')
    
  }
  const handleDelete = (temp) => {
    setInput({...input, temperament: input.temperament.filter(el => el !== temp)});
  }
  function handleTemperaments(e) {
    setInput({...input,temperament: [...input.temperament, e.target.value]});
  }
  function  handleURL(e) {
    setInput({...input, image: e.target.value});
  }
  function handleFocus(){
    if(dogName === '' || dogName === undefined || dogName === null || 
       containsSpecialChars(dogName) || containsNumbers(dogName)) {
      setErrors({...errors, dogName: 'You must enter a name for the breed! Only letters are allowed.'})
    }
  }
  function checkIfExists(temperament){
    if(!tempArr.includes(temperament) && tempArr.length < 10){
      tempArr.push(temperament);
      return true
    }
    return false
  }
  
  return (
    <>
      <NavBar createDogPage="CDP"/>
      <div className="home-container">
        <Link to="/home">
          <img src={BackIcon} alt="Go-back-icon"/>
          <p>Go back home</p>
        </Link>
      </div>
      <div className="form">
        <div className="title">Create your own dog breed here!</div>
        <div className="subtitle">
          Please complete the next form to create your breed in our database.
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-container ic1">
          <input 
            className="input" 
            type="text" 
            placeholder="(Required) Enter your dog's name here"
            value={input.name} 
            name="name"
            onFocus={handleFocus}
            onChange={(e) => handleChange(e)} />
          <label className="placeholder">Name:</label>
        </div>
        <div className="select-container">
          <div className="inner-min-height">
            <label>Min Height:</label>
            <select className="select-height-min" onChange={(e) => {handleMinHeight(e)}}>
              {selectHeight().slice(0, selectHeight().length/2).map(
                el => <option key={el} value={el}>{el}</option>)}
            </select>
          </div>
          <div className="inner-max-height">
            <label>Max Height:</label>
            <select className="select-height-max" onChange={(e) => {handleMaxHeight(e)}}>
              {selectHeight().slice(9).map(
                el => <option key={el} value={el}>{el}</option>)}
            </select>
          </div>
        </div>
        <div className="select-container">
          <div className="inner-min-weight">
            <label>Min Weight:</label>
            <select className="select-weight-min"  onChange={(e) => handleMinWeight(e)}>
              {selectWeight().slice(0, selectWeight().length/2).map(
                el => <option key={el} value={el}>{el}</option>)}
            </select>
          </div>
          <div className="inner-max-weight">
            <label>Max Weight:</label>
            <select className="select-weight-max"  onChange={(e) => handleMaxWeight(e)}>
              {selectWeight().slice(1).map(
                el => <option key={el} value={el}>{el}</option>)}
            </select>
          </div>
        </div>
        <div className="select-container">
          <div className="inner-min-lifespan">
            <label>Min Life span:</label>
            <select 
              className="select-lifespan-min"  
              onChange={(e) => handleMinLifespan(e)}>
              {selectLifespan().slice(0, selectLifespan().length/2).map(
                el => <option key={el} value={el}>{el}</option>)}
            </select>
          </div>
          <div className="inner-max-lifespan">
            <label>Max Life span:</label>
            <select 
              className="select-lifespan-max"  
              onChange={(e) => handleMaxLifespan(e)}>
              {selectLifespan().slice(4).map(
                el => <option key={el} value={el}>{el}</option>)}
            </select>
          </div>
        </div>
        <div className="select-container">
          <select 
            className="select-temperaments" 
            defaultValue={"Select"}
            onChange={(e) => handleTemperaments(e)}>
            <option value="Select" disabled>(Optional) Select temperaments...</option>
            {FINAL_TEMPERAMENTS.map((el, index) =>
              <option key={index} value={el.name}>{el.name}</option>)} {/*el.name.trim()*/}
          </select>
        </div>
        <div className="container-temperaments-selected">
          {input.temperament.map((temperament) => 
          checkIfExists(temperament))}
          {tempArr.map((temperament, index) =>
              <button key ={index} className="selected-temperament"
                onClick={() => handleDelete(temperament)}>
                  <span className="text">{temperament}</span>
                  <span>Delete</span>
              </button>
          )}
          </div>
        <div className="input-container ic2">
          <input 
          className="input" 
          type="text" 
          placeholder="(Optional) Enter the image url: http://..."
          onChange={(e) => handleURL(e)}/>
          <label className="placeholder">Image (Url):</label>
        </div>
        {Object.keys(errors).length > 0?
          <div className="validation">
            <p>The next errors were found in the creation form:</p>
            {Object.keys(errors).map(
              (err, index) => <p key={index}>{errors[err]}</p>)}
          </div> : 
          <button 
            type="submit" 
            disabled={input.name?false:true} 
            className={`submit ${input.name? 'enabled': 'disabled'}`}>
              Create my dog!
          </button>}
        </form>
      </div>
    </>
  )
}

export default CreateDog