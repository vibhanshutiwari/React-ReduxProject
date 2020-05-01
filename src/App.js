import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './components/stores'
import Cake from './components/CakeContainer';




function App() {
  return (
    <Provider  store= {store} >
    <div className="App">
      <Cake/>
    </div>
    </Provider>
  );
}

export default App;
