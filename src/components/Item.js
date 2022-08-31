import React from 'react'

export const Item = ({id,title,price,pictureUrl}) => {
  return (
    <div id="card">
      <div>{id}</div>
      <div>{title}</div>
      <div>{price}</div>
      <div>{pictureUrl}</div>
    </div>
  )
}

export default Item;