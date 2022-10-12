import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {useState, useEffect } from 'react';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';
import SignIn from './Components/SignIn';
import Signup from './Components/SignUp';
import CartContext from './Context/CartContext';
import Cart from './Components/Cart'
import Checkout from './Components/Checkout';

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
            <Route path='/pokemons/:type' element={<ItemListContainer search={search} productType={'pokemon'} />}/>
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='/login' element={<SignIn />}/>
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



