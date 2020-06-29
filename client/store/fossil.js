import history from '../history'
import axios from 'axios'
import {runInNewContext} from 'vm'

// ACTION CREATORS
const GOT_ALL_FOSSILS = 'GOT_ALL_FOSSILS'
const GOT_SINGLE_FOSSIL = 'GOT_SINGLE_FOSSIL'

const initialState = {
  allFossils: [],
  singleFossil: {}
}

// ACTION CREATORS
export const gotAllFossils = fossils => ({
  type: GOT_ALL_FOSSILS,
  fossils
})

export const gotSingleFossil = fossil => ({
  type: GOT_SINGLE_FOSSIL,
  fossil
})

// THUNK CREATORS
export const fetchFossils = () => async dispatch => {
  try {
    const {data} = await axios.get('https://acnhapi.com/v1/fossils/')
    dispatch(gotAllFossils(data))
  } catch (error) {
    console.error(error)
  }
}

export const fetchSingleFossil = id => async dispatch => {
  try {
    const {data} = await axios.get(`https://acnhapi.com/v1/fossils/${id}`)
    dispatch(gotSingleFossil(data))
  } catch (error) {
    console.error(error)
  }
}

// REDUCER
const fossilReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_FOSSILS:
      return {...state, allFossils: action.fossils}
    case GOT_SINGLE_FOSSIL:
      return {...state, singleFossil: action.fossil}
    default:
      return state
  }
}

export default fossilReducer
