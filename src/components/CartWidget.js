import { useContext} from 'react'
import { CartContext } from '../Context/CartContext'

const CartWidget = () => {
  const [cart, addToCart, removeFromCart, clearCart, user, setUser,totalInCart] = useContext(CartContext);
    
  return (
    <div className='widgetWrapper'>
      <div className="logoWrapper">
        <img className='logo' src='pokeball.png' alt="logo" />
        <div>MY PKMN</div>
      </div>
      <div className='widgetAmount'>
        {
        totalInCart
        }
      </div>
    </div>
  )
}

export default CartWidget

