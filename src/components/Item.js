import React, {useEffect, useState} from 'react'
import {Navigate, useNavigate} from 'react-router-dom';

export const Item = ({id,title,price,pictureUrl}) => {
  const [openDetail,setOpenDetail] = useState(false);
  let navigate = useNavigate();
  const showDetail = () => {
    setOpenDetail(!openDetail);
  }

  return (
    <div className="card" >
      <div>{id}</div>
      <div>{title}</div>
      <div>{price}</div>
      <div className='pokeimgContainer' style={{ cursor:'pointer' }} onClick={() => navigate('/pokemons/pokemondetail/'+title.toLowerCase())}>
        <img src ={pictureUrl} alt=''/>
      </div>
      {/* <button >Show {title}</button> */}
    </div>
  )
}

export default Item;