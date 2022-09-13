import {React, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import FilterSection from './FilterSection';
import {fetchPokemon} from './Helpers';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [pokemons,setPokemons] = useState([]);
  const [loading,setLoading] = useState(true);
  // const {pokemonid} = useParams();
  const type = useParams();

  useEffect(() => {
    const getPoke = async() => {
      try{
        const pokeList = await fetchPokemon(1,150);
        setPokemons(pokeList);
        setLoading(false);
      } catch (error) {
        console.log('hubo un error')
      }
    }
    getPoke();
  },[])

  if(loading){
    return (
      <div className='loadingContainer'>
        <h1 className='loading'>LOADING</h1>
      </div>
    )
  } 

  return (
    <div id="itemContainerWrapper">
      <FilterSection pokemons={pokemons}/>
      <div id="itemContainer">
        <ItemList pokemons={pokemons} />
      </div>
    </div>
  )
}

export default ItemListContainer;