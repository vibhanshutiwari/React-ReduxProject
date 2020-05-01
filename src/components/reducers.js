import {VALUE_CAKE} from './value'

const value = {
    numOfValue: 100
};

const valueReducer = (state = value, action) => {
   switch(action.type) {
       case VALUE_CAKE : return {
           ...state,
           numOfValue: state.numOfValue + 50
       }
       default: return state
   }
}

export default valueReducer;