import history from '../history'
import axios from 'axios'
import {runInNewContext} from 'vm'

// ACTION CREATORS
const GOT_ALL_BGMS = 'GOT_ALL_BGMS'
const GOT_SINGLE_BGM = 'GOT_SINGLE_BGM'

const initialState = {
  allBGMS: [],
  singleBGM: {}
}

// ACTION CREATORS
export const gotAllBGMS = bgms => ({
  type: GOT_ALL_BGMS,
  bgms
})

export const gotSingleBGM = bgm => ({
  type: GOT_SINGLE_BGM,
  bgm
})

// THUNK CREATORS
export const fetchBGMS = () => async dispatch => {
  try {
    const {data} = await axios.get('https://acnhapi.com/v1/backgroundmusic/')
    dispatch(gotAllBGMS(data))
  } catch (error) {
    console.error(error)
  }
}

export const fetchSingleBGM = id => async dispatch => {
  try {
    const {data} = await axios.get(
      `https://acnhapi.com/v1/backgroundmusic/${id}`
    )
    dispatch(gotSingleBGM(data))
  } catch (error) {
    console(error)
  }
}

// REDUCER
const bgmReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_BGMS:
      return {...state, allBGMS: action.bgms}
    case GOT_SINGLE_BGM:
      return {...state, singleBGM: action.bgm}
    default:
      return state
  }
}

export default bgmReducer
