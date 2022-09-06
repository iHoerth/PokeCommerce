import './App.css';
import {useEffect, useState} from 'react'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer  />
    </div>
  );
}

export default App;
