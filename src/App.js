import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import Container from './components/CakeContainer'
import store from './components/stores'




function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Container/>
    </div>
    </Provider>
  );
}

export default App;
