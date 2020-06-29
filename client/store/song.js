import history from '../history'
import axios from 'axios'
import {runInNewContext} from 'vm'

// ACTION CREATORS
const GOT_ALL_SONGS = 'GOT_ALL_SONGS'
const GOT_SINGLE_SONG = 'GOT_SINGLE_SONG'

const initialState = {
  allSongs: [],
  singleSong: {}
}

// ACTION CREATORS
export const gotAllSongs = songs => ({
  type: GOT_ALL_SONGS,
  songs
})

export const gotSingleSong = song => ({
  type: GOT_SINGLE_SONG,
  song
})

// THUNK CREATORS
export const fetchSongs = () => async dispatch => {
  try {
    const {data} = await axios.get('https://acnhapi.com/v1/songs')
    dispatch(gotAllSongs(data))
  } catch (error) {
    console.error(error)
  }
}

export const fetchSingleSOng = id => async dispatch => {
  try {
    const {data} = await axios.get(`https://acnhapi.com/v1/songs/${id}`)
    dispatch(gotSingleSong(data))
  } catch (error) {
    console(error)
  }
}

// REDUCER
const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_SONGS:
      return {...state, allSongs: action.songs}
    case GOT_SINGLE_SONG:
      return {...state, singleSong: action.song}
    default:
      return state
  }
}

export default songReducer
