import history from '../history'
import axios from 'axios'
import {runInNewContext} from 'vm'

// ACTION CREATORS
const GOT_ALL_BUGS = 'GOT_ALL_BUGS'
const GOT_SINGLE_BUG = 'GOT_SINGLE_BUG'
const GOT_ICONS = 'GOT_ICONS'

const initialState = {
  allBugs: [],
  singleBug: {}
}

// ACTION CREATORS
export const gotAllBugs = bugs => ({
  type: GOT_ALL_BUGS,
  bugs
})

export const gotSingleBug = bug => ({
  type: GOT_SINGLE_BUG,
  bug
})

// THUNK CREATORS

// [ ] To-do, trycatch all thunks
export const fetchBugs = () => async dispatch => {
  try {
    const {data} = await axios.get('https://acnhapi.com/v1/bugs')
    dispatch(gotAllBugs(data))
  } catch (error) {
    console.error(error)
  }
}

export const fetchSingleBug = id => async dispatch => {
  try {
    const {data} = await axios.get(`https://acnhapi.com/v1/bugs/${id}`)
    dispatch(gotSingleBug(data))
  } catch (error) {
    console(error)
  }
}

// REDUCER
const bugReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_BUGS:
      return {...state, allBugs: action.bugs}
    case GOT_SINGLE_BUG:
      return {...state, singleBug: action.bug}
    default:
      return state
  }
}

export default bugReducer
