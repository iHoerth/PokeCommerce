import { useContext} from 'react'
import { CartContext } from '../Context/CartContext'

const CartWidget = () => {
  const [cart] = useContext(CartContext);
    
  return (
    <div className='widgetWrapper'>
      <div className="logoWrapper">
        <img className='logo' src='pokeball.png' alt="logo" />
        <div>MY PKMN</div>
      </div>
      <div className='widgetAmount'>
        {
        cart.reduce((acc,current) => acc + current.quantity,0)
        }
      </div>
    </div>
  )
}

export default CartWidget

