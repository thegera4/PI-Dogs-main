import { 
  GET_ALL_DOGS,
  GET_DOG_BY_NAME,
  ORDER_BY_NAME,
  GET_TEMPERAMENTS,
  ORDER_BY_TEMPERAMENT
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
    case GET_DOG_BY_NAME:
      return {
        ...state,
        dogs: action.payload
      }
    case ORDER_BY_NAME:
      let orderedDogs = action.payload === 'az' ?
        state.dogs.sort((a,b) => a.name > b.name ? 1 : -1) :
        state.dogs.sort((a,b) => a.name < b.name ? 1 : -1);
      return {
        ...state,
        dogs: orderedDogs
      }
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload
      }
    case ORDER_BY_TEMPERAMENT:
      const allDogs = state.allDogs;
      const filteredByTemperament = action.payload === 'All' ?
        allDogs :
        allDogs.filter(dog => dog.temperament?.includes(action.payload.trim()));
      return {
        ...state,
        dogs: filteredByTemperament
      }
    default:
      return state
  }
   
}

export default rootReducer;