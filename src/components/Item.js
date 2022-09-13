import React, {useEffect, useState} from 'react'
// import {Navigate, useNavigate} from 'react-router-dom';

export const Item = ({id,title,price,pictureUrl}) => {
  const [openModal,setOpenModal] = useState(false);
  const [coords,setCoords] = useState({x:0,y:0});
  // let navigate = useNavigate();

  
  const showModal = () => {
    setOpenModal(!openModal);
    document.body.classList.toggle('no-scroll');
    // navigate('/pokemons/pokemondetail/'+title.toLowerCase());
  }

  return (
    <>
      <div className="card" >
        <div>{id}</div>
        <div>{title}</div>
        <div>{price}</div>
          <div className='pokeimgContainer' style={{ cursor:'pointer' }} onClick={showModal}>
          <img src ={pictureUrl} alt=''/>
        </div>
      </div>
      
      {
        openModal ?
        <div className='backgroundModal'>
          <div id='itemDetail'>
            <button onClick={showModal}>CERRAR MODAL</button>
            <div>{id}</div>
            <div>{title}</div>
            <img src={pictureUrl} alt="" />
          </div>
        </div>
        :
        null
      }
    </>
  )
}

export default Item;