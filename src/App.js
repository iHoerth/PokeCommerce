import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {useState, useEffect } from 'react';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import CartContext from './Context/CartContext';
import Cart from './Components/Cart'

import './App.css';
import './type-icons.css'

function App() {
  const [search,setSearch] = useState('');

  const setSearchValue = (param) => {
    setSearch(param);
  }

  useEffect(() => {
    document.title = "POKECOMMERCE"
  }, []);

  return (
    <CartContext >
      <BrowserRouter>
        <div className="App">
          <NavBar setSearchValue={setSearchValue} />
          <Routes>
            <Route path='/pokemons/' element={<ItemListContainer search={search} productType={'pokemon'} />}/>
            <Route path='/pokeitems' element={<ItemListContainer search={search} productType={'item'} />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='*' element={<ItemListContainer search={search} productType={'pokemon'}/>}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </CartContext >

  );
}

export default App;



