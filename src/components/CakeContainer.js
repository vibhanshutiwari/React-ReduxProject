
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import valuecake from './action'


function Cake(props) {
 const hint = useSelector(state => state.numOfValue)
 const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of Cake - {hint} </h2>
            <button onClick={() => dispatch(valuecake())}>cake button</button>
        </div>
    );
} 


//const mapStateToProps = state => {
  //  return {
    //    numOfValue: state.numOfValue
   // }
//}

//const mapDispatchToProps = dispatch => {
  //  return {
    //    valuecake: () => dispatch(valuecake())
    //}
//}


export default Cake;
