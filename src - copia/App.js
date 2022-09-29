import {BrowserRouter,Routes,Route} from 'react-router-dom';

import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import NavBar from './Components/NavBar';
import Contacto from './Components/Contacto';
import PokeItems from './Components/PokeItems';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Provider from './Components/Provider';
import CartContext from './Context/CartContext';

import './App.css';
import './type-icons.css'

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path='/pokemons/' element={<ItemListContainer />}/>
            {/* <Route path='/pokemons/:type' element={<ItemListContainer />}/> */}
            <Route path='/pokemons/pokemondetail/' element={<ItemDetailContainer />}/>
            <Route path='/pokemons/pokemondetail/:pokemon' element={<ItemDetailContainer />}/>
            <Route path='/pokeitems' element={<PokeItems />}/>
            <Route path='/contacto' element={<Contacto />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='*' element={<ItemListContainer />}/>
            <Route path='/cart' element={<CartContext />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
