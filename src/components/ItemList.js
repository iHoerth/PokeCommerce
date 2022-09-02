import React from 'react'
import Item from './Item'
import {useEffect, useState} from 'react'


const ItemList = ({pokemons}) => {
  
  return (
    <>
      {
        pokemons.map(poke =>{
          return(
            <Item key={poke.id} id={poke.id} title={poke.name} pictureUrl={poke.sprites.front_default}/>
            )
          })
      }
    </>
  )
}

export default ItemList;

