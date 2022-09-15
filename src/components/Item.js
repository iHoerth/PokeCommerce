import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';
import ItemDetailContainer from './ItemDetailContainer';
// import {Navigate, useNavigate} from 'react-router-dom';

export const Item = ({id,title,price,pictureUrl,getValues}) => {
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
          <ItemDetail showModal={showModal} id={id} title={title} pictureUrl={pictureUrl} getValues={getValues}/>
        </div>
        :
        null
      }
    </>
  )
}

export default Item;