import React from 'react'
import Item from './Item'
import {useEffect, useState} from 'react'
import {toTitleCase} from './Helpers';
 


const ItemDetail = ({pokemon}) => {

  return (
    <div id='itemDetail'>
      {/* <Item key={'pokemonDetail'} id={pokemon.id} title={pokemon.name} pictureUrl={pokemon.sprites.front_default} /> */}
      <div>{pokemon.id}</div>
      <div>{pokemon.name}</div>
      {/* <img src={pokemon.sprites.front_default} alt="" /> */}
    </div>
  )
}

export default ItemDetail