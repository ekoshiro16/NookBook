import history from '../history'
import axios from 'axios'
import {runInNewContext} from 'vm'

// ACTION CREATORS
const GOT_ALL_VILLAGERS = 'GOT_ALL_VILLAGERS'
const GOT_SINGLE_VILLAGER = 'GOT_SINGLE_VILLAGER'

const initialState = {
  allVillagers: [],
  singleVillager: {}
}

// ACTION CREATORS
export const gotAllVillagers = villagers => ({
  type: GOT_ALL_VILLAGERS,
  villagers
})

export const gotSingleVillager = villager => ({
  type: GOT_SINGLE_VILLAGER,
  villager
})

// THUNK CREATORS
export const fetchVillagers = () => async dispatch => {
  try {
    const {data} = await axios.get('https://acnhapi.com/v1/villagers/')
    dispatch(gotAllVillagers(data))
  } catch (error) {
    console.error(error)
  }
}

export const fetchSingleVillager = id => async dispatch => {
  try {
    const {data} = await axios.get(`https://acnhapi.com/v1/villagers/${id}`)
    dispatch(gotSingleVillager(data))
  } catch (error) {
    console(error)
  }
}

// REDUCER
const villagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_VILLAGERS:
      return {...state, allVillagers: action.villagers}
    case GOT_SINGLE_VILLAGER:
      return {...state, singleVillager: action.villager}
    default:
      return state
  }
}

export default villagerReducer
