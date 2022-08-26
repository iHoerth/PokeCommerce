import './App.css';
import NavBar from './components/NavBar';
import PokemonList from './components/PokemonList';


function App() {

  return (
    <div className="App">
      <NavBar />
      <PokemonList greetings={'Pokemons'}/>
    </div>
  );
}

export default App;
