import {useState} from 'react'
import { toTitleCase } from '../Services/Helpers';
import ItemDetail from './ItemDetail';
import Counter from './Counter';

export const Item = ({product}) => {
  const [openDetail,setOpenDetail] = useState(false);
  
  const showDetail = () => {
    setOpenDetail(!openDetail);
    document.body.classList.toggle('no-scroll');
  }

  return (
    <>
      <div className='card-container' >
        <div className="card" onClick={showDetail} style={{ cursor:'pointer' }} >
          <div className='card-typeImg'>
            {
              product.productType === 'pokemon' ?
              product.types.map(type => <img key={product.id+type} className={'icon '+type} src={type+'.svg'} alt=''/>)
              : null
            }
          </div>
          <div>
            {
            product.productType === 'pokemon' ?
            `#`+product.id
            : null
            }
          </div>
          <div>{toTitleCase(product.name)}</div>
            <div className='pokeimgContainer'>
            <img src ={product.sprites.front_default || product.sprites.default} alt=''/>
          </div>
        </div>
        <Counter product={product} style={{fontSize:'32px'}} />
        <div>${product.cost}</div>
      </div>
      
      {
        openDetail ?
        <>
          <div className='backgroundModal' onClick={() => showDetail()}/>
          <ItemDetail  showDetail={showDetail} product={product}/>
        </>
        :
        null
      }
    </>
  )
}

export default Item;