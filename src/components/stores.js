
import {createStore, combineReducers, applyMiddleware} from 'redux'
import reducer from './reducers';
import logger from 'redux-logger'
import thunk from 'redux-thunk'




const rootReducer = combineReducers({
    user: reducer
});

const store = createStore(rootReducer, applyMiddleware(thunk,logger))

export default store;
