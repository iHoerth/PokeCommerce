import React from 'react'
import ItemDetail from './ItemDetail'
import {useEffect, useState} from 'react'
import {getPokemonTypes,fetchPokemon} from './Helpers';


const ItemDetailContainer = () => {
  const [pokemon,setPokemon] = useState({})

  useEffect(() => {
    const asyncFunction = async() => {
      try{
        const pokeList = await fetchPokemon(1,150);
        const filteredPoke = pokeList.find(poke => poke.id === 6);
        console.log(filteredPoke)
        setPokemon(filteredPoke);
      } catch (error) {
        console.log('hubo un error')
      }
    }
    asyncFunction();
  },[])

  return (
    <div id="detailContainer">
      <h1>Item Detail Container</h1>
      <ItemDetail pokemon={pokemon} />
    </div>
  )
}

export default ItemDetailContainer