import React from 'react'

export const Item = ({id,title,price,pictureUrl}) => {
  return (
    <div id="card">
      <div>{id}</div>
      <div>{title}</div>
      <div>{price}</div>
      <img src ={pictureUrl} />
    </div>
  )
}

export default Item;