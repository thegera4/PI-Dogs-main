import axios from 'axios';

export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_DOG_DETAILS = "GET_DOG_DETAILS";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const GET_DOG_BY_ID = "GET_DOG_BY_ID";
export const GET_DOG_BY_NAME = "GET_DOG_BY_NAME";

export function getAllDogs(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/dogs");
        return dispatch({
            type: GET_ALL_DOGS,
            payload: json.data
        })
    }
}