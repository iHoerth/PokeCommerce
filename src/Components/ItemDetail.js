import {useContext} from 'react'
import {toTitleCase} from '../Services/Helpers';
import { CartContext } from '../Context/CartContext';
import Counter from './Counter';

const ItemDetail = ({showDetail, product}) => {
  const [cart,addToCart,removeFromCart,clearCart,setCart] = useContext(CartContext)
  
  return (
    
    <div id='itemDetail'>
      <div id='detail-closeModal-container'>
        <div className='detail-types'>
          {
            product.productType === 'pokemon' ?
            product.types.map(type => <img key={product.id+type} className={'icon-large '+type} src={type+'.svg'} alt='' />)
            :
            null
          }
          <div className='detail-number'># {product.id}</div>
        </div>
        <div className='detail-title'>
          <div className="detail-text">{toTitleCase(product.name)}</div>
        </div>
        <div id="detail-closeModal" onClick={showDetail} style={{ cursor:'pointer' }}>X</div>
      </div>


      <div id='detail-pokeContainer'> 
        <div className='detail-description-container'>
          <div className='detail-img-container'> 
            <img className="detail-img" src={product.sprites.front_default} alt="" />
            <div className='detail-description'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam earum deleniti, esse excepturi magni amet distinctio quod reiciendis reprehenderit illo, qui quibusdam consequuntur voluptatum veritatis minima odio pariatur facere!
              </p>
            </div>
          </div>

          <div className='detail-img-container'> 
            <img className="detail-img" src={product.sprites.back_default} alt="" />
            <div className='detail-description'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam earum deleniti, esse excepturi magni amet distinctio quod reiciendis reprehenderit illo, qui quibusdam consequuntur voluptatum veritatis minima odio pariatur facere!
              </p>
            </div>
          </div>
        </div>

        <div className='detail-evoChain-container'>
          <h3>EVO CHAIN</h3>
          <div className='detail-evoChain-img-container'> 
            <img className="detail-evoChain-img" src={product.sprites.front_default} alt="" />
            <img className="detail-evoChain-img" src={product.sprites.front_default} alt="" />
            <img className="detail-evoChain-img" src={product.sprites.front_default} alt="" />
          </div>
        </div>

      </div>
      <Counter poke={product} style={{fontSize:'50px',}} />
     
    </div>
  )
}

export default ItemDetail