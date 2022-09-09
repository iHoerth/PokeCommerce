import React from 'react'
import Item from './Item'
import {useEffect, useState} from 'react'
import {toTitleCase} from './Helpers';


const ItemList = ({pokemons}) => {
  return (
    <>
      {
        pokemons.map(poke => <Item key={poke.id} id={poke.id} title={toTitleCase(poke.name)} pictureUrl={poke.sprites.front_default} />)
      }
    </>
  )
}

export default ItemList;

