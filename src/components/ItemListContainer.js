import React from 'react'
import {useEffect, useState} from 'react'
import ItemList from './ItemList';
import {getPokemonTypes,fetchPokemon} from './Helpers';
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const ItemListContainer = () => {
  const [pokemons,setPokemons] = useState([]);
  const [loading,setLoading] = useState(true);
  const {pokemonid} = useParams();

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
    <div id="itemContainer">
      <ItemList pokemons={pokemons} />
    </div>
  )
}

export default ItemListContainer;