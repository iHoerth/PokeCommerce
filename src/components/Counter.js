import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const Counter = ({poke,style = {fontSize:'32px'}}) => {
  const [cart,addToCart,removeFromCart,clearCart] = useContext(CartContext)

  return (
    <div id="detail-counter">
      <RemoveCircleIcon onClick={() => removeFromCart(poke)} style={{color:'#59CE8F',fontSize: style.fontSize, cursor:'pointer'}}/>
      <p style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        {
          cart.find(x => x.name === poke.name) ?
          cart.find(x => x.name === poke.name).quantity + ' U'
          :
          0 + ' U'
        }
      </p>
      <AddCircleIcon onClick={() => addToCart(poke)} style={{color:'#59CE8F',fontSize:style.fontSize, cursor:'pointer'}} />
      
    </div>
  )
}

export default Counter