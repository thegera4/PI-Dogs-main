import React from 'react'
import './CreateDog.css'

function CreateDog() {
  return (
    <div class="form">
      <div class="title">Create your own dog breed here!</div>
      <div class="subtitle">Please complete the next form to create your breed in our database.</div>
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder=" " />
        <label for="firstname" class="placeholder">Name:</label>
      </div>
      <div class="input-container ic2">
        <input id="lastname" class="input" type="text" placeholder=" " />
        <label for="lastname" class="placeholder">Height:</label>
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" type="text" placeholder=" " />
        <label for="email" class="placeholder">Weight:</label>
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" type="text" placeholder=" " />
        <label for="email" class="placeholder">Life span:</label>
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" type="text" placeholder=" " />
        <label for="email" class="placeholder">Image (Url):</label>
      </div>
      <button type="text" class="submit">Create my dog!</button>
    </div>
  )
}

export default CreateDog