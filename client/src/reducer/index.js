import { 
  GET_ALL_DOGS,
 } from "../actions";

const initialState = {
    dogs:[],
    allDogs: [],
    temperaments: [],
    dogDetail: {},
}

function rootReducer(state=initialState, action){ 
  switch(action.type){
    case GET_ALL_DOGS:
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload
      }
    default:
      return state
  }
   
}

export default rootReducer;