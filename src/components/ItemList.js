import React from 'react'
import Item from './Item'
import {toTitleCase} from './Helpers';

const ItemList = ({pokemons,getValues}) => {
  return (
    <>
      {
        pokemons.map(poke => <Item key={poke.id} id={poke.id} title={toTitleCase(poke.name)} pictureUrl={poke.sprites.front_default} getValues={getValues} />)
      }
    </>
  )
}

export default ItemList;

