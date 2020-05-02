
import React,{useState} from 'react'
//import {useSelector,useDispatch} from 'react-redux'
import {connect} from 'react-redux'
import valuecake from './action'


//function Cake(props) {
 //const hint = useSelector(state => state.numOfValue)
 //const dispatch = useDispatch()

//    return (
  //      <div>
    //        <h2>Number of Cake - {hint} </h2>
      //      <button onClick={() => dispatch(valuecake())}>cake button</button>
        //</div>
    //);
//} 


function Cake(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of cake - {props.numOfValue} </h2>
      <input type="text" value = {number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => props.valuecake(number)}>click {number} me</button>
    </div>
  )
}


// Another way to pass value in the function..
const mapStateToProps = state => {
    return {
        numOfValue: state.numOfValue
    }
 }

  const mapDispatchToProps = dispatch => {
    return {
        valuecake: number => dispatch(valuecake(number))
    }
 }


export default connect(mapStateToProps, mapDispatchToProps)(Cake);
