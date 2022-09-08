import React from 'react'
import {useEffect, useState} from 'react'
import ItemList from './ItemList';
import {getPokemonTypes,fetchPokemon} from './Helpers';
import {useParams} from 'react-router-dom';

const ItemListContainer = () => {
  const [pokemons,setPokemons] = useState([]);
  const {pokemonid} = useParams();

  useEffect(() => {
    const getPoke = async() => {
      try{
        const pokeList = await fetchPokemon(1,150);
        setPokemons(pokeList);
      } catch (error) {
        console.log('hubo un error')
      }
    }
    getPoke();
  },[])
  
  return (
    <div id="itemContainer">
      <ItemList pokemons={pokemons} />
    </div>
  )
}

export default ItemListContainer;