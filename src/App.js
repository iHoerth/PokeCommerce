import {BrowserRouter,Routes,Route} from 'react-router-dom';

import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';
import PokeItems from './Components/PokeItems';
import Login from './Components/Login';
import Signup from './Components/Signup';
import CartContext from './Context/CartContext';
import Cart from './Components/Cart'

import './App.css';
import './type-icons.css'

function App() {
  return (
    <CartContext >
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path='/pokemons/' element={<ItemListContainer productType={'pokemon'} />}/>
            <Route path='/pokeitems' element={<ItemListContainer productType={'item'} />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='*' element={<ItemListContainer />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </CartContext >

  );
}

export default App;
