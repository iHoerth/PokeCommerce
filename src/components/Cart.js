import {useContext} from 'react'
import { CartContext } from '../Context/CartContext';
import Counter from './Counter';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';

const Cart = ({setOpenCart}) => {
const [cart, addToCart, removeFromCart, clearCart] = useContext(CartContext);

if(cart.length === 0){
  return (
    <div className='cart'>
      <CancelIcon onClick={() => setOpenCart()} style={{fontSize:'32px',color:'#E64848',cursor:'pointer'}}/>
      <h2 className='cart-title'>TU CANASTA</h2>
      <div className='cart-products-container'>
        <p>TU CANASTA ESTA VACIA</p>
      </div>
    </div>
  )
}

return (
    <div className='cart'>
      <CancelIcon onClick={() => setOpenCart()} style={{fontSize:'32px',color:'#E64848',cursor:'pointer'}}/>
      <h2 className='cart-title'>TU CANASTA</h2>
      <div className='cart-products-container'>
      {
        cart.map(ele => {
          return(
      
            <div key={ele.name} className='cart-products'>
              <div>{ele.name}</div>
              <div>Quantity: {ele.quantity}</div>
              <div>${ele.cost * ele.quantity}</div>
              <img src={ele.img} alt={ele.nombre+' img'} />
              <Counter product={ele.poke} />
            </div>
       
          )
        })
      }
      
        <DeleteIcon onClick={() => clearCart()} style={{fontSize:'34px',color:'gray',cursor:'pointer'}}/>
        <p>PRECIO TOTAL ${cart.reduce((acc,ele) => acc + ele.cost * ele.quantity ,0)}</p>
      </div>
    </div>
  )
}

export default Cart