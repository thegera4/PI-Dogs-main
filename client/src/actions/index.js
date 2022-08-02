import axios from 'axios';

export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_DOG_BY_NAME = "GET_DOG_BY_NAME";
export const FILTER_BY_CREATED = "FILTER_BY_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const ORDER_BY_TEMPERAMENT = "ORDER_BY_TEMPERAMENT";
export const GET_DOG_BY_ID = "GET_DOG_BY_ID";
export const CLEAR_DETAILS = "GET_DOG_DETAILS";
export const POST_DOG = "POST_DOG";
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT";

export function getAllDogs(){
    return async function(dispatch){
        try{
            var json = await axios.get("http://localhost:3001/dogs");
            return dispatch({
                type: GET_ALL_DOGS,
                payload: json.data
            })
        }
        catch(error){
            console.error(error);
        }
    }
}

export function searchDogs(name){
    return function(dispatch){
        axios(`http://localhost:3001/dogs?name=${name}`)
        .then(res => {
            dispatch({
                type: GET_DOG_BY_NAME,
                payload: res.data
            })
        })
        .catch(err => {
            console.error(err);
        })
    }
}

export function filterDogsByCreated(payload){
    return {
        type: FILTER_BY_CREATED,
        payload
    }
}

export function orderByName(payload){
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

export function getTemperaments(){
    return function(dispatch){
        fetch("http://localhost:3001/temperaments")
        .then(res => res.json())
        .then(json => {
            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: json
            })
        })
        .catch(error => console.error(error));
    }
}

export function orderByTemperament(temperament){
    return {
        type: ORDER_BY_TEMPERAMENT,
        payload: temperament
    }
}

export function getDogById(id){
    return function(dispatch){
        fetch(`http://localhost:3001/dogs/${id}`)
        .then(res => res.json())
        .then(details => {
        return dispatch({
            type: GET_DOG_BY_ID,
            payload: details
        })
        })
        .catch(error => console.error(error));
    }
}

export function clearDogDetail(){
    return {
        type: CLEAR_DETAILS
    }
}

export function postDog(payload){
    return function(){
        fetch("http://localhost:3001/dogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(info => info)
        .catch(error => console.error(error));
    }
}

export function orderByWeight(payload){
    return {
        type: ORDER_BY_WEIGHT,
        payload
    }
}