import React from 'react'
import Item from './Item'
import {useEffect, useState} from 'react'

const pokemonArray = [
  {
    name: 'Bulbasaur',
    id: 1,
    pictureUrl: 'Bulbasaur.jpg'
  },
  {
    name: 'Ivysaur',
    id: 2,
    pictureUrl: 'Ivysaur.jpg'
  },
  {
    name: 'Venasaur',
    id: 3,
    pictureUrl: 'Venasaur.jpg'
  },
  {
    name: 'Charmander',
    id: 4,
    pictureUrl: 'Charmander.jpg'
  },
]


const ItemContainer = () => {
  const [pokemons,setPokemons] = useState([]);

  const getPoke = () => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(pokemonArray);
      },1200)
    })
  }

  useEffect(() => {
    const asyncFunction = async() => {
      try{
        const pokeList = await getPoke();
        setPokemons(pokeList);
      } catch (error) {
        console.log('hubo un error')
      }
    }
    asyncFunction();
  },[])


  return (
    <div id="itemContainer">
      {
        pokemons.map(poke =>{
          return(
            <Item key={poke.id} id={poke.id} title={poke.name} pictureUrl={poke.pictureUrl}/>
          )
        })
      }
    </div>
  )
}

export default ItemContainer;
