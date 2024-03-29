import { GET_ALL_DOGS, GET_DOG_BY_NAME, ORDER_BY_NAME, GET_TEMPERAMENTS,
  ORDER_BY_TEMPERAMENT, FILTER_BY_CREATED, GET_DOG_BY_ID, CLEAR_DETAILS,
  POST_DOG, ORDER_BY_WEIGHT, ERROR_IN_NAME, CLEAR_ERROR, ERROR_IN_POST,
  DELETE_DOG
} from "../actions";

const initialState = {
    dogs:[],
    allDogs: [],
    temperaments: [],
    dogDetail: {},
    error: null,
    postError: null
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
      let isFound = null;
      const filteredByTemperament = action.payload === 'All' ? allDogs :
        // eslint-disable-next-line array-callback-return
        allDogs.filter(dog => {
          if(dog.hasOwnProperty('temperament')){
            return dog.temperament?.includes(action.payload.trim())
          }
          if(dog.hasOwnProperty('temperaments')){
            isFound = dog.temperaments?.some( element => {
              if(element.name === action.payload){
                return true;
              }
              return false;
            })
            if(isFound){
              return dog;
            }
          }
        });
      return {
        ...state,
        dogs: filteredByTemperament
      }
    case FILTER_BY_CREATED:
      const allDogs2 = state.allDogs;
      let filteredByCreated = action.payload === 'created' ?
        allDogs2.filter(dog => dog.createdInDb) :
        allDogs2.filter(dog => !dog.createdInDb)
      return {
        ...state,
        dogs: action.payload === 'All' ? state.allDogs : filteredByCreated
      }
    case GET_DOG_BY_ID:
      return {
        ...state,
        dogDetail: action.payload
      }
    case CLEAR_DETAILS:
      return {
        ...state,
        dogDetail: {}
      }
    case POST_DOG:
      return {
        ...state
    }
    case ORDER_BY_WEIGHT:
      const orderByWeight = action.payload === 'asc' ? 
        state.dogs.sort((a,b) => Number(a.weight.split(' - ')[0]) - Number(b.weight.split(' - ')[0])):
        state.dogs.sort((a,b) => Number(b.weight.split(' - ')[0])- Number(a.weight.split(' - ')[0]));
      return {
        ...state,
        dogs: orderByWeight
      }
    case ERROR_IN_NAME:
      return {
        ...state,
        error: action.payload
      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
        postError: null
      }
    case ERROR_IN_POST:
      return {
        ...state,
        postError: action.payload
      }
    case DELETE_DOG:
      return {
        ...state,
        dogs: state.dogs.filter(dog => dog.id !== action.payload)
      }
    default:
      return state
  }
   
}

export default rootReducer;