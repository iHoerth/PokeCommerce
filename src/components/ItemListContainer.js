import {React, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import FilterSection from './FilterSection';
import {fetchAllPokemon} from './Helpers';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [childValue,setChildValue] = useState(0)
  const [pokemons,setPokemons] = useState([]);
  const [search,setSearch] = useState('');
  const [loading,setLoading] = useState(true);
  // const {pokemonid} = useParams();
  const type = useParams();

  const getValues = (params) => {
    console.log(params);
    setChildValue(params);
  }

  useEffect(() => {
    const getPoke = async() => {
      try{
        const pokeList = await fetchAllPokemon(0,251);
        setPokemons(pokeList);
        setLoading(false);
      } catch (error) {
        console.log('hubo un error')
      }
    }
    getPoke();
  },[])

  const searchPokemon = e => {
    setSearch(e.target.value);
  };

  const filteredPoke = pokemons.filter(poke => poke.name.toLowerCase().includes(search) || poke.id == search || poke.types.includes(search));

  if(loading){
    return (
      <div className='loadingContainer'>
        <h1 className='loading'>LOADING</h1>
      </div>
    )
  } 

  return (
    <div id="itemContainerWrapper">
      <FilterSection search={search} searchPokemon={searchPokemon} />
      <div id="itemContainer">
        <ItemList pokemons={filteredPoke} getValues={getValues} />
      </div>
    </div>
  )
}

export default ItemListContainer;