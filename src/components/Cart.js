import {useContext} from 'react'
import { CartContext } from '../Context/CartContext';
import Counter from './Counter';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@mui/material/Button';
import { toTitleCase } from '../Services/Helpers';

const Cart = ({setOpenCart}) => {
const [cart, addToCart, removeFromCart, clearCart] = useContext(CartContext);
const navigate = useNavigate();

const handleCheckOut = () => {
  setOpenCart();
  navigate('/checkout');
}

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
              <div>{toTitleCase(ele.name)}</div>
              <div>Quantity: {ele.quantity}</div>
              <div>${ele.cost * ele.quantity}</div>
              <img src={ele.img} alt={ele.nombre+' img'} />
              <Counter product={ele.poke} style={{position:'relative'}}/>
            </div>
          )
        })
      }
        <DeleteIcon onClick={() => clearCart()} style={{fontSize:'34px',color:'gray',cursor:'pointer'}}/>
          <Button
                onClick={handleCheckOut}
                type="submit"
                fullWidth
                variant="contained"
                style={{backgroundColor:"#E64848", width:'70%', height:'50px', margin:'0', padding:'0'}}
                sx={{ mt: 3, mb: 2 }}
              >
                <div className='checkoutButton'>
                 <div style={{fontWeight:'bolder',fontSize:'16px'}}>IR A PAGAR</div>
                 <div>Subtotal: ${cart.reduce((acc,ele) => acc + ele.cost * ele.quantity ,0)}</div>  
                </div>
          </Button>
      </div>
    </div>
  )
}

export default Cart