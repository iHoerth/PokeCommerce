import React from 'react'
import {useEffect, useState} from 'react'
import ItemList from './ItemList';


const ItemListContainer = () => {
  const [pokemons,setPokemons] = useState([]);

  async function fetchPokemon(idStart,idEnd){
    const allPokemon = [];
    for(let i = idStart; i <= idEnd; i++){
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();
      const pokemonTypes = getPokemonTypes(await data);
      data.types = pokemonTypes;
      allPokemon.push(data);
    };
    return allPokemon;
  };

  const getPokemonTypes = pokemon => {
    const pokemonTypes = [];
    for(const typeData of pokemon.types){
      pokemonTypes.push(typeData.type.name);
    }
    return pokemonTypes;
  }

  useEffect(() => {
    const asyncFunction = async() => {
      try{
        const pokeList = await fetchPokemon(1,150);
        setPokemons(pokeList);
        console.log(pokeList);
      } catch (error) {
        console.log('hubo un error')
      }
    }
    asyncFunction();
  },[])

  return (
    <div id="itemContainer">
      <ItemList pokemons={pokemons} />
    </div>
  )
}

export default ItemListContainer;