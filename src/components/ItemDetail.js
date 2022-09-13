import React from 'react'
import Item from './Item'
import {useEffect, useState} from 'react'
import {toTitleCase} from './Helpers';
 


const ItemDetail = ({pokemon}) => {

  return (
    <div id='itemDetail'>
      <div>{pokemon.id}</div>
      <div>{pokemon.name}</div>
      <img src={pokemon.sprites.front_default} alt="" />
    </div>
  )
}

export default ItemDetail