import history from '../history'
import axios from 'axios'
import {runInNewContext} from 'vm'

// ACTION CREATORS
const GOT_ALL_FISH = 'GOT_ALL_FISH'
const GOT_SINGLE_FISH = 'GOT_SINGLE_FISH'

const initialState = {
  allFish: [],
  singleFish: {}
}

// ACTION CREATORS
export const gotAllFish = fish => ({
  type: GOT_ALL_FISH,
  fish
})

export const gotSingleFish = fish => ({
  type: GOT_SINGLE_FISH,
  fish
})

// THUNK CREATORS

// [ ] To-do, trycatch all thunks
export const fetchFish = () => async dispatch => {
  try {
    const {data} = await axios.get('https://acnhapi.com/v1/fish')
    dispatch(gotAllFish(data))
  } catch (error) {
    console.error(error)
  }
}

export const fetchSingleFish = id => async dispatch => {
  try {
    const {data} = await axios.get(`https://acnhapi.com/v1/fish/${id}`)
    dispatch(gotSingleFish(data))
  } catch (error) {
    console(error)
  }
}

// REDUCER
const fishReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_FISH:
      return {...state, allFish: action.fish}
    case GOT_SINGLE_FISH:
      return {...state, singleFish: action.fish}
    default:
      return state
  }
}

export default fishReducer
