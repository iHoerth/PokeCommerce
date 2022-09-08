import React from 'react'
import ItemDetail from './ItemDetail'
import {useEffect, useState} from 'react'
import {getPokemonTypes,fetchPokemon} from './Helpers';


const ItemDetailContainer = () => {
  const [pokemon,setPokemon] = useState()
  const [loading,setLoading] = useState(true)
  
  useEffect(() => {
    const asyncFunction = async() => {
      const pokeList = await fetchPokemon(1,150);
      const filteredPoke = await pokeList.find(poke => poke.id === 6);
      setPokemon(await filteredPoke);
      setLoading(false);
    }
    asyncFunction();
  },[])

  console.log('hola');

  if(loading){
    return (
      <h1>LOADING</h1>
    )
  } 

  return (
    <div id="detailContainer">
      <h1>Item Detail Container</h1>
      <ItemDetail pokemon={pokemon} />
    </div>
  )
}

export default ItemDetailContainer