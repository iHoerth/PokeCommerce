import React, {useEffect, useState} from 'react'
import { toTitleCase } from '../Services/Helpers';
import ItemDetail from './ItemDetail';
import ItemDetailContainer from './ItemDetailContainer';
// import {Navigate, useNavigate} from 'react-router-dom';

export const Item = ({price,getValues,poke}) => {
  const [openDetail,setOpenDetail] = useState(false);
  
  const showDetail = () => {
    setOpenDetail(!openDetail);
    document.body.classList.toggle('no-scroll');
  }

  return (
    <>
      <div className='card-container'>
        <div className="card" >
          <div className='card-typeImg'>
            {
              poke.types.map(type => <img key={poke.id+type} className={'icon '+type} src={type+'.svg'} alt=''/>)
            }
          </div>
          <div>#{poke.id}</div>
          <div>{toTitleCase(poke.name)}</div>
          <div>{price}</div>
            <div className='pokeimgContainer' style={{ cursor:'pointer' }} onClick={showDetail}>
            <img src ={poke.sprites.front_default} alt=''/>
          </div>
        </div>
      </div>
      
      {
        openDetail ?
        <div className='backgroundModal'>
          <ItemDetail showDetail={showDetail} getValues={getValues} poke={poke}/>
        </div>
        :
        null
      }
    </>
  )
}

export default Item;