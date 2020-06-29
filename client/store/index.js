import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import bugReducer from './bug'
import fishReducer from './fish'
import songReducer from './song'
import bgmReducer from './bgm'
import fossilReducer from './fossil'
import villagerReducer from './villager'
import user from './user'

const reducer = combineReducers({
  user,
  bugReducer,
  fishReducer,
  songReducer,
  bgmReducer,
  fossilReducer,
  villagerReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
