import React from 'react'
import {useEffect, useState} from 'react'
import ItemList from './ItemList';


const ItemListContainer = () => {
  const [pokemons,setPokemons] = useState([]);

  async function fetchPokemon(idStart,idEnd){
    const allPokemon = [];
    // idStart es el primer pokemon que quiero que traiga, idEnd el ultimo. ----> fetchPokemon(1,150) me va a traer los primeros 150 pokemons.
    for(let i = idStart; i <= idEnd; i++){
      //Hago el fetch con la logica vista en clase
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();
      // Lo de aca abajo, es para tener mas facil acceso a los tipos del pokemon mas adelante.
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
        console.log(pokeList); // voy a dejar este log porque me sirve ver la estructura del objeto pokemon para seguir trabajando.
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