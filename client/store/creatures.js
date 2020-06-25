import history from '../history'
import axios from 'axios'

// ACTION CREATORS
const GOT_ALL_CREATURES = 'GOT_ALL_CREATURES'
const REMOVE_SINGLE_CREATURE = 'REMOVE_SINGLE_CREATURE'
const GOT_SINGLE_CREATURE = 'GOT_SINGLE_CREATURE'
const UPDATE_CREATURE = 'UPDATE_CREATURE'

const initialState = {
  allCreatures: [],
  singleCreature: {}
}

// ACTION CREATORS
export const gotAllCreatures = creatures => ({
  type: GOT_ALL_CREATURES,
  creatures
})

export const gotSingleCreature = creature => ({
  type: GOT_SINGLE_CREATURE,
  creature
})

export const removeSingleCreature = () => ({
  type: REMOVE_SINGLE_CREATURE
})

export const updatedCreature = creature => ({
  type: UPDATE_CREATURE,
  creature
})

// THUNK CREATORS

// [ ] To-do, trycatch all thunks
export const fetchCreatures = () => async dispatch => {
  try {
    // const {data} = await axios.get('/api/products')
    // dispatch(gotAllProducts(data))
  } catch (error) {
    console.error(error)
  }
}

export const fetchSingleCreature = id => async dispatch => {
  try {
    // const {data} = await axios.get(`/api/products/${id}`)
    // dispatch(gotSingleProduct(data))
  } catch (error) {
    console(error)
  }
}

export const addCreature = newCreature => async dispatch => {
  //   const {data} = await axios.post('/api/products/', newProduct)
  //   dispatch(gotSingleProduct(data))
}

export const updateCreature = (id, newCreature) => async dispatch => {
  //   const {data} = await axios.put(`/api/products/${id}/`, newProduct)
  //   dispatch(updatedQuantity(data))
}

export const deleteCreature = id => async dispatch => {
  //   const {data} = await axios.delete(`/api/products/${id}`)
  //   dispatch(removeSingleProduct(data))
}

// REDUCER
const creatureReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_CREATURES:
      return {...state, allCreatures: action.creatures}
    case GOT_SINGLE_CREATURE:
      return {...state, singleCreature: action.creature}
    default:
      return state
  }
}

export default creatureReducer
