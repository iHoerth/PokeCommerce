import {React, useState, useContext} from 'react'
import Counter from '../Components/Counter';
import { AppContext } from '../Components/Provider';

const CartContext = () => {
const [state,setState] = useContext(AppContext);


return (
    <div className='cart'>
      <div className='cart-title'>
        <h2>CART</h2>
      </div>
      <div className='cart-products-container'>
      {
        state.map(ele => {
          return(
            
            <div key={ele.name} className='cart-products'>
              <div>{ele.name}</div>
              <div>Quantity: {ele.quantity}</div>
              <div>{ele.price}</div>
              <img src={ele.img} alt={ele.nombre+' img'} />
              <Counter />
            </div>
            
          )
        })
      }
      </div>
    </div>
  )
}

export default CartContext