import React from 'react'
import Item from './Item'
import {toTitleCase} from '../Services/Helpers';

const ItemList = ({pokemons,getValues}) => {
  return (
    <>
      {
        pokemons.map(poke => <Item key={poke.id} poke={poke} getValues={getValues} />)
      }
    </>
  )
}

<Item></Item>

export default ItemList;

