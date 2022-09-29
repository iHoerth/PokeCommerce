import React from 'react'
import Item from './Item'
import {toTitleCase} from '../Services/Helpers';

const ItemList = ({products}) => {
  return (
    <>
      {
        products.map(x => <Item key={x.id} product={x} />)
      }
    </>
  )
}

<Item></Item>

export default ItemList;

