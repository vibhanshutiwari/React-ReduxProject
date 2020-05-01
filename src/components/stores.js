
import valueReducer from './reducers'
import {createStore} from 'redux'



const store = createStore(valueReducer)

export default store;


