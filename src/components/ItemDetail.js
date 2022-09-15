import React from 'react'
import Item from './Item'
import {useEffect, useState} from 'react'
import {toTitleCase} from './Helpers';
 


const ItemDetail = ({id,title,pictureUrl,showModal,getValues}) => {
  const [counter,setCounter] = useState(0);

  const add = () => {
    setCounter(counter + 1);
  }


  return (
    <div id='itemDetail'>
      <button onClick={showModal}>CERRAR MODAL</button>
      <div>{id}</div>
      <div>{title}</div>
      <img src={pictureUrl} alt="" />
      <button onClick={add}>AUMENTAR</button>
      <button onClick={() => getValues(counter)}>PASAR VALUE</button>
      <p>Current counter value : {counter}</p>
    </div>
  )
}

export default ItemDetail