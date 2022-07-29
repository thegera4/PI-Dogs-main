import React, { useState, useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { getTemperaments, postDog } from '../../actions/index'
import './CreateDog.css'
import { validationError, selectHeight, selectWeight, selectLifespan } from './utils'

function CreateDog() {
  const DISPATCH = useDispatch();
  const HISTORY = useHistory();
  const TEMPERAMENTS = useSelector(state => state.temperaments);
  const AZ_TEMPERAMENTS = TEMPERAMENTS.sort((a, b) => a.name.localeCompare(b.name));
  const FINAL_TEMPERAMENTS = AZ_TEMPERAMENTS.filter(temp => temp.name.trim() !== 'undefined');
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
    temperaments: [],
    image: '',
  });
  const [errors, setErrors] = useState({});
  useEffect(() => DISPATCH(getTemperaments()), [DISPATCH]);
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
    alert("Dog Created!")
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
      temperaments: [],
      image: '',
    })
    HISTORY.push('/home')
  }
  const handleDelete = (temp) => {
    setInput({...input, temperaments: input.temperaments.filter(el => el !== temp)});
  }
  function handleFocus(e){
    setErrors(validationError({...input, [e.target.name]: e.target.value}));
  }
  function handleSelectHeight(){
    if (input.hmin > input.hmax) {
      setErrors({...errors, height: 'Min height must be less than max height'});
    }
  }
  function handleTemperaments(e) {
    e.target.value !== "none" ? 
    setInput({...input,temperaments: [...input.temperaments, e.target.value]}) :
    setInput({...input});
  }
  console.log(errors)
  console.log(input.hmin, input.hmax)
  return (
    <div className="form">
      <div className="title">Create your own dog breed here!</div>
      <div className="subtitle">Please complete the next form to create your breed in our database.</div>
      <form onSubmit={(e) => handleSubmit(e)}>
      <div className="input-container ic1">
        <input 
          className="input" 
          type="text" 
          placeholder="Enter your dog's name here"
          value={input.name} 
          name="name"
          onBlur={(e) => {
            handleFocus(e)}}
          onChange={(e) => handleChange(e)} />
        <label className="placeholder">Name:</label>
      </div>
      <div className="select-container">
        <label>Height:</label>
        <select 
          className="select-height-min" 
          onChange={(e) => {handleMinHeight(e)}}
          onMouseOut={() => handleSelectHeight()}>
          {selectHeight().slice(0, selectHeight().length/2).map(
            el => <option key={el} value={el}>{el}</option>)}
        </select>
        <p> to </p>
        <select 
          className="select-height-max" 
          onChange={(e) => {handleMaxHeight(e)}}
          onMouseOut={() => handleSelectHeight()}>
          {selectHeight().slice(9).map(
            el => <option key={el} value={el}>{el}</option>)}
        </select>
      </div>
      <div className="select-container">
        <label>Weight:</label>
        <select className="select-weight-min"  onChange={(e) => handleMinWeight(e)}>
          {selectWeight().slice(0, selectWeight().length/2).map(
            el => <option key={el} value={el}>{el}</option>)}
        </select>
        <p> to </p>
        <select className="select-weight-max"  onChange={(e) => handleMaxWeight(e)}>
          {selectWeight().slice(1).map(
            el => <option key={el} value={el}>{el}</option>)}
        </select>
      </div>
      <div className="select-container">
        <label>Life span:</label>
        <select className="select-lifespan-min"  onChange={(e) => handleMinLifespan(e)}>
          {selectLifespan().slice(0, selectLifespan().length/2).map(
            el => <option key={el} value={el}>{el}</option>)}
        </select>
        <p> to </p>
        <select className="select-lifespan-max"  onChange={(e) => handleMaxLifespan(e)}>
          {selectLifespan().slice(4).map(
            el => <option key={el} value={el}>{el}</option>)}
        </select>
      </div>
       <div className="select-container">
        <label>Temperaments:</label>
        <select className="select-temperaments" onChange={(e) => handleTemperaments(e)}>
          <option value="none">(Optional) Select temperaments...</option>
          {FINAL_TEMPERAMENTS.map((el, index) =>
            <option key={index} value={el.name.trim()}>{el.name}</option>)}
        </select>
      </div>
      {input.temperaments.map((temperament, index) => {
        return(
          <div key={index}>
            <button className="selected-temperament"
              onClick={() => handleDelete(temperament)}>
                {temperament}
            </button>
          </div>
        )})}
      <div className="input-container ic2">
        <input className="input" type="text" placeholder="Enter the image url here" />
        <label className="placeholder">Image (Url):</label>
      </div>
      <button type="submit" className="submit">Create my dog!</button>
      </form>
      {Object.keys(errors).length > 0?
        <div className="validation">
          <p>The next errors were found in the creation form:</p>
          {Object.keys(errors).map((err, index) => <p key={index}>{errors[err]}</p>)}
        </div> : 
        null}
    </div>
  )
}

export default CreateDog