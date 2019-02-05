import axios from 'axios';

//Initial State
const initialState = {
  user: {}
}

//Action Types
const GET_USER = 'GET_USER';

//Action Creators
export function getUser(){
  return {
    type: GET_USER,
    payload: axios('/user')
  }
}

// Reducer 
export default function (state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data
      }
    default:
      return state
  }
}